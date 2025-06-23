"use client"
import { motion } from "framer-motion"

const testimonials = [
	{
		name: "Priya S.",
		text: "Artistly made booking a singer for our wedding so easy! The performance was unforgettable.",
		role: "Bride, Mumbai",
		icon: "👩‍🎤",
	},
	{
		name: "Rahul K.",
		text: "We found an amazing DJ for our corporate event. The process was smooth and the artist was fantastic.",
		role: "Event Manager, Bangalore",
		icon: "🧑‍💼",
	},
	{
		name: "Anjali M.",
		text: "I loved the variety of artists available. The onboarding process for performers is also super simple.",
		role: "Performer, Delhi",
		icon: "👩‍🎨",
	},
]

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.35,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
}

export default function TestimonialSection() {
	return (
		<section className="w-full my-16 px-0 py-10 bg-white/80 dark:bg-black/80 ">
			<motion.h2
				className="text-3xl font-bold mb-8 text-center text-[#a259ff] drop-shadow-[0_0_8px_#a259ff]"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: false }}
			>
				What Our Users Say
			</motion.h2>
			<motion.div
				className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
			>
				{testimonials.map((t, i) => (
					<motion.div
						key={i}
						className="bg-white/90 dark:bg-black/90 rounded-lg p-6 shadow-[0_0_8px_#a259ff] flex flex-col items-center"
						variants={item}
					>
						<div className="text-5xl mb-4">{t.icon}</div>
						<p className="text-[#6c3cff] dark:text-[#c299ff] text-center mb-4">
							&ldquo;{t.text}&rdquo;
						</p>
						<div className="mt-auto text-[#a259ff] font-semibold">{t.name}</div>
						<div className="text-xs text-[#c299ff]">{t.role}</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}