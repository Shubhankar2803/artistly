interface Artist {
  name: string
  category: string
  priceRange: string
  location: string
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-4 space-y-2 border-2 border-[#a259ff]">
      <h3 className="text-xl font-semibold text-[#a259ff]">{artist.name}</h3>
      <p className="text-sm text-gray-600 dark:text-[#c299ff]">{artist.category}</p>
      <p className="text-sm text-[#a259ff]">{artist.priceRange}</p>
      <p className="text-sm text-gray-500 dark:text-[#c299ff]">{artist.location}</p>
      <button className="mt-2 text-[#a259ff] border-b-2 border-[#a259ff] hover:text-white hover:bg-[#a259ff] hover:border-white dark:hover:text-black dark:hover:bg-[#a259ff] dark:hover:border-white transition px-2 py-1 rounded">
        Ask for Quote
      </button>
    </div>
  )
}
