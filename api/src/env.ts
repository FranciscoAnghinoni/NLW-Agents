import z from "zod";

const envEschema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
});

export const env = envEschema.parse(process.env);
