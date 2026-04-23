'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import { economicIndicators } from '@/lib/data/countries'
import { TrendingUp } from 'lucide-react'

interface RegionOverviewChartProps {
  className?: string
}

export function RegionOverviewChart({ className }: RegionOverviewChartProps) {
  // Transform economic indicators data for chart
  const chartData = economicIndicators.AE.map((_, index) => {
    const year = economicIndicators.AE[index].year
    return {
      year: year.toString(),
      UAE: economicIndicators.AE[index].gdpGrowth,
      'Saudi Arabia': economicIndicators.SA[index].gdpGrowth,
      Qatar: economicIndicators.QA[index].gdpGrowth,
      Bahrain: economicIndicators.BH[index].gdpGrowth,
      Morocco: economicIndicators.MA[index].gdpGrowth,
      Egypt: economicIndicators.EG[index].gdpGrowth,
    }
  })

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Regional GDP Growth Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUAE" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorQA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              opacity={0.3}
            />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
            />
            <Area
              type="monotone"
              dataKey="UAE"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorUAE)"
            />
            <Area
              type="monotone"
              dataKey="Saudi Arabia"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSA)"
            />
            <Area
              type="monotone"
              dataKey="Qatar"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorQA)"
            />
            <Area
              type="monotone"
              dataKey="Egypt"
              stroke="hsl(var(--chart-5))"
              strokeWidth={1.5}
              fillOpacity={0}
            />
            <Area
              type="monotone"
              dataKey="Morocco"
              stroke="hsl(var(--chart-4))"
              strokeWidth={1.5}
              fillOpacity={0}
            />
            <Area
              type="monotone"
              dataKey="Bahrain"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={1.5}
              fillOpacity={0}
              strokeDasharray="3 3"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
