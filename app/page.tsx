import Link from "next/link"
import { auth } from "@clerk/nextjs"

export default async function Home() {
  const {userId} = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-4xl mb-4">Title</h1>
        <p className="mb-4 text-2xl text-white/60">description</p>

        <Link href="/journal">

        <button className="bg-blue-600 px-4 rounded-lg text-xl py-2">get started</button>
        </Link>

      </div>
    </div>
  )
}
