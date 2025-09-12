// Importe NextAuth pour gérer l'authentification
import NextAuth from "next-auth";
// Importe le provider Credentials pour l'authentification email/mot de passe
import CredentialsProvider from "next-auth/providers/credentials";
// Importe MongoClient pour se connecter à MongoDB
import { MongoClient } from "mongodb";
// Importe bcrypt pour comparer les mots de passe hashés
import bcrypt from "bcrypt";

// Options de configuration pour NextAuth
export const authOptions = {
  // Liste des providers d'authentification
  providers: [
    CredentialsProvider({
      name: "Credentials", // Nom du provider (affiché dans l'UI NextAuth)
      credentials: {
        email: { label: "Email", type: "email" },      // Champ email
        password: { label: "Password", type: "password" } // Champ mot de passe
      },
      // Fonction appelée lors de la tentative de connexion
      async authorize(credentials) {
        // Connexion à la base MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        // Recherche de l'utilisateur par email
        const user = await db.collection("users").findOne({ email: credentials.email });
        await client.close();

        // Si l'utilisateur existe et que le mot de passe est correct
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          // On retourne l'utilisateur sans le champ password (sécurité)
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }
        // Si l'utilisateur n'existe pas ou le mot de passe est incorrect, retourne null (échec)
        return null;
      }
    })
  ],
  // Utilise les sessions JWT (stateless)
  session: {
    strategy: "jwt"
  },
  // Clé secrète pour sécuriser les tokens et les sessions
  secret: process.env.NEXTAUTH_SECRET
};

// Crée le handler NextAuth avec la configuration ci-dessus
const handler = NextAuth(authOptions);
// Exporte le handler pour les requêtes GET et POST (obligatoire pour l'API NextAuth)
export { handler as GET, handler as POST };