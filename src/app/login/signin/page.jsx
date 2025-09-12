"use client";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { checkEmail } from "@/utils/emailsyntaxe";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Signin() {
  // Variable //
  const router = useRouter();

  // function //
  const prepareLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // On vérifie si on pas d'email ou mot de passe //
    if (!email || !password) {
      return toast.error("Veuillez remplir tous les champs.");
    }

    // On vérifie la syntaxe de l'email //
    if (!checkEmail(email)) {
      return toast.error("Veuilez saisir une adresse email valide.");
    }

    // On connecte notre utilisateur //
    try {
      const response = await signIn("credentials", {
        email, 
        password, 
        redirect: false
      })
      if(response.error) {
        return toast.error(response.error); 
      } 
      // en cas de succees de connexion  on veut affhcier un messagge //
      toast.success("Vous êtes connecté !");
      // Redirection
      router.push("/");
    } catch (error) {
      return toast.error(error.message);
    }

    console.log(email, password);
  };
  return (
    <div className="w-[440px] mx-auto">
      <h1 className="text-center font-bold text-white text-xl flex  gap-2 items-center">
        <Link href="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
            />
          </svg>
        </Link>
        Connectez-vous
      </h1>
      {/* Form  */}
      <form action={prepareLogin}>
        <input
          type="email"
          name="email"
          placeholder="adresse email"
          className="bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          required
        />
        <input
          type="password"
          name="password"
          placeholder="mot de passe"
          className="bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          required
        />
        <Button formButton>Se connecter </Button>
      </form>
      <div className="flex justify-center items-center mt-4 ">
        <div className=" border-t border-gray-500 w-1/4"></div>
        <div className=" text-gray-500 mx-4 ">ou</div>
        <div className=" border-t border-gray-500 w-1/4"></div>
      </div>
      <Link href="/login/signup">
        <Button>Créer un compte</Button>
      </Link>
    </div>
  );
}
