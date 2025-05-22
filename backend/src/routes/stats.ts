import { FastifyInstance } from 'fastify';

interface CreateStatsRequest {
  user_id: string;
  language_code: string;
  wpm: number;
  accuracy: number;
  mistakes: number;
  elapsed_time: number;
  text_length: number;
  completed: boolean;
}

export default async function (fastify: FastifyInstance) {
  fastify.post<{ Body: CreateStatsRequest }>('/stats', async (request, reply) => {
    const { 
      user_id, 
      language_code, 
      wpm, 
      accuracy, 
      mistakes, 
      elapsed_time, 
      text_length, 
      completed 
    } = request.body;

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(user_id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const result = fastify.db.prepare(`
        INSERT INTO stats (
          user_id, language_code, wpm, accuracy, mistakes, 
          elapsed_time, text_length, completed
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        user_id, language_code, wpm, accuracy, mistakes, 
        elapsed_time, text_length, completed
      );
      
      return { 
        id: result.lastInsertRowid,
        user_id, 
        language_code, 
        wpm, 
        accuracy, 
        mistakes, 
        elapsed_time, 
        text_length, 
        completed,
        created_at: Math.floor(Date.now() / 1000)
      };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to save stats' });
    }
  });

  fastify.get('/stats/user/:id', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const stats = fastify.db.prepare('SELECT * FROM stats WHERE user_id = ? ORDER BY created_at DESC').all(id);
      
      return { stats };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get stats' });
    }
  });

  fastify.get('/stats/user/:id/language/:code', async (request, reply) => {
    const { id, code } = request.params as { id: string; code: string };

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const stats = fastify.db.prepare(
        'SELECT * FROM stats WHERE user_id = ? AND language_code = ? ORDER BY created_at DESC'
      ).all(id, code);
      
      return { stats };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get stats' });
    }
  });

  fastify.get('/stats/user/:id/average', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const averageStats = fastify.db.prepare(`
        SELECT 
          language_code,
          AVG(wpm) as avg_wpm,
          AVG(accuracy) as avg_accuracy,
          AVG(mistakes) as avg_mistakes,
          AVG(elapsed_time) as avg_elapsed_time,
          COUNT(*) as count
        FROM stats 
        WHERE user_id = ? 
        GROUP BY language_code
      `).all(id);
      
      return { averageStats };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get average stats' });
    }
  });
}
