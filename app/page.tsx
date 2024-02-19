'use client'
import Navbar from "@/components/Navbar"
import Link from "next/link"
import { useState } from "react"
import { FaBackward } from "react-icons/fa"

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Navbar/>
    <main className="flex justify-center items-center pt-52">
      <button onClick={() => setOpen(true)} className={`bg-teal-900 p-2 ${open? 'hidden': 'block'}`}>
        click me 🧐
      </button>
      <div className={`flex items-center gap-2 p-2 text-gray-200 ${open? 'block': 'hidden'}`}>
        <FaBackward onClick={() => setOpen(false)} className="mr-6 text-teal-600 cursor-pointer"></FaBackward>
        <Link href="/mehedi">Mehedi</Link>
        <span>/</span>
        <Link href="/tauhid">Tauhid</Link>
      </div>
    </main>
    </>
  )
}
