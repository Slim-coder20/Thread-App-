"use client";
import React from "react";

export default function Button({ children, onClick, withoutMarginTop }) {
  return (
    <button
      className={`bg-white rounded-3xl border-gray-400 cursor-pointer w-full p-4 text-black hover:bg-gray-300 duration-150${
        !withoutMarginTop ? " mt-4" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
