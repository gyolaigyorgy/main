import type { Country, CountryCode, EconomicIndicator } from './types'

export const countries: Record<CountryCode, Country> = {
  QA: {
    code: 'QA',
    name: 'Qatar',
    flag: '🇶🇦',
    capital: 'Doha',
    population: 2.9,
    gdp: 225.7,
    gdpGrowth: 4.2,
    gdpPerCapita: 77832,
    currency: 'Qatari Riyal',
    currencyCode: 'QAR',
    officialLanguage: 'Arabic',
    businessLanguage: 'English',
    timezone: 'GMT+3',
    riskRating: 'low',
    easeOfBusiness: 77,
    opportunityScore: 85,
    keyStrengths: [
      'Highest GDP per capita in region',
      'World Cup 2022 infrastructure legacy',
      'Strong financial reserves',
      'Diversification through Qatar National Vision 2030',
      'Strategic geographic location'
    ],
    keyChallenges: [
      'Small domestic market size',
      'Heavy reliance on hydrocarbon revenues',
      'Regional geopolitical tensions',
      'Labor market restrictions'
    ]
  },
  AE: {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    capital: 'Abu Dhabi',
    population: 9.9,
    gdp: 507.5,
    gdpGrowth: 3.8,
    gdpPerCapita: 51268,
    currency: 'UAE Dirham',
    currencyCode: 'AED',
    officialLanguage: 'Arabic',
    businessLanguage: 'English',
    timezone: 'GMT+4',
    riskRating: 'low',
    easeOfBusiness: 16,
    opportunityScore: 92,
    keyStrengths: [
      'Most diversified Gulf economy',
      'World-class infrastructure',
      'Business-friendly regulations',
      'Global connectivity hub',
      'Free zone ecosystem',
      'Stable political environment'
    ],
    keyChallenges: [
      'High cost of living',
      'Competitive market landscape',
      'Visa and labor regulations',
      'Real estate market volatility'
    ]
  },
  BH: {
    code: 'BH',
    name: 'Bahrain',
    flag: '🇧🇭',
    capital: 'Manama',
    population: 1.5,
    gdp: 44.2,
    gdpGrowth: 2.9,
    gdpPerCapita: 29469,
    currency: 'Bahraini Dinar',
    currencyCode: 'BHD',
    officialLanguage: 'Arabic',
    businessLanguage: 'English',
    timezone: 'GMT+3',
    riskRating: 'medium',
    easeOfBusiness: 43,
    opportunityScore: 72,
    keyStrengths: [
      'Regional financial hub',
      'Strong fintech ecosystem',
      'Liberal social environment',
      'Skilled workforce',
      '100% foreign ownership allowed'
    ],
    keyChallenges: [
      'Small market size',
      'Limited natural resources',
      'Fiscal constraints',
      'Regional competition from UAE/Saudi'
    ]
  },
  SA: {
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    capital: 'Riyadh',
    population: 36.4,
    gdp: 1108.1,
    gdpGrowth: 4.9,
    gdpPerCapita: 30447,
    currency: 'Saudi Riyal',
    currencyCode: 'SAR',
    officialLanguage: 'Arabic',
    businessLanguage: 'Arabic/English',
    timezone: 'GMT+3',
    riskRating: 'low',
    easeOfBusiness: 62,
    opportunityScore: 88,
    keyStrengths: [
      'Largest Arab economy',
      'Vision 2030 transformation',
      'Massive infrastructure investments',
      'Young, growing population',
      'Entertainment sector opening',
      'NEOM and mega-projects'
    ],
    keyChallenges: [
      'Regulatory complexity',
      'Cultural adaptation required',
      'Saudization requirements',
      'Bureaucratic processes'
    ]
  },
  MA: {
    code: 'MA',
    name: 'Morocco',
    flag: '🇲🇦',
    capital: 'Rabat',
    population: 37.8,
    gdp: 142.9,
    gdpGrowth: 3.2,
    gdpPerCapita: 3782,
    currency: 'Moroccan Dirham',
    currencyCode: 'MAD',
    officialLanguage: 'Arabic/Berber',
    businessLanguage: 'French/Arabic',
    timezone: 'GMT+1',
    riskRating: 'medium',
    easeOfBusiness: 53,
    opportunityScore: 75,
    keyStrengths: [
      'Gateway to Africa',
      'Strong manufacturing base',
      'Automotive industry hub',
      'Renewable energy leader',
      'Tourism infrastructure',
      'Free trade agreements'
    ],
    keyChallenges: [
      'Income inequality',
      'Youth unemployment',
      'Infrastructure gaps outside cities',
      'Currency controls'
    ]
  },
  EG: {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    capital: 'Cairo',
    population: 104.5,
    gdp: 476.7,
    gdpGrowth: 5.6,
    gdpPerCapita: 4562,
    currency: 'Egyptian Pound',
    currencyCode: 'EGP',
    officialLanguage: 'Arabic',
    businessLanguage: 'Arabic/English',
    timezone: 'GMT+2',
    riskRating: 'medium',
    easeOfBusiness: 114,
    opportunityScore: 70,
    keyStrengths: [
      'Largest population in Arab world',
      'Strategic Suez Canal location',
      'Growing consumer market',
      'Economic reform momentum',
      'Tech startup ecosystem',
      'Low labor costs'
    ],
    keyChallenges: [
      'Currency volatility',
      'Inflation pressures',
      'Bureaucratic complexity',
      'Infrastructure constraints',
      'Political risk factors'
    ]
  }
}

export const economicIndicators: Record<CountryCode, EconomicIndicator[]> = {
  QA: [
    { year: 2020, gdp: 144.4, gdpGrowth: -3.6, inflation: -2.5, unemployment: 0.1, tradeBalance: 15.2, fdiInflow: -2.1, publicDebt: 72.6 },
    { year: 2021, gdp: 179.6, gdpGrowth: 1.5, inflation: 2.3, unemployment: 0.1, tradeBalance: 34.8, fdiInflow: -1.5, publicDebt: 63.5 },
    { year: 2022, gdp: 225.7, gdpGrowth: 4.8, inflation: 5.0, unemployment: 0.1, tradeBalance: 56.2, fdiInflow: 1.2, publicDebt: 42.4 },
    { year: 2023, gdp: 219.6, gdpGrowth: 2.4, inflation: 3.1, unemployment: 0.1, tradeBalance: 42.1, fdiInflow: 0.8, publicDebt: 40.1 },
    { year: 2024, gdp: 225.7, gdpGrowth: 4.2, inflation: 2.8, unemployment: 0.1, tradeBalance: 45.3, fdiInflow: 1.5, publicDebt: 38.5 },
  ],
  AE: [
    { year: 2020, gdp: 349.0, gdpGrowth: -4.8, inflation: -2.1, unemployment: 2.5, tradeBalance: 42.5, fdiInflow: 19.9, publicDebt: 38.2 },
    { year: 2021, gdp: 415.0, gdpGrowth: 3.9, inflation: 0.2, unemployment: 2.3, tradeBalance: 65.2, fdiInflow: 20.7, publicDebt: 35.4 },
    { year: 2022, gdp: 507.5, gdpGrowth: 7.9, inflation: 4.8, unemployment: 2.1, tradeBalance: 98.4, fdiInflow: 22.7, publicDebt: 30.1 },
    { year: 2023, gdp: 498.9, gdpGrowth: 3.4, inflation: 3.5, unemployment: 2.0, tradeBalance: 85.2, fdiInflow: 23.0, publicDebt: 28.5 },
    { year: 2024, gdp: 507.5, gdpGrowth: 3.8, inflation: 2.9, unemployment: 2.0, tradeBalance: 88.4, fdiInflow: 24.5, publicDebt: 27.2 },
  ],
  BH: [
    { year: 2020, gdp: 34.7, gdpGrowth: -4.6, inflation: -2.3, unemployment: 4.7, tradeBalance: -2.1, fdiInflow: 1.0, publicDebt: 129.7 },
    { year: 2021, gdp: 38.9, gdpGrowth: 2.6, inflation: -0.6, unemployment: 4.5, tradeBalance: 0.8, fdiInflow: 1.1, publicDebt: 128.5 },
    { year: 2022, gdp: 44.2, gdpGrowth: 4.9, inflation: 3.6, unemployment: 4.3, tradeBalance: 3.2, fdiInflow: 1.3, publicDebt: 117.1 },
    { year: 2023, gdp: 43.2, gdpGrowth: 2.5, inflation: 2.1, unemployment: 4.2, tradeBalance: 2.1, fdiInflow: 1.2, publicDebt: 112.4 },
    { year: 2024, gdp: 44.2, gdpGrowth: 2.9, inflation: 1.8, unemployment: 4.1, tradeBalance: 2.5, fdiInflow: 1.4, publicDebt: 108.2 },
  ],
  SA: [
    { year: 2020, gdp: 700.1, gdpGrowth: -4.1, inflation: 3.4, unemployment: 12.0, tradeBalance: 12.5, fdiInflow: 5.5, publicDebt: 32.4 },
    { year: 2021, gdp: 833.5, gdpGrowth: 3.9, inflation: 3.1, unemployment: 11.3, tradeBalance: 85.2, fdiInflow: 19.3, publicDebt: 30.0 },
    { year: 2022, gdp: 1108.1, gdpGrowth: 8.7, inflation: 2.5, unemployment: 10.5, tradeBalance: 192.5, fdiInflow: 7.9, publicDebt: 23.8 },
    { year: 2023, gdp: 1069.4, gdpGrowth: 0.8, inflation: 2.3, unemployment: 9.8, tradeBalance: 125.4, fdiInflow: 12.4, publicDebt: 26.2 },
    { year: 2024, gdp: 1108.1, gdpGrowth: 4.9, inflation: 2.1, unemployment: 9.5, tradeBalance: 142.8, fdiInflow: 15.2, publicDebt: 25.5 },
  ],
  MA: [
    { year: 2020, gdp: 114.7, gdpGrowth: -7.2, inflation: 0.7, unemployment: 11.9, tradeBalance: -15.4, fdiInflow: 1.8, publicDebt: 76.4 },
    { year: 2021, gdp: 132.7, gdpGrowth: 7.9, inflation: 1.4, unemployment: 12.3, tradeBalance: -18.2, fdiInflow: 2.0, publicDebt: 69.5 },
    { year: 2022, gdp: 134.2, gdpGrowth: 1.3, inflation: 6.6, unemployment: 11.8, tradeBalance: -24.5, fdiInflow: 2.1, publicDebt: 71.5 },
    { year: 2023, gdp: 140.3, gdpGrowth: 2.8, inflation: 4.9, unemployment: 11.5, tradeBalance: -21.2, fdiInflow: 2.3, publicDebt: 70.2 },
    { year: 2024, gdp: 142.9, gdpGrowth: 3.2, inflation: 3.5, unemployment: 11.2, tradeBalance: -19.8, fdiInflow: 2.5, publicDebt: 68.5 },
  ],
  EG: [
    { year: 2020, gdp: 365.3, gdpGrowth: 3.6, inflation: 5.7, unemployment: 9.6, tradeBalance: -37.4, fdiInflow: 5.9, publicDebt: 87.2 },
    { year: 2021, gdp: 404.1, gdpGrowth: 3.3, inflation: 5.2, unemployment: 7.4, tradeBalance: -43.5, fdiInflow: 5.1, publicDebt: 90.6 },
    { year: 2022, gdp: 476.7, gdpGrowth: 6.7, inflation: 13.9, unemployment: 7.2, tradeBalance: -52.1, fdiInflow: 11.4, publicDebt: 87.2 },
    { year: 2023, gdp: 395.9, gdpGrowth: 3.8, inflation: 24.4, unemployment: 7.0, tradeBalance: -38.5, fdiInflow: 9.8, publicDebt: 95.8 },
    { year: 2024, gdp: 476.7, gdpGrowth: 5.6, inflation: 18.5, unemployment: 6.8, tradeBalance: -35.2, fdiInflow: 12.5, publicDebt: 88.5 },
  ]
}

export const countryList = Object.values(countries)
export const countryCodeList: CountryCode[] = ['QA', 'AE', 'BH', 'SA', 'MA', 'EG']
