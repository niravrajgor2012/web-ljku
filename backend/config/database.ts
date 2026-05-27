import { parse } from 'pg-connection-string';

export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections: Record<string, object> = {
    postgres: {
      connection: env('DATABASE_URL')
        ? {
            ...parse(env('DATABASE_URL')),
            ssl: env('DATABASE_SSL', 'false') === 'true' ? { rejectUnauthorized: false } : false,
          }
        : {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: parseInt(env('DATABASE_PORT', '5432')),
            database: env('DATABASE_NAME', 'ljku_university'),
            user: env('DATABASE_USERNAME', 'postgres'),
            password: env('DATABASE_PASSWORD'),
            ssl: env('DATABASE_SSL', 'false') === 'true' ? { rejectUnauthorized: false } : false,
          },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env('DATABASE_CONNECTION_TIMEOUT', '60000'),
    },
  };
};
