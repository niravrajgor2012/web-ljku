export default ({ env }: { env: (key: string, defaultValue?: string) => string }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 60000,
  },
});
