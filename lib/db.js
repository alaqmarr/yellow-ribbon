import { PrismaClient } from "src/prisma";

const globalWithPrisma = global;
if (!globalWithPrisma.__prisma) {
  globalWithPrisma.__prisma = new PrismaClient({
    log: ["warn", "error"],
  });
}

export const db = globalWithPrisma.__prisma;
