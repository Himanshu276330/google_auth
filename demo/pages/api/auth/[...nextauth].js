import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET
});


// {"web":
// {
// "client_id":"405029429556-anku95ot1f1g4a9nj9echoh9dk8bpvnh.apps.googleusercontent.com",
// "project_id":"rising-capsule-318811",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://oauth2.googleapis.com/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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",
// "redirect_uris":["http://localhost:3000/api/auth/callback/google"],
// "javascript_origins":["http://localhost:3000"]
// }
// }