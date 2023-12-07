import { DeleteResult } from "typeorm";
import { dataSource } from "../database/data-source";
import { User } from "../entity/user.entity";
import { checkIfAdminExistsById } from "./admin.service";

export const addNew = async (name: string, adminId: number): Promise<User> => {
  const admin = await checkIfAdminExistsById(adminId);
  const user = await User.create({ name, admin }).save();

  if (!user) throw new Error("User is not created");
  return user;
};

export const deleteOneById = async (id: string): Promise<DeleteResult> => {
  const deletedUser = await User.delete({ id: parseInt(id) });

  if (!deletedUser) throw new Error("User is not deleted");

  return deletedUser;
};

export const getAllByAdminId = async (adminId: string): Promise<User[]> => {
  const users = await dataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.adminId = :adminId", {
      adminId: parseInt(adminId),
    })
    .getMany();

  if (!users) {
    throw new Error("user are not found");
  }

  return users;
};

export const findUserById = async (id: string): Promise<User> => {
  const user = await User.findOneBy({ id: parseInt(id) });

  if (!user) throw new Error("user is not found");

  return user;
};
