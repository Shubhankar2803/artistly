"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const FormSchema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  location: z.string().min(2),
  categories: z.array(z.string()).min(1),
  languages: z.array(z.string()).min(1),
  fee: z.string().min(1),
})

type FormData = z.infer<typeof FormSchema>

const categoryOptions = ["Singer", "Dancer", "DJ", "Speaker"]
const languageOptions = ["Hindi", "English", "Punjabi", "Tamil"]
const feeOptions = ["₹10K-₹20K", "₹20K-₹50K", "₹50K-₹1L", "₹1L+"]

export default function ArtistOnboardingForm() {
  const [image, setImage] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      categories: [],
      languages: [],
      fee: "",
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", { ...data, image })
    alert("Submitted to mock API ✅")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full bg-white dark:bg-black text-[#a259ff] px-0 sm:px-8 py-8 rounded-none"
    >
      <div>
        <label className="text-[#a259ff] font-semibold">Name</label>
        <Input
          {...register("name")}
          className="w-full border-2 border-[#a259ff] bg-white dark:bg-black text-[#a259ff] placeholder-[#c299ff] rounded px-3 py-2 shadow-[0_0_8px_#a259ff] focus:outline-none focus:ring-2 focus:ring-[#a259ff]"
        />
        {errors.name && <p className="text-[#a259ff] text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Bio</label>
        <Textarea
          {...register("bio")}
          className="w-full border-2 border-[#a259ff] bg-white dark:bg-black text-[#a259ff] placeholder-[#c299ff] rounded px-3 py-2 shadow-[0_0_8px_#a259ff] focus:outline-none focus:ring-2 focus:ring-[#a259ff]"
        />
        {errors.bio && <p className="text-[#a259ff] text-sm">{errors.bio.message}</p>}
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Category (Multi-select)</label>
        <div className="flex flex-wrap gap-4">
          {categoryOptions.map((opt) => (
            <label key={opt} className="text-[#a259ff]">
              <input
                type="checkbox"
                value={opt}
                {...register("categories")}
                className="accent-[#a259ff] mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
        {errors.categories && <p className="text-[#a259ff] text-sm">Select at least 1 category</p>}
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Languages Spoken</label>
        <div className="flex flex-wrap gap-4">
          {languageOptions.map((lang) => (
            <label key={lang} className="text-[#a259ff]">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="accent-[#a259ff] mr-2"
              />
              {lang}
            </label>
          ))}
        </div>
        {errors.languages && <p className="text-[#a259ff] text-sm">Select at least 1 language</p>}
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Fee Range</label>
        <select
          {...register("fee")}
          className="w-full border-2 border-[#a259ff] bg-white dark:bg-black text-[#a259ff] rounded px-3 py-2 shadow-[0_0_8px_#a259ff] focus:outline-none focus:ring-2 focus:ring-[#a259ff]"
        >
          <option value="">Select a range</option>
          {feeOptions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        {errors.fee && <p className="text-[#a259ff] text-sm">{errors.fee.message}</p>}
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Profile Image (optional)</label>
        <Input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full border-2 border-[#a259ff] bg-white dark:bg-black text-[#a259ff] rounded px-3 py-2 shadow-[0_0_8px_#a259ff] focus:outline-none focus:ring-2 focus:ring-[#a259ff]"
        />
      </div>

      <div>
        <label className="text-[#a259ff] font-semibold">Location</label>
        <Input
          {...register("location")}
          className="w-full border-2 border-[#a259ff] bg-white dark:bg-black text-[#a259ff] placeholder-[#c299ff] rounded px-3 py-2 shadow-[0_0_8px_#a259ff] focus:outline-none focus:ring-2 focus:ring-[#a259ff]"
        />
        {errors.location && <p className="text-[#a259ff] text-sm">{errors.location.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#a259ff] text-black dark:text-white font-bold py-2 rounded shadow-[0_0_8px_#a259ff] hover:bg-black hover:text-[#a259ff] hover:border-[#a259ff] border-2 border-[#a259ff] transition"
      >
        Submit
      </Button>
    </form>
  )
}
