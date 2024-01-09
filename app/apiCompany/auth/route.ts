import connectseq from "../../../server/database-sequalize/index";
import Company from "../../../server/models/company";
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

      async authorize(credentials: { emailCompany: string; passwordCompany: string }) {
        const { emailCompany, passwordCompany } = credentials;

        try {
          await connectseq();
          const company = await Company.findOne({ emailCompany });

          if (!company) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(passwordCompany, company.passwordCompany);

          if (!passwordsMatch) {
            return null;
          }

          return company;
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
    signIn: "/login",
    signUp : "/signup",
  },
};


const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
