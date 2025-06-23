"use client"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className="ml-4 px-3 py-1 border-2 border-[#a259ff] rounded text-[#a259ff] hover:bg-[#a259ff] hover:text-black transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  )
}