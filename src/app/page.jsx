import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NewPostForm from "@/components/NewPostForm/NewPostForm";
import { MongoClient } from "mongodb";
export default async function Index() {
  // On créé des posts pour les afficher dans la page d'accueil
  // Variable //
  const session = await getServerSession(authOptions);
  // Récupréation des posts // 
  // Variable // 
  let posts , client; 
  try {
    // Connexion a la base de donnée // 
    client = await MongoClient.connect(process.env.MONGODB_URI); 
    const db = client.db(); 
    // Selection des posts depuis MongoDB // 
   posts = await db.collection('posts').find().sort({ creation: -1 }).toArray();

    // formater Post // 
    posts = posts.map(post => ({
      ...post, 
      _id: post._id.toString(),
    }))

  } catch (e) {
    throw new Error(e.message);
    
  }
  await client.close(); 
  
  return (
    <ConnectedLayout>
      <div className="md:w-[700px] w-full mx-auto mt-10">
        {/* New post  */}
        {/* On vérifie que cette partie n'est disponible que pour les utilisateurs 
        connecté en utilisant la method getServerSession */}
        {session?.user && (
          <div className="border-b border-gray-500 py-4">
            <NewPostForm />
          </div>
        )}

        {/* Posts */}
        {posts.map((post) => (
          <div key={post._id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </ConnectedLayout>
  );
}
