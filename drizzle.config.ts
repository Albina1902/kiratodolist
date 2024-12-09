import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:SEhMbOo07yJs@ep-sweet-term-a53fow5n.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
