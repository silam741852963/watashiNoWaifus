import { useState } from "react"
import { Header } from "./Header"

export const Mobile_Menu = ({onClick}) => {
  return (
    <section onClick={onClick} id="mobile-menu" className="fixed top-0 bg-transparent w-full text-5xl hidden flex-col justify-center backdrop-blur-xl z-10">
        <nav className="flex flex-col min-h-screen items-center py-8 justify-center gap-10" aria-label="mobile">
            <a href="#hero" className="hover:text-rose-600">Home</a>
            <a href="#waifu" className="hover:text-rose-600">Waifu</a>
            <a href="#quote" className="hover:text-rose-600">Quotes</a>
            <a href="#send" className="hover:text-rose-600">Send a letter</a>
            <a href="#footer" className="hover:text-rose-600">Legal</a>
        </nav>
    </section >
  )
}
