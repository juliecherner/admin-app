import { DeleteResult } from "typeorm";
import { Table } from "../entity/table.entity";
import { TableType, TableQuality } from "../types/types";
import { dataSource } from "../database/data-source";
import { findUserById } from "./user.service";

export const getAllByUserId = async (
  userId: string
): Promise<TableQuality[]> => {
  const qualities = await dataSource
    .getRepository(Table)
    .createQueryBuilder("table")
    .where("table.userId = :userId", {
      userId: parseInt(userId),
    })
    .getMany();

  if (!qualities) {
    throw new Error("table qualities are not found");
  }

  return qualities;
};

export const addOne = async (
  userId: string,
  type: TableType,
  text: string
): Promise<TableQuality> => {
  const user = await findUserById(userId);

  const newQuality = await Table.create({ text, type, user }).save();

  if (!newQuality) throw new Error("quality is not created");

  return newQuality;
};

export const deleteById = async (id: string): Promise<DeleteResult> => {
  const deletedQuality = await Table.delete({ id: parseInt(id) });

  if (!deletedQuality) {
    throw new Error("Quality wasn't deleted");
  }

  return deletedQuality;
};
