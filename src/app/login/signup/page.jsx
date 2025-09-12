"use client";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
import { checkEmail } from "@/utils/emailsyntaxe";
import { useRouter } from "next/navigation";
import { createUser } from "@/actions/createUser";

export default function Signup() {
  // Variable //

  const router = useRouter();

  // Function //
  const prepareCreateUser = async (formData) => {
    const username = formData.get("username");
    const pseudo = formData.get("pseudo");
    const email = formData.get("email");
    const password = formData.get("password");

    // On vérifie que tous les champs du formulaire sont rempli //
    if (!username || !pseudo || !email || !password) {
      // si c'est le cas on ajoute une notification avec toastify de react //
      return toast.error("Aucun champ ne doit être vide !");
    }

    // On vérifie si l'email est valide //
    if (!checkEmail(email)) {
      return toast.error("Veuilez saisir une adresse email valide.");
    }

    try {
      await createUser(username, pseudo, email, password);
      // en cas de succees d'inscription on veut affhcier un messagge //
      toast.success("Votre compte a bien été créé !");

      // Redirection de l'utilisateur vers la page de connexion //
      router.push("/login/signin");
    } catch (error) {
      return toast.error(error.message);
    }
    
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
        Inscrivez-vous
      </h1>
      {/* Form  */}
      <form action={prepareCreateUser}>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          className="bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          required
        />
        <input
          type="text"
          name="pseudo"
          placeholder="pseudo"
          className="bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          required
        />
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
          placeholder="mot de passe  "
          className="bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          required
        />

        <Button formButton>S'inscrire</Button>
      </form>
      <div className="flex justify-center items-center mt-4 ">
        <div className=" border-t border-gray-500 w-1/4"></div>
        <div className=" text-gray-500 mx-4 ">ou</div>
        <div className=" border-t border-gray-500 w-1/4"></div>
      </div>
      <Link href="/login/signin">
        <Button>Se connecter</Button>
      </Link>
    </div>
  );
}
