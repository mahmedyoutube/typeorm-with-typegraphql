import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface IConfigType {
  dbType: "postgres" | "mysql";
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
  jwtTokenKey: string;
}

export const config: IConfigType = {
  dbType: process.env.DB_TYPE as "postgres",
  dbHost: process.env.DB_HOST!,
  dbPort: parseInt(process.env.DB_PORT!),
  dbUsername: process.env.DB_USERNAME!,
  dbPassword: process.env.DB_PASSWORD!,
  dbName: process.env.DB_NAME!,
  jwtTokenKey: process.env.JWT_TOKEN_KEY!,
};
