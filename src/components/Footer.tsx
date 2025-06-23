import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center bg-white/80 dark:bg-black/80 text-[#a259ff] shadow-[0_0_8px_#a259ff] mt-10">
      <div className="text-sm">
        © {new Date().getFullYear()} Artistly &mdash; All rights reserved.
      </div>
    </footer>
  )
}