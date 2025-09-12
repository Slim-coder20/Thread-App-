"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function Button({ children, onClick, withoutMarginTop, formButton }) {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={ formButton && pending }
      className={`bg-white rounded-3xl border-gray-400 cursor-pointer w-full disabled:bg-opacity-50 disabled:cursor-not-allowed p-4 text-black hover:bg-gray-300 duration-150${
        !withoutMarginTop ? " mt-4" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
