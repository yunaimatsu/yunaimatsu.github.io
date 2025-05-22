import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function yamlPlugin() {
  return {
    name: 'yaml-loader',
    transform(src: string, id: string) {
      if (id.endsWith('.yaml') || id.endsWith('.yml')) {
        try {
          const data = yaml.load(src);
          return {
            code: `export default ${JSON.stringify(data)};`,
            map: null
          };
        } catch (e) {
          const err = e as Error;
          console.error(`Failed to parse YAML file ${id}: ${err.message}`);
          return {
            code: `export default { error: "Failed to parse YAML file" };`,
            map: null
          };
        }
      }
    },
    
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url.startsWith('/src/localization/languages/') && (req.url.endsWith('.yaml') || req.url.endsWith('.yml'))) {
          const filePath = path.join(process.cwd(), req.url);
          try {
            const content = fs.readFileSync(filePath, 'utf-8');
            res.setHeader('Content-Type', 'text/yaml');
            res.end(content);
          } catch (e) {
            next(e);
          }
        } else {
          next();
        }
      });
    }
  };
}
