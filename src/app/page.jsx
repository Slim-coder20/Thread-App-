import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NewPostForm from "@/components/NewPostForm/NewPostForm";
export default async function Index() {
  // On créé des posts pour les afficher dans la page d'accueil
  // Variable //
  const session = await getServerSession(authOptions);

  const posts = [
    {
      _id: "1",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "jhondoe",
      profile: "/picture.png",
    },
    {
      _id: "2",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Stevejob",
      profile: "/picture.png",
    },
    {
      _id: "3",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Stevejob",
      profile: "/picture.png",
    },
    {
      _id: "4",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Stevejob",
      profile: "/picture.png",
    },
    {
      _id: "5",
      content: "Bienvenue sur mon tout nouveau profil Threads !",
      pseudo: "Stevejob",
      profile: "/picture.png",
    },
  ];
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
