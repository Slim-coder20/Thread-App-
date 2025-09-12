"use server";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import { checkEmail } from "@/utils/emailsyntaxe";

export const createUser = async (username, pseudo, email, password) => {
  // On vérifie que tous les champs du formulaire sont rempli //
  if (!username || !pseudo || !email || !password) {
    // si c'est le cas on ajoute une notification avec toastify de react //
    return { error: "Aucun champ ne doit être vide !" };
  }

  // On vérifie si l'email est valide //
  if (!checkEmail(email)) {
    return { error: "Veuilez saisir une adresse email valide." };
  }

  // Connexion à la base de donnée cluster //

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const collections = await db.listCollections().toArray();
  console.log("Collections dans la base :", collections);
  try {
    let user = await db.collection("users").find({ email }).limit(1).toArray();
    if (user.length !== 0) {
      throw new Error("Cet email est déjà utilisé");
    }
    user = await db.collection("users").find({ pseudo }).limit(1).toArray();
    if (user.length !== 0) {
      throw new Error("Ce pseudo est déjà utilisé.");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection("users").insertOne({
      username,
      pseudo,
      email,
      password: hashedPassword,
      profile: "/picture.png",
      bio: "-",
      url: "",
      creation: new Date(),
    });
  } catch (error) {
    console.error("Erreur createUser:", error);
    throw error;
  } finally {
    await client.close();
  }
};
