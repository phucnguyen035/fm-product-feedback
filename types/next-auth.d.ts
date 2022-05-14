// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    username: string;
  }

  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession['user'];
  }
}
