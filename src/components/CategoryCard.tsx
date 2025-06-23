import Link from "next/link"

interface Props {
  category: {
    name: string
    icon?: string
    description?: string
  }
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link href={`/artists?category=${category.name}`} className="block">
      <div
        className="rounded-lg p-4 text-center transition
          bg-black border-2 border-[#a259ff] text-[#a259ff]
          shadow-[0_0_8px_#a259ff]
          hover:shadow-[0_0_24px_#a259ff] hover:bg-[#1a0033] hover:border-[#c299ff]"
      >
        <div className="text-3xl mb-2">{category.icon || "🎭"}</div>
        <p className="text-lg font-bold mb-1">{category.name}</p>
        <p className="text-sm text-[#c299ff]">
          {category.description ||
            `Discover top ${category.name.toLowerCase()}s for your next event. Click to explore artists in this category.`}
        </p>
      </div>
    </Link>
  )
}
