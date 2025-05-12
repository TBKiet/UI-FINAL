import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Extend the built-in session types
   */
  interface Session {
    user: {
      /** The user's MongoDB ID */
      id?: string;
      /** The user's access token */
      accessToken?: string;
      /** The user's username from MongoDB */
      username?: string;
    } & DefaultSession["user"];
  }

  /**
   * Extend the built-in user types
   */
  interface User {
    /** The user's MongoDB ID */
    _id?: string;
    /** The user's username from MongoDB */
    username?: string;
    /** The user's access token */
    accessToken?: string;
    /** The user's creation date */
    createdAt?: Date;
  }
}