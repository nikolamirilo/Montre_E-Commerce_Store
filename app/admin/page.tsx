"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Admin = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex flex-column justify-center align-middle z-10 text-black">
      <button
        onClick={() => {
          router.push("/admin/create-product");
        }}
      >
        Create Product
      </button>
    </div>
  );
};

export default Admin;
