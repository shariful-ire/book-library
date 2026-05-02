import { betterAuth } from "better-auth";

export const auth = betterAuth({
  providers: [
    {
      id: "credentials",
      name: "Email & Password",
    },
  ],
});