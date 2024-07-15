import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextApiRequest } from 'next';
import NextAuth from 'next-auth/next';
import { NextRequest } from 'next/server';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'admin-credential',
      credentials: {
        team: { label: 'Team', type: 'text' },
        nickname: { label: 'Nickname', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (!credentials) {
          return null;
        }

        const { team, nickname, password } = credentials;

        try {
          const response = await fetch(`${req.headers!.origin}/api/admin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ team, nickname, password }),
          });

          const result = await response.json();

          if (result.success) {
            return { id: nickname, team };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authorization', error);
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
