import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { sectors, getCountryDataForSector, type SectorId } from '@/lib/data/sectors'
import { countries } from '@/lib/data/countries'
import { getOpportunitiesBySector } from '@/lib/data/opportunities'
import { formatLargeNumber } from '@/lib/utils/format'
import { SectorCountryChart } from '@/components/dashboard/sector-country-chart'
import { cn } from '@/lib/utils'
import { 
  ArrowLeft, 
  Cpu, 
  Landmark, 
  Globe, 
  Heart, 
  Plane, 
  Ship,
  TrendingUp,
  TrendingDown,
  Building2,
  Users,
  Shield,
  Clock,
  ExternalLink
} from 'lucide-react'

interface SectorPageProps {
  params: Promise<{
    sector: string
  }>
}

const sectorIcons: Record<string, React.ReactNode> = {
  'technology': <Cpu className="h-8 w-8" />,
  'financial-services': <Landmark className="h-8 w-8" />,
  'online-services': <Globe className="h-8 w-8" />,
  'wellness-health': <Heart className="h-8 w-8" />,
  'tourism': <Plane className="h-8 w-8" />,
  'import-export': <Ship className="h-8 w-8" />,
}

const intensityColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { sector: sectorParam } = await params
  const sectorId = sectorParam as SectorId
  const sector = sectors[sectorId]
  
  if (!sector) {
    notFound()
  }

  const countryData = getCountryDataForSector(sectorId)
  const opportunities = getOpportunitiesBySector(sectorId)
  
  // Calculate aggregated metrics
  const totalMarketSize = countryData.reduce((sum, d) => sum + d.marketSize, 0)
  const avgGrowth = countryData.reduce((sum, d) => sum + d.marketSizeGrowth, 0) / countryData.length
  const avgOpportunityScore = countryData.reduce((sum, d) => sum + d.opportunityScore, 0) / countryData.length

  // Sort countries by opportunity score
  const sortedCountryData = [...countryData].sort((a, b) => b.opportunityScore - a.opportunityScore)

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <Link href="/dashboard/sectors">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Sectors
        </Button>
      </Link>

      {/* Sector Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary">
            {sectorIcons[sectorId]}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{sector.name}</h1>
            <p className="text-muted-foreground mt-1 max-w-xl">
              {sector.description}
            </p>
            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
              <span>Global Market: ${formatLargeNumber(sector.globalMarketSize * 1000000000)}</span>
              <span>Global Growth: {sector.averageGrowthRate}%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-2xl font-bold text-primary">{avgOpportunityScore.toFixed(0)}</p>
            <p className="text-xs text-muted-foreground">Avg Opportunity</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Building2 className="h-4 w-4" />
              <span className="text-xs">Regional Market Size</span>
            </div>
            <p className="text-xl font-bold">${formatLargeNumber(totalMarketSize * 1000000)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs">Avg Growth Rate</span>
            </div>
            <p className={cn(
              'text-xl font-bold',
              avgGrowth > 10 ? 'text-success' : avgGrowth > 5 ? 'text-primary' : 'text-muted-foreground'
            )}>
              +{avgGrowth.toFixed(1)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Globe className="h-4 w-4" />
              <span className="text-xs">Countries</span>
            </div>
            <p className="text-xl font-bold">{countryData.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Opportunities</span>
            </div>
            <p className="text-xl font-bold">{opportunities.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="countries" className="space-y-6">
        <TabsList>
          <TabsTrigger value="countries">Country Analysis</TabsTrigger>
          <TabsTrigger value="comparison">Market Comparison</TabsTrigger>
          <TabsTrigger value="competitors">Key Players</TabsTrigger>
        </TabsList>

        {/* Countries Tab */}
        <TabsContent value="countries" className="space-y-6">
          <SectorCountryChart countryData={sortedCountryData} sectorName={sector.name} />
          
          {/* Country Details Table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Market Overview by Country</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-6">Country</TableHead>
                    <TableHead className="text-right">Market Size</TableHead>
                    <TableHead className="text-right">Growth</TableHead>
                    <TableHead className="text-center">Competition</TableHead>
                    <TableHead className="text-center">Entry Barriers</TableHead>
                    <TableHead>Opportunity</TableHead>
                    <TableHead className="pr-6"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedCountryData.map((data) => {
                    const country = countries[data.countryCode]
                    
                    return (
                      <TableRow key={data.countryCode} className="group">
                        <TableCell className="pl-6">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          ${formatLargeNumber(data.marketSize * 1000000)}
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={cn(
                            'font-medium flex items-center justify-end gap-1',
                            data.marketSizeGrowth > 15 ? 'text-success' :
                            data.marketSizeGrowth > 8 ? 'text-primary' : 'text-muted-foreground'
                          )}>
                            {data.marketSizeGrowth > 0 ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            +{data.marketSizeGrowth.toFixed(1)}%
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className={cn('text-xs', intensityColors[data.competitiveIntensity])}>
                            {data.competitiveIntensity}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className={cn('text-xs', intensityColors[data.entryBarriers])}>
                            {data.entryBarriers}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 w-24">
                            <Progress value={data.opportunityScore} className="h-1.5" />
                            <span className="text-xs font-semibold text-primary">{data.opportunityScore}</span>
                          </div>
                        </TableCell>
                        <TableCell className="pr-6">
                          <Link href={`/dashboard/countries/${data.countryCode.toLowerCase()}`}>
                            <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comparison Tab */}
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Regional Market Comparison</CardTitle>
              <CardDescription>
                Comparing {sector.name} sector performance across all MENA markets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sortedCountryData.map((data) => {
                  const country = countries[data.countryCode]
                  const maxMarketSize = Math.max(...countryData.map(d => d.marketSize))
                  const marketSharePercent = (data.marketSize / totalMarketSize) * 100
                  
                  return (
                    <div key={data.countryCode} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span className="font-medium">{country.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">
                            ${formatLargeNumber(data.marketSize * 1000000)}
                          </span>
                          <span className="text-muted-foreground w-16 text-right">
                            {marketSharePercent.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Progress 
                          value={(data.marketSize / maxMarketSize) * 100} 
                          className="h-2 flex-1" 
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Competitors Tab */}
        <TabsContent value="competitors" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedCountryData.slice(0, 3).map((data) => {
              const country = countries[data.countryCode]
              
              return (
                <Card key={data.countryCode}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span>{country.flag}</span>
                      {country.name} - Key Players
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {data.keyPlayers.map((player, i) => (
                      <div key={i} className="p-3 rounded-lg border bg-muted/30">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-xs text-muted-foreground">{player.headquarters}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {player.marketShare}% share
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {player.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {player.strengths.slice(0, 2).map((strength, j) => (
                            <span key={j} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
