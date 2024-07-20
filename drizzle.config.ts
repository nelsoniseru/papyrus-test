import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/users/schema.ts',
  out: './drizzle',
  dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USERNAME || 'root',
    password:'',
    database: process.env.DB_DATABASE || 'user_management',
  },
});