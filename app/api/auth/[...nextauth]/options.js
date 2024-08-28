import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongo from "@/utils/database/ConnectToDB";
import User from "@/utils/models/auth.model";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                try {
                    await connectMongo();
                    const user = await User.findOne({ email: credentials.email });
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
                    return user;
                } catch (e) {
                    console.log("Error", e);
                    return null;
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                const { name, email, image } = user;
                try {
                    await connectMongo();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        const hashedPassword = await bcrypt.hash(name + new Date(), 10);
                        const newUser = await User.create({
                            firstName: name,
                            email,
                            image,
                            password: hashedPassword,
                        });

                        if (newUser) {
                            return user;
                        }
                    }
                } catch (e) {
                    console.log("Google Error", e);
                }
            }
            if (account?.provider === "github") {
                const { name, email, image } = user;
                try {
                    await connectMongo();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        const hashedPassword = await bcrypt.hash(name + new Date(), 10);
                        const newUser = await User.create({
                            fistName: name,
                            email,
                            image,
                            password: hashedPassword,
                        });

                        if (newUser) {
                            return user;
                        }
                    }
                } catch (e) {
                    console.log("Github Error", e);
                }
            }
            return user;
        }
    }
}

export default authOptions;
