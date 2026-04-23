'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import type { Country } from '@/lib/data/types'

interface CountryRadarChartProps {
  countries: Country[]
  className?: string
}

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  'hsl(var(--muted-foreground))',
]

export function CountryRadarChart({ countries, className }: CountryRadarChartProps) {
  // Normalize metrics to 0-100 scale for radar chart
  const maxGDP = 1200 // Max GDP in billions for scale
  const maxPopulation = 110 // Max population in millions for scale
  const maxGDPPerCapita = 80000 // Max GDP per capita for scale

  const metrics = [
    { metric: 'Opportunity Score', key: 'opportunityScore' },
    { metric: 'GDP Scale', key: 'gdpScale' },
    { metric: 'Population', key: 'populationScale' },
    { metric: 'GDP Growth', key: 'gdpGrowthScale' },
    { metric: 'Business Ease', key: 'businessEaseScale' },
    { metric: 'Wealth Level', key: 'wealthScale' },
  ]

  const chartData = metrics.map((m) => {
    const dataPoint: Record<string, string | number> = { metric: m.metric }
    
    countries.forEach((country) => {
      let value: number
      switch (m.key) {
        case 'opportunityScore':
          value = country.opportunityScore
          break
        case 'gdpScale':
          value = Math.min((country.gdp / maxGDP) * 100, 100)
          break
        case 'populationScale':
          value = Math.min((country.population / maxPopulation) * 100, 100)
          break
        case 'gdpGrowthScale':
          // Scale growth from -10 to +10 range to 0-100
          value = Math.max(0, Math.min(100, ((country.gdpGrowth + 10) / 20) * 100))
          break
        case 'businessEaseScale':
          // Lower rank is better, invert the scale
          value = Math.max(0, 100 - (country.easeOfBusiness / 190) * 100)
          break
        case 'wealthScale':
          value = Math.min((country.gdpPerCapita / maxGDPPerCapita) * 100, 100)
          break
        default:
          value = 0
      }
      dataPoint[country.name] = Math.round(value)
    })
    
    return dataPoint
  })

  if (countries.length === 0) {
    return (
      <Card className={className}>
        <CardContent className="flex items-center justify-center h-[400px]">
          <p className="text-muted-foreground">Select countries to compare</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Multi-Dimensional Country Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            <PolarGrid 
              stroke="hsl(var(--border))" 
              strokeOpacity={0.5}
            />
            <PolarAngleAxis 
              dataKey="metric" 
              tick={{ 
                fill: 'hsl(var(--muted-foreground))', 
                fontSize: 11 
              }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]}
              tick={{ 
                fill: 'hsl(var(--muted-foreground))', 
                fontSize: 10 
              }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => (
                <span className="text-sm text-foreground">{value}</span>
              )}
            />
            {countries.map((country, index) => (
              <Radar
                key={country.code}
                name={`${country.flag} ${country.name}`}
                dataKey={country.name}
                stroke={COLORS[index % COLORS.length]}
                fill={COLORS[index % COLORS.length]}
                fillOpacity={0.15}
                strokeWidth={2}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
