'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { CountrySectorData } from '@/lib/data/types'
import { sectors } from '@/lib/data/sectors'
import { formatLargeNumber } from '@/lib/utils/format'
import { 
  Cpu, 
  Landmark, 
  Globe, 
  Heart, 
  Plane, 
  Ship,
  ArrowRight,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react'

interface CountrySectorBreakdownProps {
  sectorData: CountrySectorData[]
  className?: string
}

const sectorIcons: Record<string, React.ReactNode> = {
  'technology': <Cpu className="h-5 w-5" />,
  'financial-services': <Landmark className="h-5 w-5" />,
  'online-services': <Globe className="h-5 w-5" />,
  'wellness-health': <Heart className="h-5 w-5" />,
  'tourism': <Plane className="h-5 w-5" />,
  'import-export': <Ship className="h-5 w-5" />,
}

const intensityColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
}

export function CountrySectorBreakdown({ sectorData, className }: CountrySectorBreakdownProps) {
  // Sort by opportunity score
  const sortedData = [...sectorData].sort((a, b) => b.opportunityScore - a.opportunityScore)

  return (
    <div className={cn('space-y-4', className)}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((data) => {
          const sector = sectors[data.sectorId]
          
          return (
            <Card key={data.sectorId} className="group hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {sectorIcons[data.sectorId]}
                    </div>
                    <div>
                      <CardTitle className="text-base">{sector.name}</CardTitle>
                      <CardDescription className="text-xs line-clamp-1">
                        {sector.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Market Size</p>
                    <p className="text-lg font-semibold">${formatLargeNumber(data.marketSize * 1000000)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Growth</p>
                    <p className={cn(
                      'text-lg font-semibold',
                      data.marketSizeGrowth > 10 ? 'text-success' :
                      data.marketSizeGrowth > 5 ? 'text-primary' : 'text-muted-foreground'
                    )}>
                      +{data.marketSizeGrowth.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Opportunity Score */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Opportunity Score</span>
                    <span className="text-sm font-semibold text-primary">{data.opportunityScore}</span>
                  </div>
                  <Progress value={data.opportunityScore} className="h-1.5" />
                </div>

                {/* Attributes */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className={cn('text-xs', intensityColors[data.competitiveIntensity])}>
                    {data.competitiveIntensity.charAt(0).toUpperCase() + data.competitiveIntensity.slice(1)} Competition
                  </Badge>
                  <Badge variant="outline" className={cn('text-xs', intensityColors[data.entryBarriers])}>
                    {data.entryBarriers.charAt(0).toUpperCase() + data.entryBarriers.slice(1)} Barriers
                  </Badge>
                </div>

                {/* Key Players Preview */}
                {data.keyPlayers.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Top Players</p>
                    <div className="flex flex-wrap gap-1">
                      {data.keyPlayers.slice(0, 3).map((player, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-0.5 bg-muted rounded-full"
                        >
                          {player.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outlook */}
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {data.outlook}
                  </p>
                </div>

                {/* Link to sector detail */}
                <Link href={`/dashboard/sectors/${data.sectorId}`}>
                  <Button variant="ghost" size="sm" className="w-full gap-2 group-hover:bg-primary/10">
                    View Sector Analysis
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
