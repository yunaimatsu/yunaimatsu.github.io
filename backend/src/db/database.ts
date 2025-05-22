import fastifyPlugin from 'fastify-plugin';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { FastifyInstance } from 'fastify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, '../../data/typing_practice.db');

const schema = `
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  created_at INTEGER DEFAULT (unixepoch())
);

-- Stats table
CREATE TABLE IF NOT EXISTS stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  language_code TEXT NOT NULL,
  wpm INTEGER NOT NULL,
  accuracy REAL NOT NULL,
  mistakes INTEGER NOT NULL,
  elapsed_time INTEGER NOT NULL,
  text_length INTEGER NOT NULL,
  completed BOOLEAN NOT NULL,
  created_at INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Language customizations table
CREATE TABLE IF NOT EXISTS language_customizations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  language_code TEXT NOT NULL,
  name TEXT NOT NULL,
  texts TEXT NOT NULL, -- JSON array of texts
  user_id TEXT,
  is_default BOOLEAN DEFAULT 0,
  created_at INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- User preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
  user_id TEXT PRIMARY KEY,
  sudden_death BOOLEAN DEFAULT 0,
  game_over_enabled BOOLEAN DEFAULT 1,
  time_limit INTEGER DEFAULT 60,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch()),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
`;

const dbPlugin = async (fastify: FastifyInstance) => {
  try {
    const dataDir = join(__dirname, '../../data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const db = new Database(dbPath);
    
    db.pragma('foreign_keys = ON');
    
    db.exec(schema);
    
    fastify.decorate('db', db);
    
    fastify.addHook('onClose', (instance: FastifyInstance, done: () => void) => {
      if (instance.db) {
        instance.db.close();
      }
      done();
    });
    
    fastify.log.info('Database initialized');
  } catch (err) {
    fastify.log.error('Error initializing database:', err);
    throw err;
  }
};

export default fastifyPlugin(dbPlugin);
