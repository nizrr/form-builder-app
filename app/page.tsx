import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
   return (
      <div className="min-h-screen">
         <header className="flex items-center border-b border-slate-100 shadow-xs">
            <div className="container mx-auto flex items-center justify-between p-4">
               <h1 className="text-xl font-bold">Form Builder</h1>
               <div className="flex items-center space-x-4">
                  <SignedOut>
                     <SignInButton>
                        <Button>Sign In</Button>
                     </SignInButton>
                  </SignedOut>
                  <SignedIn>
                     <Button asChild>
                        <Link href="/dashboard">Dashboard</Link>
                     </Button>
                     <UserButton />
                  </SignedIn>
               </div>
            </div>
         </header>
         <main className="container mx-auto mt-5 p-4">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
               <h2 className="font-bold text-5xl">Create Forms Quickly</h2>
               <p className="text-xl text-slate-500">
                  Build forms with ease using our intuitive builder
               </p>
               <SignedIn>
                  <Button
                     asChild
                     size={"lg"}>
                     <Link href="/dashboard/forms/create">Create Form</Link>
                  </Button>
               </SignedIn>
               <SignedOut>
                  <SignUpButton>
                     <Button size={"lg"}>Get Started</Button>
                  </SignUpButton>
               </SignedOut>
            </div>
         </main>
      </div>
   )
}
