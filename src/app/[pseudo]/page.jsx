"use client";
import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import Post from "@/components/Post/Post";

export default function Profile() {
  // Variable : utilisation du Hook useParams pour récupérer le profile de jhon doe //
  const params = useParams();
  const pseudo = params.pseudo;

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
      <div className=" mt-10 md:w-[700px] mx-auto text-white ">
        {/* Infos Profile  */}
        <div className=" flex justify-between gap-4 ">
          {/* Data les données du Profile  */}
          <div>
            <h1 className=" text-3xl font-semibold">Jhon Doe</h1>
            <div className=" text-gray-500 mt-2">@{pseudo}</div>
            <div className=" mt-5 whitespace-pre-line">-</div>
            <div className=" mt-5  text-blue-500 hover:text-blue-400 duration-150">
              <a href="https://instagram.com" target="_blank ">
                https://instagram.com
              </a>
            </div>
          </div>

          {/* Photo de profile  */}
          <div>
            <Image
              src="/picture.png"
              alt="user image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        {/* Tabs  */}
        <div className=" flex mt-10">
          {/* Threads  */}
          <div className=" flex-1 border-b border-white pb-4 px-4 text-center hover:text-white hover:border-white duration-150 cursor-pointer">
            Threads
          </div>

          {/* Response  */}
          <div className=" flex-1 border-b border-gray-500 text-gray-500 pb-4 px-4 text-center hover:text-white hover:border-white duration-150 cursor-pointer">
            Réponse
          </div>
          {/* Repost  */}
          <div className=" flex-1 border-b border-gray-500 text-gray-500 pb-4 px-4 text-center hover:text-white hover:border-white duration-150 cursor-pointer">
            Republication
          </div>
        </div>
        {/* Posts */}
        <div>
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </ConnectedLayout>
  );
}
