'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import type { Country } from '@/lib/data/types'
import { formatGDP, formatPopulation, formatCurrency } from '@/lib/utils/format'
import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react'

interface CountryComparisonTableProps {
  countries: Country[]
  className?: string
}

const riskColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
}

export function CountryComparisonTable({ countries, className }: CountryComparisonTableProps) {
  return (
    <Card className={className}>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6 w-[200px]">Country</TableHead>
                <TableHead className="text-right">GDP</TableHead>
                <TableHead className="text-right">GDP Growth</TableHead>
                <TableHead className="text-right">Population</TableHead>
                <TableHead className="text-right">GDP/Capita</TableHead>
                <TableHead className="text-center">Risk</TableHead>
                <TableHead className="text-center">Ease of Business</TableHead>
                <TableHead className="w-[150px]">Opportunity Score</TableHead>
                <TableHead className="pr-6 w-[60px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {countries.map((country) => {
                const GrowthIcon = country.gdpGrowth > 0 
                  ? TrendingUp 
                  : country.gdpGrowth < 0 
                  ? TrendingDown 
                  : Minus
                const growthColor = country.gdpGrowth > 0 
                  ? 'text-success' 
                  : country.gdpGrowth < 0 
                  ? 'text-destructive' 
                  : 'text-muted-foreground'

                return (
                  <TableRow key={country.code} className="group">
                    <TableCell className="pl-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <p className="font-medium">{country.name}</p>
                          <p className="text-xs text-muted-foreground">{country.capital}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatGDP(country.gdp)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <GrowthIcon className={cn('h-3 w-3', growthColor)} />
                        <span className={cn('font-medium', growthColor)}>
                          {country.gdpGrowth > 0 && '+'}{country.gdpGrowth}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatPopulation(country.population)}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(country.gdpPerCapita, { compact: true })}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={cn('text-xs', riskColors[country.riskRating])}>
                        {country.riskRating.charAt(0).toUpperCase() + country.riskRating.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={cn(
                        'font-medium',
                        country.easeOfBusiness <= 30 ? 'text-success' :
                        country.easeOfBusiness <= 70 ? 'text-warning' : 'text-muted-foreground'
                      )}>
                        #{country.easeOfBusiness}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={country.opportunityScore} className="h-1.5 flex-1" />
                        <span className="text-xs font-semibold text-primary w-6">
                          {country.opportunityScore}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="pr-6">
                      <Link 
                        href={`/dashboard/countries/${country.code.toLowerCase()}`}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
