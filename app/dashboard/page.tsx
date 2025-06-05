import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import React from "react"

export default function page() {
   return (
      <div>
         <h1 className="font-bold text-3xl">Welcome, John</h1>
         <p className="text-slate-500">Manage your forms and responses</p>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <div className="p-4 border rounded-lg shadow-sm">
               <h2 className="font-bold text-lg">My Forms</h2>
               <p className="text-3xl font-semibold">12</p>
               <Button
                  className="mt-2"
                  asChild>
                  <Link href="/dashboard/forms"> View Form </Link>
               </Button>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
               <h2 className="font-bold text-lg">Total Responses</h2>
               <p className="text-3xl font-semibold">100</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
               <h2 className="font-bold text-lg">Create New</h2>
               <p>Start building a form</p>
               <Button
                  className="mt-2"
                  asChild>
                  <Link href="/dashboard/forms/create">Create Form</Link>
               </Button>
            </div>
         </div>
         <Card className="mt-5">
            <CardContent>
               <p className="font-semibold text-xl">Recent Form</p>
               <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center mt-2 border-b pb-2">
                     <div>
                        <p className="">This is a title of a form</p>
                        <p className="text-sm text-slate-500">
                           0 Responses . Created at: 2023-01-01
                        </p>
                     </div>
                     <div>
                        <Button
                           size="sm"
                           asChild>
                           <Link href="/dashboard/forms/1">View</Link>
                        </Button>
                        <Button
                           size="sm"
                           className="ml-2"
                           asChild>
                           <Link href="/dashboard/forms/1/responses">Responses</Link>
                        </Button>
                     </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 border-b pb-2">
                     <div>
                        <p className="">This is a title of a form</p>
                        <p className="text-sm text-slate-500">
                           0 Responses . Created at: 2023-01-01
                        </p>
                     </div>
                     <div>
                        <Button
                           size="sm"
                           asChild>
                           <Link href="/dashboard/forms/1">View</Link>
                        </Button>
                        <Button
                           size="sm"
                           className="ml-2"
                           asChild>
                           <Link href="/dashboard/forms/1/responses">Responses</Link>
                        </Button>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
   )
}
