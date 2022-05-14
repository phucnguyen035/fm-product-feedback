import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var,vars-on-top
  var prisma: PrismaClient;
}

let client: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  client = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  client = global.prisma;
}

export const prisma = client;
