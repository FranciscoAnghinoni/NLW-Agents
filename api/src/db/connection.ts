import postgres from "postgres";
import { env } from "../env.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import { schema } from "./schemas/index.ts";

export const client = postgres(env.DATABASE_URL);
export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(client, { schema, casing: "snake_case" });
