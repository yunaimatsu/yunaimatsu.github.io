import { FastifyInstance } from 'fastify';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const languagesDir = join(__dirname, '../../../src/localization/languages');

interface LanguageCustomizationRequest {
  language_code: string;
  name: string;
  texts: string[]; // Array of texts
  user_id: string;
}

export default async function (fastify: FastifyInstance) {
  fastify.get('/languages', async (request, reply) => {
    try {
      const files = await fs.readdir(languagesDir);
      const languageFiles = files.filter(file => file.endsWith('.yaml'));
      
      const languages = await Promise.all(
        languageFiles.map(async (file) => {
          const filePath = join(languagesDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          const data = yaml.load(content) as { name: string };
          const code = file.replace('.yaml', '');
          
          return {
            code,
            name: data.name
          };
        })
      );
      
      return { languages };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get languages' });
    }
  });

  fastify.get('/languages/:code', async (request, reply) => {
    const { code } = request.params as { code: string };

    try {
      const filePath = join(languagesDir, `${code}.yaml`);
      
      try {
        await fs.access(filePath);
      } catch (err) {
        return reply.code(404).send({ error: 'Language not found' });
      }
      
      const content = await fs.readFile(filePath, 'utf-8');
      const data = yaml.load(content) as { name: string; texts: string[] };
      
      return {
        code,
        name: data.name,
        texts: data.texts
      };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get language' });
    }
  });

  fastify.post<{ Body: LanguageCustomizationRequest }>('/languages/custom', async (request, reply) => {
    const { language_code, name, texts, user_id } = request.body;

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(user_id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const existingCustomization = fastify.db.prepare(
        'SELECT * FROM language_customizations WHERE language_code = ? AND user_id = ?'
      ).get(language_code, user_id) as { id: number } | undefined;
      
      if (existingCustomization) {
        fastify.db.prepare(`
          UPDATE language_customizations 
          SET name = ?, texts = ?
          WHERE language_code = ? AND user_id = ?
        `).run(name, JSON.stringify(texts), language_code, user_id);
        
        return {
          id: existingCustomization.id,
          language_code,
          name,
          texts,
          user_id
        };
      } else {
        const result = fastify.db.prepare(`
          INSERT INTO language_customizations (language_code, name, texts, user_id)
          VALUES (?, ?, ?, ?)
        `).run(language_code, name, JSON.stringify(texts), user_id);
        
        return {
          id: result.lastInsertRowid,
          language_code,
          name,
          texts,
          user_id
        };
      }
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to create custom language' });
    }
  });

  fastify.get('/languages/custom/user/:id', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const customLanguages = fastify.db.prepare(
        'SELECT * FROM language_customizations WHERE user_id = ?'
      ).all(id) as Array<{ id: number; language_code: string; name: string; texts: string; user_id: string; is_default: boolean; created_at: number }>;
      
      const formattedCustomLanguages = customLanguages.map(lang => ({
        ...lang,
        texts: JSON.parse(lang.texts)
      }));
      
      return { customLanguages: formattedCustomLanguages };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get custom languages' });
    }
  });
}
