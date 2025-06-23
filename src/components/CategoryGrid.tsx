"use client"
import { motion } from "framer-motion"
import CategoryCard from "./CategoryCard"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function CategoryGrid({ categories }: { categories: any[] }) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-8 max-w-3xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {categories.map((cat, i) => (
        <motion.div key={cat.name} variants={item}>
          <CategoryCard category={cat} />
        </motion.div>
      ))}
    </motion.div>
  )
}