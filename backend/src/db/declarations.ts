import { Database } from 'better-sqlite3';
import { FastifyInstance } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    db: Database;
  }
}
