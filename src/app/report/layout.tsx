import Link from 'next/link'
import { ReactNode } from 'react'
import reportsData from '@/data/reports.json'

export default function ReportLayout({ children }: { children: ReactNode }) {
  const { reports } = reportsData

  return (
    <div className="flex h-screen">
      <nav className="w-56 border-r p-4 bg-gray-50">
        <h2 className="mb-4 text-lg font-semibold">Reports</h2>
        {reports.map((r) => (
          <Link
            key={r.id}
            href={`/report/${r.id}`}
            className="block px-3 py-2 rounded hover:bg-gray-200"
          >
            {r.name}
          </Link>
        ))}
      </nav>

      <div className="flex-1 overflow-auto bg-white">{children}</div>
    </div>
  )
}
