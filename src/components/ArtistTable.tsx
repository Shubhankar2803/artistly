interface Artist {
  name: string
  category: string
  location: string
  fee: string
}

export default function ArtistTable({ data }: { data: Artist[] }) {
  return (
    <table className="min-w-full table-auto border shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left p-2">Name</th>
          <th className="text-left p-2">Category</th>
          <th className="text-left p-2">City</th>
          <th className="text-left p-2">Fee</th>
          <th className="text-left p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((artist, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{artist.name}</td>
            <td className="p-2">{artist.category}</td>
            <td className="p-2">{artist.location}</td>
            <td className="p-2">{artist.fee}</td>
            <td className="p-2">
              <button className="text-sm text-indigo-600 hover:underline">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
