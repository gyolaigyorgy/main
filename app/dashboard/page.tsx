import { KPICard } from '@/components/dashboard/kpi-card'
import { CountryCard } from '@/components/dashboard/country-card'
import { AlertFeed } from '@/components/dashboard/alert-feed'
import { OpportunitiesTable } from '@/components/dashboard/opportunities-table'
import { RegionOverviewChart } from '@/components/dashboard/region-overview-chart'
import { countryList } from '@/lib/data/countries'
import { getTopOpportunities, getRecentAlerts } from '@/lib/data/opportunities'
import { countrySectorData } from '@/lib/data/sectors'
import { Globe, DollarSign, Users, TrendingUp, Building2, Target } from 'lucide-react'

export default function DashboardPage() {
  const opportunities = getTopOpportunities(5)
  const alerts = getRecentAlerts(8)
  
  // Calculate aggregate metrics
  const totalGDP = countryList.reduce((sum, c) => sum + c.gdp, 0)
  const totalPopulation = countryList.reduce((sum, c) => sum + c.population, 0)
  const avgGrowth = countryList.reduce((sum, c) => sum + c.gdpGrowth, 0) / countryList.length
  const avgOpportunityScore = countryList.reduce((sum, c) => sum + c.opportunityScore, 0) / countryList.length
  const totalMarketSize = countrySectorData.reduce((sum, d) => sum + d.marketSize, 0)
  const avgSectorGrowth = countrySectorData.reduce((sum, d) => sum + d.marketSizeGrowth, 0) / countrySectorData.length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Executive Overview</h1>
        <p className="text-muted-foreground">
          MENA region market intelligence across 6 countries and 6 sectors
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <KPICard
          title="Total Region GDP"
          value={`$${(totalGDP / 1000).toFixed(2)}T`}
          change={avgGrowth}
          changeLabel="avg growth"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <KPICard
          title="Total Population"
          value={`${totalPopulation.toFixed(0)}M`}
          change={1.8}
          changeLabel="YoY"
          icon={<Users className="h-4 w-4" />}
        />
        <KPICard
          title="Countries"
          value="6"
          icon={<Globe className="h-4 w-4" />}
        />
        <KPICard
          title="Sectors Tracked"
          value="6"
          icon={<Building2 className="h-4 w-4" />}
        />
        <KPICard
          title="Avg Opportunity Score"
          value={avgOpportunityScore.toFixed(0)}
          change={2.3}
          icon={<Target className="h-4 w-4" />}
        />
        <KPICard
          title="Sector Market Size"
          value={`$${(totalMarketSize / 1000000).toFixed(1)}T`}
          change={avgSectorGrowth}
          changeLabel="growth"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* Charts and Alerts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RegionOverviewChart className="lg:col-span-2" />
        <AlertFeed alerts={alerts} />
      </div>

      {/* Opportunities Table */}
      <OpportunitiesTable opportunities={opportunities} />

      {/* Country Cards Grid */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Market Overview by Country</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countryList.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      </div>
    </div>
  )
}
