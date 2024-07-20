

import { boolean, int, text, mysqlTable } from 'drizzle-orm/mysql-core';
export const User = mysqlTable('users', {
  id: int("id").primaryKey().autoincrement(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
});

