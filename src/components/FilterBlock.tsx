interface Props {
  selectedCategory: string
  setCategory: (val: string) => void
}

export default function FilterBlock({ selectedCategory, setCategory }: Props) {
  const filters = ["Singer", "DJ", "Dancer", "Speaker"]

  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-1 rounded-full border transition ${
            selectedCategory === cat
              ? "bg-[#a259ff] text-black border-[#a259ff]"
              : "bg-black border-[#a259ff] text-[#a259ff]"
          }`}
        >
          {cat}
        </button>
      ))}

      {/* Reset All Button */}
      <button
        onClick={() => setCategory("All")}
        className={`px-4 py-1 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition`}
      >
        Reset All
      </button>
    </div>
  )
}
