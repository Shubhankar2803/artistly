"use client"

import { createContext, useContext, useState } from "react"

type FilterContextType = {
  category: string
  setCategory: (c: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState("All")
  return (
    <FilterContext.Provider value={{ category, setCategory }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) throw new Error("useFilter must be used inside FilterProvider")
  return context
}
