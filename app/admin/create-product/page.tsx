"use client";
import Link from "next/link";
import React from "react";

const CreateProduct = () => {
  return (
    <main className="h-screen w-full flex flex-column justify-center align-middle z-10 text-black">
      <Link href="/admin">Admin Page</Link>
    </main>
  );
};

export default CreateProduct;
