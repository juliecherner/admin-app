import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import { Admin } from "../entity/admin.entity";
import { Contact } from "../entity/contact.entity";
import { Todos } from "../entity/todos.entity";
import { Table } from "../entity/table.entity";
import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "../.env") });

const password = process.env.DB_PASSWORD || " ";
const dbName = process.env.DB_NAME || "postgres";
const port = parseInt(process.env.DB_PORT || "9000");

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: port,
  username: "postgres",
  password: password,
  database: dbName,
  entities: [User, Admin, Contact, Todos, Table],
  synchronize: false,
  logging: false,
  migrations: [
    /*...*/
  ],
  subscribers: [],
});
