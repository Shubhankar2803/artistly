import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import categories from "@/data/categories.json"
import Link from "next/link"
import AboutSection from "@/components/AboutSection"
import TestimonialSection from "@/components/TestimonialSection"
import Footer from "@/components/Footer"
import CategoryCard from "@/components/CategoryCard"

export default function HomePage() {
  return (
    <>
      <div
        className="relative bg-white dark:bg-black text-[#a259ff] min-h-screen"
        style={{
          backgroundImage: "url('/discoball.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0 dark:bg-black/60" />
        <div className="relative z-10">
          <Header />
        </div>
        <section className="relative z-10 py-28 text-center">
          <h1 className="text-5xl font-extrabold text-[#a259ff] drop-shadow-[0_0_10px_#a259ff]">
            Welcome to Artistly
          </h1>
          <p className="text-xl mt-4 text-[#c299ff] max-w-xl mx-auto">
            Find and book amazing performers for your event.
          </p>
          <Link href="/artists">
            <Button className="mt-8 bg-[#a259ff] text-white dark:text-black font-bold px-6 py-2 border border-[#a259ff] hover:bg-black hover:text-[#a259ff] shadow-[0_0_8px_#a259ff] transition">
              Explore Artists
            </Button>
          </Link>
        </section>
      </div>
      <section className="px-6 py-12 bg-white dark:bg-black text-[#a259ff] min-h-[50vh]">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-[#a259ff] pb-2 drop-shadow-[0_0_8px_#a259ff] text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </section>
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}
