import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "./dbConnect";
import user from "@/model/user";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }
                await dbConnect()
                const Newuser = await user.findOne({
                    email: credentials.email
                });

                console.log(credentials.password, Newuser)
                if (!Newuser || credentials.password !== Newuser.password) {
                    return null;
                }

                return {
                    id: Newuser.id,
                    email: Newuser.email,
                    role: Newuser.role,
                    randomKey: "The best random key",
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    role: u.role,
                    name: u.role,
                    image: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
    secret: 'thisisanawesomesecret'
};
