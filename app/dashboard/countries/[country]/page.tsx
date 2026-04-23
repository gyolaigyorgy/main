import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { countries, economicIndicators, type CountryCode } from '@/lib/data/countries'
import { getSectorDataForCountry, sectors } from '@/lib/data/sectors'
import { getOpportunitiesByCountry } from '@/lib/data/opportunities'
import { formatGDP, formatPopulation, formatCurrency, formatPercentage } from '@/lib/utils/format'
import { CountryEconomicChart } from '@/components/dashboard/country-economic-chart'
import { CountrySectorBreakdown } from '@/components/dashboard/country-sector-breakdown'
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  Users, 
  Globe, 
  Building2, 
  TrendingUp, 
  TrendingDown,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CountryPageProps {
  params: Promise<{
    country: string
  }>
}

const riskColors = {
  low: 'bg-success/10 text-success border-success/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  high: 'bg-destructive/10 text-destructive border-destructive/20',
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country: countryParam } = await params
  const countryCode = countryParam.toUpperCase() as CountryCode
  const country = countries[countryCode]
  
  if (!country) {
    notFound()
  }

  const indicators = economicIndicators[countryCode]
  const latestIndicator = indicators[indicators.length - 1]
  const sectorData = getSectorDataForCountry(countryCode)
  const opportunities = getOpportunitiesByCountry(countryCode)

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <Link href="/dashboard/countries">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Countries
        </Button>
      </Link>

      {/* Country Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="text-6xl">{country.flag}</span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{country.name}</h1>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4" />
              {country.capital} | {country.timezone}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className={cn('text-xs', riskColors[country.riskRating])}>
                {country.riskRating.charAt(0).toUpperCase() + country.riskRating.slice(1)} Risk
              </Badge>
              <Badge variant="outline" className="text-xs">
                Ease of Business: #{country.easeOfBusiness}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-center px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-2xl font-bold text-primary">{country.opportunityScore}</p>
            <p className="text-xs text-muted-foreground">Opportunity Score</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <DollarSign className="h-4 w-4" />
              <span className="text-xs">GDP</span>
            </div>
            <p className="text-xl font-bold">{formatGDP(country.gdp)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs">GDP Growth</span>
            </div>
            <p className={cn(
              'text-xl font-bold',
              country.gdpGrowth > 0 ? 'text-success' : 'text-destructive'
            )}>
              {country.gdpGrowth > 0 && '+'}{country.gdpGrowth}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Users className="h-4 w-4" />
              <span className="text-xs">Population</span>
            </div>
            <p className="text-xl font-bold">{formatPopulation(country.population)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <DollarSign className="h-4 w-4" />
              <span className="text-xs">GDP per Capita</span>
            </div>
            <p className="text-xl font-bold">{formatCurrency(country.gdpPerCapita, { compact: true })}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <TrendingDown className="h-4 w-4" />
              <span className="text-xs">Inflation</span>
            </div>
            <p className="text-xl font-bold">{latestIndicator.inflation.toFixed(1)}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Globe className="h-4 w-4" />
              <span className="text-xs">FDI Inflow</span>
            </div>
            <p className="text-xl font-bold">${latestIndicator.fdiInflow.toFixed(1)}B</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for detailed analysis */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="economic">Economic Trends</TabsTrigger>
          <TabsTrigger value="sectors">Sector Analysis</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* SWOT - Strengths */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {country.keyStrengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-success mt-1">+</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* SWOT - Challenges */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  Key Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {country.keyChallenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-warning mt-1">-</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Country Info */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Country Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-xs text-muted-foreground">Currency</p>
                  <p className="font-medium">{country.currency} ({country.currencyCode})</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Official Language</p>
                  <p className="font-medium">{country.officialLanguage}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Business Language</p>
                  <p className="font-medium">{country.businessLanguage}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Timezone</p>
                  <p className="font-medium">{country.timezone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opportunities */}
          {opportunities.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Market Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.slice(0, 3).map((opp) => (
                    <div key={opp.id} className="p-4 rounded-lg border bg-muted/30">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-medium">{opp.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {opp.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {sectors[opp.sectorId].name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {opp.timeToEntry}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{opp.score}</p>
                          <p className="text-xs text-muted-foreground">Score</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Economic Tab */}
        <TabsContent value="economic">
          <CountryEconomicChart indicators={indicators} countryName={country.name} />
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors">
          <CountrySectorBreakdown sectorData={sectorData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
