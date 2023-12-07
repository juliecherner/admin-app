import { Admin } from "../entity/admin.entity";
import { hashPassword, verifyPassword } from "../middleware/hash";
import { createJWTToken } from "../middleware/auth";
import { AdminToken } from "../types/types";

export const signUp = async (
  name: string,
  password: string
): Promise<Admin> => {
  const hashedPassword = await hashPassword(password);

  const newAdmin = await Admin.create({
    name: name,
    password: hashedPassword,
  }).save();

  if (!newAdmin) throw new Error("admin is not created");

  return newAdmin;
};

export const signIn = async (
  signName: string,
  signinPassword: string
): Promise<AdminToken> => {
  const admin = await Admin.findOneBy({ name: signName });

  if (!admin) throw new Error("admin is not found");

  const { id, name, password } = admin;

  const isMatch = await verifyPassword(signinPassword, password);

  if (!isMatch) {
    throw new Error("the password is wrong");
  }

  const token = await createJWTToken(id, name);

  return { id, name, token };
};

export const checkIfAdminExistsById = async (id: number): Promise<Admin> => {
  const admin = await Admin.findOneBy({ id: id });

  if (!admin) {
    throw new Error(`Admin is not found`);
  }

  return admin;
};
