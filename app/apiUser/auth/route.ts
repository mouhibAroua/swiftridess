import connectseq from "../../../server/database-sequalize/index";
import User from "../../../server/models/users";
import NextAuth from "next-auth/next";
import { NextApiHandler } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import { CredentialsOptions} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions : any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: { email: string; password: string }) {
        const { email, password } = credentials;

        try {
          await connectseq();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    } as CredentialsOptions),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/LoginUser",
    signUp : "/SignUpUser",
  },
};


const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
