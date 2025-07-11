'use client'  

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer as ReResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  Legend
} from 'recharts'
import { Report } from '../types'  

interface ChartProps {
  report: Report
}

export function ReportCharts({ report }: ChartProps) {
  return (
    <div className="space-y-6">
      {/* Line Chart */}
      <div className="h-80">
        <ReResponsiveContainer width="100%" height="100%">
          <ReLineChart data={report.line}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
          </ReLineChart>
        </ReResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="h-80">
        <ReResponsiveContainer width="100%" height="100%">
          <ReBarChart data={report.bar}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" />
          </ReBarChart>
        </ReResponsiveContainer>
      </div>
    </div>
  )
}
