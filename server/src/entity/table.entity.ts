import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("table")
export class Table extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: "pros" | "cons";

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.contacts, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
