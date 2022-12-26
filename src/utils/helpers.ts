import bcrypt from "bcrypt";
import { HASH_PASSWORD_SALT } from "../global/constants";
import { sign as signJWT, verify as verifyJWT } from "jsonwebtoken";
import { config } from "../config";
import { IUser } from "../global/types";

export const encodePassword = async (password: string) =>
  bcrypt.hash(password, HASH_PASSWORD_SALT);

export const generateToken = async (data: {
  email: string;
  id: string | number;
}) =>
  new Promise((resolve, reject) => {
    const token = signJWT(data, config.jwtTokenKey);
    resolve(token);
  });

export const validateToken: (token: string) => Promise<false | IUser> = (
  token: string
) =>
  new Promise((resolve, reject) => {
    try {
      const userPayload = verifyJWT(token, config.jwtTokenKey) as IUser;
      return resolve(userPayload);
    } catch (err) {
      reject(false);
    }
  });
