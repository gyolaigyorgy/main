'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { Country } from '@/lib/data/types'
import { formatGDP, formatPopulation } from '@/lib/utils/format'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface CountryCardProps {
  country: Country
  className?: string
}

export function CountryCard({ country, className }: CountryCardProps) {
  const trendIcon = country.gdpGrowth > 0 
    ? <TrendingUp className="h-3 w-3 text-success" />
    : country.gdpGrowth < 0 
    ? <TrendingDown className="h-3 w-3 text-destructive" />
    : <Minus className="h-3 w-3 text-muted-foreground" />

  const riskColor = {
    low: 'bg-success/10 text-success border-success/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    high: 'bg-destructive/10 text-destructive border-destructive/20',
  }[country.riskRating]

  return (
    <Link href={`/dashboard/countries/${country.code.toLowerCase()}`}>
      <Card className={cn(
        'group cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5',
        className
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{country.flag}</span>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-xs text-muted-foreground">{country.capital}</p>
              </div>
            </div>
            <Badge variant="outline" className={cn('text-xs', riskColor)}>
              {country.riskRating.charAt(0).toUpperCase() + country.riskRating.slice(1)} Risk
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">GDP</p>
              <p className="text-lg font-semibold">{formatGDP(country.gdp)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Population</p>
              <p className="text-lg font-semibold">{formatPopulation(country.population)}</p>
            </div>
          </div>

          {/* GDP Growth */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">GDP Growth</span>
            <div className="flex items-center gap-1">
              {trendIcon}
              <span className={cn(
                'text-sm font-medium',
                country.gdpGrowth > 0 ? 'text-success' : 
                country.gdpGrowth < 0 ? 'text-destructive' : 'text-muted-foreground'
              )}>
                {country.gdpGrowth > 0 && '+'}{country.gdpGrowth}%
              </span>
            </div>
          </div>

          {/* Opportunity Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Opportunity Score</span>
              <span className="text-sm font-semibold text-primary">{country.opportunityScore}</span>
            </div>
            <Progress value={country.opportunityScore} className="h-1.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
