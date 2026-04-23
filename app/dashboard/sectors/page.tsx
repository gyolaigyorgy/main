import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { sectorList, countrySectorData } from '@/lib/data/sectors'
import { countryList } from '@/lib/data/countries'
import { formatLargeNumber } from '@/lib/utils/format'
import { cn } from '@/lib/utils'
import { 
  Building2, 
  Cpu, 
  Landmark, 
  Globe, 
  Heart, 
  Plane, 
  Ship,
  ArrowRight,
  TrendingUp
} from 'lucide-react'

const sectorIcons: Record<string, React.ReactNode> = {
  'technology': <Cpu className="h-6 w-6" />,
  'financial-services': <Landmark className="h-6 w-6" />,
  'online-services': <Globe className="h-6 w-6" />,
  'wellness-health': <Heart className="h-6 w-6" />,
  'tourism': <Plane className="h-6 w-6" />,
  'import-export': <Ship className="h-6 w-6" />,
}

export default function SectorsPage() {
  // Calculate aggregated metrics for each sector
  const sectorMetrics = sectorList.map((sector) => {
    const sectorCountryData = countrySectorData.filter(d => d.sectorId === sector.id)
    const totalMarketSize = sectorCountryData.reduce((sum, d) => sum + d.marketSize, 0)
    const avgGrowth = sectorCountryData.reduce((sum, d) => sum + d.marketSizeGrowth, 0) / sectorCountryData.length
    const avgOpportunityScore = sectorCountryData.reduce((sum, d) => sum + d.opportunityScore, 0) / sectorCountryData.length
    const topCountry = [...sectorCountryData].sort((a, b) => b.opportunityScore - a.opportunityScore)[0]
    
    return {
      ...sector,
      totalMarketSize,
      avgGrowth,
      avgOpportunityScore,
      topCountry,
    }
  })

  // Sort by opportunity score
  const sortedSectors = sectorMetrics.sort((a, b) => b.avgOpportunityScore - a.avgOpportunityScore)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          Sector Analysis
        </h1>
        <p className="text-muted-foreground">
          Analyze 6 key industry sectors across the MENA region
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Total Sectors</p>
            <p className="text-2xl font-bold">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Combined Market Size</p>
            <p className="text-2xl font-bold">
              ${formatLargeNumber(sectorMetrics.reduce((sum, s) => sum + s.totalMarketSize * 1000000, 0))}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Avg Growth Rate</p>
            <p className="text-2xl font-bold text-success">
              +{(sectorMetrics.reduce((sum, s) => sum + s.avgGrowth, 0) / sectorMetrics.length).toFixed(1)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Countries Covered</p>
            <p className="text-2xl font-bold">{countryList.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Sector Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedSectors.map((sector) => {
          const topCountryData = countryList.find(c => c.code === sector.topCountry?.countryCode)
          
          return (
            <Card key={sector.id} className="group hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {sectorIcons[sector.id]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{sector.name}</CardTitle>
                      <CardDescription className="text-xs line-clamp-2">
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
                    <p className="text-xs text-muted-foreground">Regional Market Size</p>
                    <p className="text-xl font-bold">${formatLargeNumber(sector.totalMarketSize * 1000000)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avg Growth</p>
                    <p className={cn(
                      'text-xl font-bold flex items-center gap-1',
                      sector.avgGrowth > 10 ? 'text-success' :
                      sector.avgGrowth > 5 ? 'text-primary' : 'text-muted-foreground'
                    )}>
                      <TrendingUp className="h-4 w-4" />
                      +{sector.avgGrowth.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Opportunity Score */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Avg Opportunity Score</span>
                    <span className="text-sm font-semibold text-primary">{sector.avgOpportunityScore.toFixed(0)}</span>
                  </div>
                  <Progress value={sector.avgOpportunityScore} className="h-2" />
                </div>

                {/* Top Market */}
                {topCountryData && (
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="text-xs text-muted-foreground">Top Market</p>
                      <p className="font-medium flex items-center gap-2">
                        <span>{topCountryData.flag}</span>
                        {topCountryData.name}
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Score: {sector.topCountry.opportunityScore}
                    </Badge>
                  </div>
                )}

                {/* Global Context */}
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    Global market: ${formatLargeNumber(sector.globalMarketSize * 1000000000)} | 
                    Global growth: {sector.averageGrowthRate}%
                  </p>
                </div>

                {/* View Detail Button */}
                <Link href={`/dashboard/sectors/${sector.id}`}>
                  <Button variant="ghost" size="sm" className="w-full gap-2 group-hover:bg-primary/10">
                    View Detailed Analysis
                    <ArrowRight className="h-4 w-4" />
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
