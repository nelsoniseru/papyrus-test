import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db,poolConnection} from './config/database.config';

(async()=>{
  await migrate(db, { migrationsFolder: './drizzle', migrationsTable: 'user_management' });
  poolConnection.end()
})()
   