"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { MongoClient } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const createPost = async (formData) => {
  // Variable : On commence par vérfier que notre utilisateur est bien connecté //
  const session = await getServerSession(authOptions);

  // si l'utilisateur n'est pas connecté //
  if (!session.user) {
    throw new Error("Vous devez être connecté.");
  }

  // Récupération des champs de formulaire //
  const content = formData.get("content");

  // validation simple //
  if (!content || content.trim() === "") {
    throw new Error("Le contenu du post est requis");
  }

  let client;
  try {
    // connexion à la base de donnée cluster //
    client = await MongoClient.connect(process.env.MONGODB_URI);
    // connexion a la base de donnée database //
    const db = client.db();
    const posts = db.collection("posts");

    // Création du post //
    const post = {
      content,
      userId: session.user.id,
      username: session.user.username,
      profile: session.user.profile,
      createAt: new Date(),
    };
    await posts.insertOne(post);
    return { success: true };
  } catch (error) {
    throw new Error("Erreur lors de la création du post :" + error.message);
  } finally {
    if (client) await client.close();
    revalidatePath("/");
  }
};
