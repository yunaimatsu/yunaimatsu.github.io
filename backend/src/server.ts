import Fastify from 'fastify';
import cors from '@fastify/cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

fastify.register(cors, {
  origin: true, // Allow all origins for now, can be restricted in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

fastify.register(import('./db/database.js'));

fastify.register(import('./routes/user.js'), { prefix: '/api' });
fastify.register(import('./routes/stats.js'), { prefix: '/api' });
fastify.register(import('./routes/language.js'), { prefix: '/api' });

fastify.get('/health', async () => {
  return { status: 'ok' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    const address = fastify.server.address();
    const port = typeof address === 'string' ? address : address?.port;
    console.log(`Server is running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
