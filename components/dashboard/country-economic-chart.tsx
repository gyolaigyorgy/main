'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { EconomicIndicator } from '@/lib/data/types'

interface CountryEconomicChartProps {
  indicators: EconomicIndicator[]
  countryName: string
  className?: string
}

export function CountryEconomicChart({ indicators, countryName, className }: CountryEconomicChartProps) {
  const chartData = indicators.map((ind) => ({
    year: ind.year.toString(),
    gdp: ind.gdp,
    gdpGrowth: ind.gdpGrowth,
    inflation: ind.inflation,
    unemployment: ind.unemployment,
    fdiInflow: ind.fdiInflow,
    publicDebt: ind.publicDebt,
    tradeBalance: ind.tradeBalance,
  }))

  return (
    <div className={className}>
      <Tabs defaultValue="growth" className="space-y-6">
        <TabsList>
          <TabsTrigger value="growth">GDP & Growth</TabsTrigger>
          <TabsTrigger value="inflation">Inflation & Unemployment</TabsTrigger>
          <TabsTrigger value="trade">Trade & FDI</TabsTrigger>
          <TabsTrigger value="debt">Public Debt</TabsTrigger>
        </TabsList>

        {/* GDP & Growth Chart */}
        <TabsContent value="growth">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">GDP and Growth Rate - {countryName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    yAxisId="left"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}B`}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
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
                    }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="gdp"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    fill="url(#gdpGradient)"
                    name="GDP (Billions USD)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="gdpGrowth"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="GDP Growth %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inflation & Unemployment */}
        <TabsContent value="inflation">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Inflation & Unemployment - {countryName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
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
                    }}
                    formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
                  />
                  <Line
                    type="monotone"
                    dataKey="inflation"
                    stroke="hsl(var(--chart-5))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Inflation Rate"
                  />
                  <Line
                    type="monotone"
                    dataKey="unemployment"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Unemployment Rate"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trade & FDI */}
        <TabsContent value="trade">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Trade Balance & FDI Inflows - {countryName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
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
                    tickFormatter={(value) => `$${value}B`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`$${value.toFixed(1)}B`, '']}
                  />
                  <Bar 
                    dataKey="tradeBalance" 
                    fill="hsl(var(--chart-1))" 
                    name="Trade Balance"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="fdiInflow" 
                    fill="hsl(var(--chart-3))" 
                    name="FDI Inflow"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Public Debt */}
        <TabsContent value="debt">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Public Debt (% of GDP) - {countryName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="debtGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-5))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-5))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
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
                    }}
                    formatter={(value: number) => [`${value.toFixed(1)}%`, 'Public Debt']}
                  />
                  <Area
                    type="monotone"
                    dataKey="publicDebt"
                    stroke="hsl(var(--chart-5))"
                    strokeWidth={2}
                    fill="url(#debtGradient)"
                    name="Public Debt"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
