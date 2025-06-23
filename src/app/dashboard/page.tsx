"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useState, ReactNode } from "react"

// Mock data for artist submissions
const mockArtists = [
  { id: 1, name: "Ariana Vox", category: "Singer", location: "Delhi", priceRange: "₹30K - ₹50K" },
  { id: 2, name: "DJ Blaze", category: "DJ", location: "Mumbai", priceRange: "₹20K - ₹40K" },
  { id: 3, name: "Rhythm Crew", category: "Dancer", location: "Bangalore", priceRange: "₹50K - ₹80K" },
  { id: 4, name: "TalkPro", category: "Speaker", location: "Delhi", priceRange: "₹10K - ₹25K" }
]

interface Artist {
  id: number
  name: string
  category: string
  location: string
  priceRange: string
}

interface TableProps {
  columns: string[]
  data: Artist[]
  renderActions: (row: Artist, idx: number) => ReactNode
}

// Reusable Table component
function Table({ columns, data, renderActions }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-[#a259ff] bg-white dark:bg-black">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col} className="px-4 py-3 text-[#a259ff] font-bold border-b border-[#a259ff]">{col}</th>
            ))}
            <th className="px-4 py-3 text-[#a259ff] font-bold border-b border-[#a259ff]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-6 text-center text-[#c299ff]">No submissions found.</td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={row.id} className="hover:bg-[#f3e8ff] dark:hover:bg-[#1a0033] transition">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.category}</td>
                <td className="px-4 py-3">{row.location}</td>
                <td className="px-4 py-3">{row.priceRange}</td>
                <td className="px-4 py-3">{renderActions(row, idx)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default function ManagerDashboardPage() {
  const [artists] = useState<Artist[]>(mockArtists)
  const [approvedIds, setApprovedIds] = useState<number[]>([])

  // Conditional rendering for approve action
  const handleApprove = (id: number) => {
    setApprovedIds(ids => [...ids, id])
  }

  return (
    <>
    <Header />
    <main className="min-h-screen bg-white dark:bg-black px-4 py-10">
      <h1 className="text-3xl font-bold text-[#a259ff] mb-8 text-center drop-shadow-[0_0_8px_#a259ff]">
        Manager Dashboard
      </h1>
      <Table
        columns={["Name", "Category", "City", "Fee"]}
        data={artists}
        renderActions={(row) =>
          approvedIds.includes(row.id) ? (
            <span className="text-green-600 font-semibold">Approved</span>
          ) : (
            <button
              className="px-3 py-1 rounded border-2 border-[#a259ff] text-[#a259ff] hover:bg-[#a259ff] hover:text-white transition font-semibold"
              onClick={() => handleApprove(row.id)}
            >
              Approve
            </button>
          )
        }
      />
    </main>
    <Footer />
    </>
    )}