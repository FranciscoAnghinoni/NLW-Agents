import { reset, seed } from "drizzle-seed";
import { schema } from "./schemas/index.ts";
import { db, sql } from "./connection.ts";

await reset(db, schema);
await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: <only for testing in dev mode>
console.log("Database seeded successfully");
