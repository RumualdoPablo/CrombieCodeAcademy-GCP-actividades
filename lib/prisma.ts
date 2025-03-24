import { PrismaClient } from "@prisma/client";

const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URL_CLOUD
    : process.env.DATABASE_URL;

export const prisma = new PrismaClient({
  datasources: {
    db: { url: databaseUrl },
  },
});

console.log(databaseUrl);
