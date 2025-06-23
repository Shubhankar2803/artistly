"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import artistsData from "@/data/artists.json"
import ArtistCard from "@/components/ArtistCard"
import FilterBlock from "@/components/FilterBlock"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ArtistListingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryFromURL = searchParams.get("category") || "All"

  const [category, setCategory] = useState("All")
  const [filtered, setFiltered] = useState(artistsData)

  useEffect(() => {
    setCategory(categoryFromURL)
  }, [categoryFromURL])

  useEffect(() => {
    if (category === "All") {
      setFiltered(artistsData)
    } else {
      setFiltered(artistsData.filter((a) => a.category === category))
    }

    // 🧭 Update URL on filter change
    const query = category === "All" ? "" : `?category=${category}`
    router.push(`/artists${query}`)
  }, [category])

  return (
    <>
      <Header />
      <main className="px-6 py-10 min-h-screen bg-white dark:bg-black text-[#a259ff]">
        <h2 className="text-2xl font-semibold mb-4 border-b border-[#a259ff] pb-2 drop-shadow-[0_0_8px_#a259ff]">
          Browse Artists
        </h2>
        <FilterBlock selectedCategory={category} setCategory={setCategory} />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
          {filtered.length === 0 ? (
            <p className="text-pink-300 col-span-full">No artists found.</p>
          ) : (
            filtered.map((artist, i) => (
              <ArtistCard key={i} artist={artist} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
