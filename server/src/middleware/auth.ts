import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(__dirname, "../../.env") });

const secretKey: Secret = process.env.JWT_SECRET_KEY || "";

export interface CustomRequest extends Request {
  admin: string | JwtPayload;
}

export const createJWTToken = async (
  adminId: number,
  adminName: string
): Promise<string> => {
  const token = jwt.sign(
    { id: adminId.toString(), name: adminName },
    secretKey,
    {
      expiresIn: "2 days",
    }
  );

  return token;
};

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, secretKey);
    (req as CustomRequest).admin = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
