'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { MarketOpportunity } from '@/lib/data/types'
import { countries } from '@/lib/data/countries'
import { sectors } from '@/lib/data/sectors'
import { formatLargeNumber } from '@/lib/utils/format'
import { Sparkles } from 'lucide-react'

interface OpportunitiesTableProps {
  opportunities: MarketOpportunity[]
  className?: string
}

const riskColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
}

export function OpportunitiesTable({ opportunities, className }: OpportunitiesTableProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Top Market Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6">Opportunity</TableHead>
              <TableHead>Market</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead className="text-right">Size</TableHead>
              <TableHead className="text-right">Growth</TableHead>
              <TableHead>Score</TableHead>
              <TableHead className="pr-6">Risk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities.map((opp) => {
              const country = countries[opp.countryCode]
              const sector = sectors[opp.sectorId]
              
              return (
                <TableRow 
                  key={opp.id}
                  className="cursor-pointer"
                >
                  <TableCell className="pl-6 font-medium max-w-[200px]">
                    <span className="line-clamp-1">{opp.title}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span className="text-sm">{country.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{sector.name}</span>
                  </TableCell>
                  <TableCell className="text-right font-mono text-sm">
                    ${formatLargeNumber(opp.marketSize * 1000000)}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className={cn(
                      'text-sm font-medium',
                      opp.growthPotential > 15 ? 'text-success' :
                      opp.growthPotential > 8 ? 'text-primary' : 'text-muted-foreground'
                    )}>
                      +{opp.growthPotential.toFixed(1)}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 w-24">
                      <Progress value={opp.score} className="h-1.5 flex-1" />
                      <span className="text-xs font-medium text-primary w-6">{opp.score}</span>
                    </div>
                  </TableCell>
                  <TableCell className="pr-6">
                    <Badge variant="outline" className={cn('text-xs', riskColors[opp.riskLevel])}>
                      {opp.riskLevel.charAt(0).toUpperCase() + opp.riskLevel.slice(1)}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
