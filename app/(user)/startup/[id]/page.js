import React from 'react'
import { auth } from '@/auth'
import client from "@/app/lib/mongoSetup";

async function page({ params }) {
  // let {id}=await params; or->
  let c = (await params).id
  const session = await auth()
  return (
    <div>
      
    </div>
  )
}

export default page
