import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Todos } from "./todos.entity";
import { Table } from "./table.entity";
import { Contact } from "./contact.entity";
import { Admin } from "./admin.entity";
import {
  Todo as TodoType,
  Contact as ContactType,
  TableQuality as TableType,
} from "../types/types";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Admin, (admin) => admin.users)
  @JoinColumn()
  admin: Admin;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: ContactType[];

  @OneToMany(() => Todos, (todos) => todos.user)
  todos: TodoType[];

  @OneToMany(() => Table, (table) => table.user)
  table: TableType[];
}
