import { DeleteResult } from "typeorm";
import { Contact } from "../entity/contact.entity";
import { dataSource } from "../database/data-source";
import { findUserById } from "./user.service";

export const getAllByUserId = async (userId: string): Promise<Contact[]> => {
  const contacts = await dataSource
    .getRepository(Contact)
    .createQueryBuilder("contact")
    .where("contact.userId = :userId", {
      userId: parseInt(userId),
    })
    .getMany();

  if (!contacts) {
    throw new Error("contacts are not found");
  }

  return contacts;
};

export const addOne = async (
  userId: string,
  name: string,
  number: number
): Promise<Contact> => {
  const user = await findUserById(userId);

  const newContact = await Contact.create({ name, number, user }).save();

  if (!newContact) throw new Error("contact is not created");

  return newContact;
};

export const deleteById = async (id: string): Promise<DeleteResult> => {
  const deletedContact = await Contact.delete({ id: parseInt(id) });

  if (!deletedContact) {
    console.log("Contact wasn't deleted");
  }

  return deletedContact;
};
