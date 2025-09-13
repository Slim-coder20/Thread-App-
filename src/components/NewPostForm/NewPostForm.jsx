"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createPost } from "@/actions/createPost";

export default function NewPostForm() {
  // Variable //
  const { data: session } = useSession();

  // State //
  const [textarea, setTextarea] = useState("");

  // function : cette fonction va nous permettre
  // de préparer un nouveau Threads a envoyer a notre base de donnée //
  const prepareCreatePost = async (formData) => {
    try {
      await createPost(formData);
      setTextarea("");
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <form action={prepareCreatePost}>
      <div className=" flex gap-4 w-full items-center">
        {/* Photo à gauche  */}
        <div>
          {session?.user.profile && (
            <Image
              src={session.user.profile}
              alt="User"
              width={50}
              height={50}
              className="rounded-full mt-5"
            ></Image>
          )}
        </div>
        {/* Champ de formulaire à droite  */}
        <div className=" flex-1 mt-3">
          <textarea
            type="text"
            placeholder=" Commencer un Threads ..."
            className=" border border-gray-600 rounded-xl p-5 w-full text-white"
            name="content"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex justify-end ">
        <div>
          <Button formButton disabled={textarea.length < 1}>
            Publier
          </Button>
        </div>
      </div>
    </form>
  );
}
