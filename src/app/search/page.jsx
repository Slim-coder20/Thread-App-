import ConnectedLayout from "@/components/ConnectedLayout/ConnectedLayout";
import React from "react";

export default function Search() {
  return (
    <ConnectedLayout>
      <div className="md:w-[700px] w-full mx-auto mt-10">
        {/* Search  */}
        <form>
          <input
            type="search"
            placeholder="Rechercher"
            className=" bg-gray-800 block w-full mt-3 p-5 text-gray-300 rounded-xl "
          />
        </form>

        {/* results  */}
        <div className=" mt-32 text-center  text-gray-500 ">
          Recherchez des profils à découvrir
        </div>
      </div>
    </ConnectedLayout>
  );
}
