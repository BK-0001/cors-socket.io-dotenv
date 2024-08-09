import { config } from "dotenv";
import path from "path";

export const ENV = process.env.NODE_ENV || "development";
const PATH = path.join(__dirname, `../.env.${ENV}`);

config({ path: PATH });

export const PORT = process.env.PORT || 8000;
export const HOST = process.env.HOST || "localhost";
export const DB_URI = process.env.MONGO_URI;
