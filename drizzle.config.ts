import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./backendSrc/migrations",
  schema: "./backendSrc/apps/**/*.ts",
  dialect: "sqlite",
  driver: "d1-http",
});
