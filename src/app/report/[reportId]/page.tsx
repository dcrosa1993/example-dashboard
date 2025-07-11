'use client'

import { useParams, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import reportsData from '@/data/reports.json'
import { Report } from '@/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const ReportCharts = dynamic(
  () => import('@/components/ReportCharts').then((mod) => mod.ReportCharts),
  { ssr: false }
)

export default function ReportPage() {
  const { reportId } = useParams()
  const router = useRouter()
  const [report, setReport] = useState<Report | null>(null)

  useEffect(() => {
    const found = (reportsData.reports as Report[]).find((r) => r.id === reportId)
    if (!found) {
      router.replace('/404')
    } else {
      setReport(found)
    }
  }, [reportId, router])

  if (!report) {
    return <p className="p-6">Loading...</p>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">{report.name}</h1>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total</CardTitle>
          </CardHeader>
          <CardContent>{report.cards.total}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average</CardTitle>
          </CardHeader>
          <CardContent>{report.cards.average}</CardContent>
        </Card>
      </div>

      <ReportCharts report={report} />
    </div>
  )
}
