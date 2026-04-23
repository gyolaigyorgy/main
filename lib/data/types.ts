// MPI Hub - TypeScript Interfaces for Market Intelligence Data

export type CountryCode = 'QA' | 'AE' | 'BH' | 'SA' | 'MA' | 'EG'

export type SectorId = 
  | 'technology' 
  | 'financial-services' 
  | 'online-services' 
  | 'wellness-health' 
  | 'tourism' 
  | 'import-export'

export type RiskLevel = 'low' | 'medium' | 'high'

export type TrendDirection = 'up' | 'down' | 'stable'

export interface Country {
  code: CountryCode
  name: string
  flag: string
  capital: string
  population: number // in millions
  gdp: number // in billions USD
  gdpGrowth: number // percentage
  gdpPerCapita: number // USD
  currency: string
  currencyCode: string
  officialLanguage: string
  businessLanguage: string
  timezone: string
  riskRating: RiskLevel
  easeOfBusiness: number // rank out of 190
  opportunityScore: number // 1-100
  keyStrengths: string[]
  keyChallenges: string[]
}

export interface EconomicIndicator {
  year: number
  quarter?: number
  gdp: number
  gdpGrowth: number
  inflation: number
  unemployment: number
  tradeBalance: number // billions USD
  fdiInflow: number // billions USD
  publicDebt: number // percentage of GDP
}

export interface Sector {
  id: SectorId
  name: string
  description: string
  icon: string
  globalMarketSize: number // billions USD
  averageGrowthRate: number // percentage
}

export interface CountrySectorData {
  countryCode: CountryCode
  sectorId: SectorId
  marketSize: number // millions USD
  marketSizeGrowth: number // percentage YoY
  opportunityScore: number // 1-100
  competitiveIntensity: 'low' | 'medium' | 'high'
  regulatoryComplexity: number // 1-10
  entryBarriers: 'low' | 'medium' | 'high'
  keyPlayers: Competitor[]
  trends: MarketTrend[]
  outlook: string
}

export interface Competitor {
  name: string
  marketShare: number // percentage
  headquarters: string
  description: string
  strengths: string[]
}

export interface MarketTrend {
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  timeframe: 'short-term' | 'medium-term' | 'long-term'
}

export interface MarketOpportunity {
  id: string
  title: string
  countryCode: CountryCode
  sectorId: SectorId
  score: number // 1-100
  description: string
  marketSize: number // millions USD
  growthPotential: number // percentage
  riskLevel: RiskLevel
  timeToEntry: string
  keyRequirements: string[]
}

export interface Alert {
  id: string
  type: 'opportunity' | 'risk' | 'regulatory' | 'market'
  title: string
  description: string
  countryCode?: CountryCode
  sectorId?: SectorId
  severity: 'info' | 'warning' | 'critical'
  timestamp: Date
  isRead: boolean
}

export interface TimeSeriesData {
  date: string
  value: number
  label?: string
}

export interface ComparisonMetric {
  metricName: string
  unit: string
  countries: {
    [key in CountryCode]?: number
  }
}

// API Integration Types (for future use)
export interface DataProvider {
  fetchCountryData(countryCode: CountryCode): Promise<Country>
  fetchSectorData(sectorId: SectorId, countryCode?: CountryCode): Promise<CountrySectorData[]>
  fetchEconomicIndicators(countryCode: CountryCode, years?: number): Promise<EconomicIndicator[]>
  fetchOpportunities(filters?: OpportunityFilters): Promise<MarketOpportunity[]>
}

export interface OpportunityFilters {
  countries?: CountryCode[]
  sectors?: SectorId[]
  minScore?: number
  maxRisk?: RiskLevel
}

// Report Types
export interface ReportConfig {
  title: string
  countries: CountryCode[]
  sectors: SectorId[]
  includeExecutiveSummary: boolean
  includeMarketOverview: boolean
  includeCompetitorAnalysis: boolean
  includeSWOT: boolean
  includeFinancialMetrics: boolean
  includeRecommendations: boolean
  dateRange?: {
    start: Date
    end: Date
  }
}

export interface Report {
  id: string
  config: ReportConfig
  generatedAt: Date
  status: 'pending' | 'generating' | 'completed' | 'failed'
  downloadUrl?: string
}
