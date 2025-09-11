"use client";
import Link from "next/link";
import React from "react";
import Button from "@/components/Button/Button";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Pass() {
  // Variables
  const router = useRouter();
  
  // Function //
  
  const onContinue = () => {
    // cette fonction va générer un cookies
    setCookie("guest", "true");

    // Redirection de l'utilisateur
    router.push("/");
  };

  return (
    <div className="mt-5 w-[440px] mx-auto flex flex-col gap-4">
      {/* Title */}
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
        Continuez en mode invité
      </h1>
      {/* Text */}
      <p className="text-gray-600 mt-4 ">
        Vous pouvez naviguer dans Threads sans profil,mais vous ne pourrez pas
        interagir avec du contenu ni en publier.
      </p>
      {/* Button to go on invited  */}
      <Button onClick={onContinue}>Continuer</Button>
    </div>
  );
}
