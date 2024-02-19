'use client'
import { useState } from "react"

export default function Home() {
  const [path, setPath] = useState()
  return (
    <main className="flex justify-center items-center pt-52">
      <button className="bg-teal-900 p-2">
        click me 🧐
      </button>
    </main>
  )
}
