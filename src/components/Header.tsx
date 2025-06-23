"use client";

import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "@/components/ThemeButton"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b-2 bg-white dark:bg-transparent shadow-[0_0_16px_#a259ff] relative">
      <Link href="/">
        <h1 className="text-xl font-bold text-[#a259ff] drop-shadow-[0_0_8px_#a259ff]">
          🎤 Artistly
        </h1>
      </Link>
      {/* Desktop Nav */}
      <nav className="space-x-4 hidden sm:flex">
        {["/", "/artists", "/onboard", "/dashboard"].map((href, idx) => (
          <Link
            key={href}
            href={href}
            className="text-[#a259ff] border-2 border-[#a259ff] rounded px-3 py-1
              hover:text-white hover:bg-[#a259ff] hover:border-white
              dark:hover:text-black dark:hover:bg-[#a259ff] dark:hover:border-white
              transition drop-shadow-[0_0_8px_#a259ff]"
          >
            {["Home", "Artists", "Onboard", "Dashboard"][idx]}
          </Link>
        ))}
      </nav>
      {/* Mobile Hamburger */}
      <nav
        className="sm:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#a259ff] mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#a259ff] mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#a259ff] transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-6 mt-2 bg-white/90 dark:bg-black/80 border-2 border-[#a259ff] rounded shadow-[0_0_16px_#a259ff] flex flex-col items-end z-50 w-40 sm:hidden">
          {["/", "/artists", "/onboard", "/dashboard"].map((href, idx) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-2 text-[#a259ff] border-2 border-[#a259ff] rounded my-1
                hover:text-white hover:bg-[#a259ff] hover:border-white
                dark:hover:text-black dark:hover:bg-[#a259ff] dark:hover:border-white
                transition drop-shadow-[0_0_8px_#a259ff]"
              onClick={() => setMenuOpen(false)}
            >
              {["Home", "Artists", "Onboard", "Dashboard"][idx]}
            </Link>
          ))}
        </div>
      )}
      <ThemeToggle />
    </header>
  )
}
