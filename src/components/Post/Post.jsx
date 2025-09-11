import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Post({ post }) {
  return (
    <div className="mt-9 border border-b-gray-900 flex items-center gap-2">
      {/* Photo */}
      <div>
        <Image
          src={post.profile}
          alt="User"
          width={50}
          height={50}
          className="rounded-full object-cover mb-5"
        />
      </div>

      {/* content  */}
      <div className="  text-white w-full ">
        {/* Infos  */}
        <div className=" flex items-center justify-between ">
          <Link href={`/${post.pseudo}`}>
            <b>{post.pseudo}</b>
          </Link>
          <div className=" text-sm text-gray-500">Il y a une heure</div>
        </div>
        {/* text */}
        <div className=" mt-3 whitespace-pre-line ">{post.content}</div>
      </div>
    </div>
  );
}
