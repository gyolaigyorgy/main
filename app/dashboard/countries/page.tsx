'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CountryCard } from '@/components/dashboard/country-card'
import { CountryComparisonTable } from '@/components/dashboard/country-comparison-table'
import { CountryRadarChart } from '@/components/dashboard/country-radar-chart'
import { countryList } from '@/lib/data/countries'
import { MapPin, LayoutGrid, Table, BarChart3 } from 'lucide-react'

export default function CountriesPage() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['AE', 'SA', 'QA'])

  const toggleCountry = (code: string) => {
    setSelectedCountries(prev => 
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Country Analysis
        </h1>
        <p className="text-muted-foreground">
          Compare markets across 6 MENA countries with detailed metrics and insights
        </p>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid" className="gap-2">
            <LayoutGrid className="h-4 w-4" />
            Grid View
          </TabsTrigger>
          <TabsTrigger value="comparison" className="gap-2">
            <Table className="h-4 w-4" />
            Comparison
          </TabsTrigger>
          <TabsTrigger value="radar" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Radar Analysis
          </TabsTrigger>
        </TabsList>

        {/* Grid View */}
        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countryList.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>
        </TabsContent>

        {/* Comparison Table View */}
        <TabsContent value="comparison">
          <CountryComparisonTable countries={countryList} />
        </TabsContent>

        {/* Radar Analysis View */}
        <TabsContent value="radar" className="space-y-6">
          {/* Country Selection */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Select Countries to Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {countryList.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => toggleCountry(country.code)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                      ${selectedCountries.includes(country.code)
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-muted/50 border-border text-muted-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <span>{country.flag}</span>
                    <span className="text-sm font-medium">{country.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <CountryRadarChart 
            countries={countryList.filter(c => selectedCountries.includes(c.code))} 
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
