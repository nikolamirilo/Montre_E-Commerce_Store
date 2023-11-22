"use client"
import Link from "next/link"
import React from "react"

const Admin = () => {
  return (
    <main className="h-screen w-full flex flex-column justify-center align-middle z-10 text-black">
      <Link href="/admin/create-product">Create Product</Link>
    </main>
  )
}

export default Admin
