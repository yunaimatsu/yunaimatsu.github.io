import { FastifyInstance } from 'fastify';
import { randomUUID } from 'crypto';

interface CreateUserRequest {
  name?: string;
}

interface UserPreferencesRequest {
  sudden_death?: boolean;
  game_over_enabled?: boolean;
  time_limit?: number;
}

export default async function (fastify: FastifyInstance) {
  fastify.post<{ Body: CreateUserRequest }>('/users', async (request, reply) => {
    const { name = 'Anonymous' } = request.body;
    const userId = randomUUID();

    try {
      fastify.db.prepare('INSERT INTO users (id, name) VALUES (?, ?)').run(userId, name);
      
      fastify.db.prepare(`
        INSERT INTO user_preferences (user_id, sudden_death, game_over_enabled, time_limit)
        VALUES (?, ?, ?, ?)
      `).run(userId, false, true, 60);
      
      return { id: userId, name };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to create user' });
    }
  });

  fastify.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      return user;
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get user' });
    }
  });

  fastify.get('/users/:id/preferences', async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const preferences = fastify.db.prepare('SELECT * FROM user_preferences WHERE user_id = ?').get(id);
      
      if (!preferences) {
        return reply.code(404).send({ error: 'Preferences not found' });
      }
      
      return preferences;
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to get preferences' });
    }
  });

  fastify.put<{ Body: UserPreferencesRequest }>('/users/:id/preferences', async (request, reply) => {
    const { id } = request.params as { id: string };
    const { sudden_death, game_over_enabled, time_limit } = request.body;

    try {
      const user = fastify.db.prepare('SELECT * FROM users WHERE id = ?').get(id);
      
      if (!user) {
        return reply.code(404).send({ error: 'User not found' });
      }
      
      const currentPrefs = fastify.db.prepare('SELECT * FROM user_preferences WHERE user_id = ?').get(id) as {
        sudden_death: boolean;
        game_over_enabled: boolean;
        time_limit: number;
      } | undefined;
      
      const updatedPrefs = {
        sudden_death: sudden_death !== undefined ? sudden_death : currentPrefs?.sudden_death ?? false,
        game_over_enabled: game_over_enabled !== undefined ? game_over_enabled : currentPrefs?.game_over_enabled ?? true,
        time_limit: time_limit !== undefined ? time_limit : currentPrefs?.time_limit ?? 60,
        updated_at: Math.floor(Date.now() / 1000)
      };
      
      if (currentPrefs) {
        fastify.db.prepare(`
          UPDATE user_preferences 
          SET sudden_death = ?, game_over_enabled = ?, time_limit = ?, updated_at = ?
          WHERE user_id = ?
        `).run(
          updatedPrefs.sudden_death, 
          updatedPrefs.game_over_enabled, 
          updatedPrefs.time_limit,
          updatedPrefs.updated_at,
          id
        );
      } else {
        fastify.db.prepare(`
          INSERT INTO user_preferences (user_id, sudden_death, game_over_enabled, time_limit, updated_at)
          VALUES (?, ?, ?, ?, ?)
        `).run(
          id,
          updatedPrefs.sudden_death, 
          updatedPrefs.game_over_enabled, 
          updatedPrefs.time_limit,
          updatedPrefs.updated_at
        );
      }
      
      return { 
        user_id: id,
        ...updatedPrefs
      };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to update preferences' });
    }
  });
}
