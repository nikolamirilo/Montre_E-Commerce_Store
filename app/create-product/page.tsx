import React from "react";
import Form from "@/components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dodaj novi proizvod",
  description: "Dodaj novi proizvod u Montre online shop",
};

const CreatePost = () => {
  return (
    <main id="create-post" className="py-20">
      <Form />
    </main>
  );
};

export default CreatePost;
