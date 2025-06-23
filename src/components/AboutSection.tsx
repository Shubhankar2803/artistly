"use client"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <motion.section
      className="w-full my-16 px-0 py-10 bg-white/80 dark:bg-black/80 shadow-[0_0_16px_#a259ff] text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-[#a259ff] drop-shadow-[0_0_8px_#a259ff]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        viewport={{ once: false }}
      >
        About Artistly
      </motion.h2>
      <motion.p
        className="text-lg text-[#6c3cff] dark:text-[#c299ff] mb-2 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Artistly is your gateway to discovering and booking the best performing artists for any event.
        Our platform connects you with talented singers, dancers, DJs, and speakers, making your event unforgettable.
      </motion.p>
      <motion.p
        className="text-base text-[#a259ff] mt-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Whether you’re planning a wedding, corporate event, or private party, Artistly makes it easy to find the perfect performer.
      </motion.p>
    </motion.section>
  )
}