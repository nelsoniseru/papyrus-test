import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";



 const poolConnection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USERNAME || 'root',
  password:'',
  database: process.env.DB_DATABASE || 'user_management',
});

const db = drizzle(poolConnection);



export { db , poolConnection};