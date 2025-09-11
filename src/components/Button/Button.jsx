"use client"
import React from 'react'

export default function Button({children, onClick}) {
  return (
    <button className=' bg-white rounded-3xl border-gray-400 p-3 mt-3 cursor-pointer w-full text-black hover:bg-gray-300 duration-150'
            onClick={onClick}
    >
      {children}
    </button>
  )
}
