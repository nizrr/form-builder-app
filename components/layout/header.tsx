import { SignedIn, UserButton } from "@clerk/nextjs"
import { Sign } from "crypto"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"

export default function Header() {
   return (
      <header className="bg-background border-b border-slate-100 shadow-xs">
         <div className="container bg-white flex justify-between items-center mx-auto p-4">
            <div className="flex items-center space-x-5">
               <Link
                  href="/"
                  className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Form Builder</h1>
               </Link>
               <nav className="flex space-x-4">
                  <Link
                     href="/dashboard"
                     className="text-sm text-slate-600 hover:text-slate-900">
                     Dashboard
                  </Link>
                  <Link
                     href="/dashboard/forms"
                     className="text-sm text-slate-600 hover:text-slate-900">
                     My Forms
                  </Link>
               </nav>
            </div>
            <div className="flex items-center space-x-4">
               <SignedIn>
                  <Button asChild>
                     <Link href="/dashboard/forms/create">Create Form</Link>
                  </Button>
                  <UserButton />
               </SignedIn>
            </div>
         </div>
      </header>
   )
}
