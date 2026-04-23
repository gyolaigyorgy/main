import type { MarketOpportunity, Alert } from './types'

export const marketOpportunities: MarketOpportunity[] = [
  {
    id: 'opp-1',
    title: 'Saudi Tourism Entertainment Sector',
    countryCode: 'SA',
    sectorId: 'tourism',
    score: 95,
    description: 'Vision 2030 is transforming Saudi Arabia into a global tourism destination with massive investments in entertainment, cultural attractions, and mega-projects like NEOM and Red Sea Global.',
    marketSize: 35000,
    growthPotential: 28.5,
    riskLevel: 'low',
    timeToEntry: '6-12 months',
    keyRequirements: [
      'Saudi Commercial Registration',
      'Tourism license from Ministry of Tourism',
      'Local partner for certain activities',
      'Saudization compliance (30-50%)'
    ]
  },
  {
    id: 'opp-2',
    title: 'UAE AI & Tech Hub Expansion',
    countryCode: 'AE',
    sectorId: 'technology',
    score: 95,
    description: 'UAE is positioning itself as a global AI leader with significant government investment, favorable regulations, and world-class infrastructure attracting tech companies.',
    marketSize: 15800,
    growthPotential: 14.2,
    riskLevel: 'low',
    timeToEntry: '3-6 months',
    keyRequirements: [
      'Free zone or mainland license',
      'Data protection compliance',
      'Potential government partnership for AI projects',
      'Technical certifications'
    ]
  },
  {
    id: 'opp-3',
    title: 'Egypt E-commerce & Digital Services',
    countryCode: 'EG',
    sectorId: 'online-services',
    score: 88,
    description: 'With 104M population and rapidly growing internet penetration, Egypt presents massive opportunity for e-commerce and digital services targeting underserved segments.',
    marketSize: 5200,
    growthPotential: 28.5,
    riskLevel: 'medium',
    timeToEntry: '6-9 months',
    keyRequirements: [
      'Egyptian company registration',
      'E-commerce license',
      'Payment gateway partnerships',
      'Local logistics infrastructure'
    ]
  },
  {
    id: 'opp-4',
    title: 'Qatar Post-World Cup Infrastructure',
    countryCode: 'QA',
    sectorId: 'tourism',
    score: 88,
    description: 'Leveraging $200B+ World Cup infrastructure for sports tourism, events, and MICE industry with world-class stadiums, hotels, and transport systems.',
    marketSize: 8500,
    growthPotential: 22.5,
    riskLevel: 'low',
    timeToEntry: '4-8 months',
    keyRequirements: [
      'Qatar Investment Authority partnerships',
      'Tourism sector license',
      'Event management credentials',
      'Local sponsor for certain activities'
    ]
  },
  {
    id: 'opp-5',
    title: 'Bahrain Fintech Ecosystem',
    countryCode: 'BH',
    sectorId: 'financial-services',
    score: 82,
    description: 'Bahrain offers the most progressive fintech regulations in GCC with regulatory sandbox, open banking framework, and 100% foreign ownership in financial services.',
    marketSize: 28500,
    growthPotential: 5.2,
    riskLevel: 'low',
    timeToEntry: '3-6 months',
    keyRequirements: [
      'CBB fintech license or sandbox participation',
      'Compliance framework',
      'Capital requirements vary by license type',
      'Local presence for certain activities'
    ]
  },
  {
    id: 'opp-6',
    title: 'Morocco Automotive Manufacturing',
    countryCode: 'MA',
    sectorId: 'import-export',
    score: 82,
    description: 'Morocco is becoming a major automotive manufacturing hub for European markets with Renault, PSA, and suppliers establishing significant production facilities.',
    marketSize: 68000,
    growthPotential: 7.2,
    riskLevel: 'medium',
    timeToEntry: '12-18 months',
    keyRequirements: [
      'Tanger Med free zone setup',
      'Manufacturing license',
      'Supplier certifications',
      'Export agreements'
    ]
  },
  {
    id: 'opp-7',
    title: 'Saudi Fintech Opportunity',
    countryCode: 'SA',
    sectorId: 'financial-services',
    score: 85,
    description: 'SAMA is actively issuing fintech licenses with significant unbanked population and Vision 2030 pushing for digital financial services.',
    marketSize: 185000,
    growthPotential: 8.2,
    riskLevel: 'medium',
    timeToEntry: '9-12 months',
    keyRequirements: [
      'SAMA fintech license',
      'Capital requirements (varies)',
      'Local data hosting',
      'Saudization targets'
    ]
  },
  {
    id: 'opp-8',
    title: 'UAE Healthcare & Wellness',
    countryCode: 'AE',
    sectorId: 'wellness-health',
    score: 88,
    description: 'Dubai and Abu Dhabi are positioning as medical tourism destinations with world-class facilities and growing wellness tourism sector.',
    marketSize: 18500,
    growthPotential: 11.2,
    riskLevel: 'low',
    timeToEntry: '6-12 months',
    keyRequirements: [
      'DHA or DOH healthcare license',
      'Professional certifications',
      'Facility requirements',
      'Medical liability insurance'
    ]
  },
  {
    id: 'opp-9',
    title: 'Egypt Financial Inclusion',
    countryCode: 'EG',
    sectorId: 'financial-services',
    score: 80,
    description: 'With 70%+ unbanked population and central bank pushing digital payments, massive opportunity in mobile wallets, micro-lending, and payment solutions.',
    marketSize: 95000,
    growthPotential: 9.5,
    riskLevel: 'medium',
    timeToEntry: '9-15 months',
    keyRequirements: [
      'CBE payment license',
      'Technology partnerships',
      'Agent network development',
      'Local incorporation'
    ]
  },
  {
    id: 'opp-10',
    title: 'Morocco Tech Nearshoring',
    countryCode: 'MA',
    sectorId: 'technology',
    score: 75,
    description: 'French-speaking talent pool and proximity to Europe making Morocco attractive for IT services, BPO, and software development centers.',
    marketSize: 4200,
    growthPotential: 11.5,
    riskLevel: 'low',
    timeToEntry: '3-6 months',
    keyRequirements: [
      'Casablanca Finance City status',
      'Labor law compliance',
      'Data protection (CNDP)',
      'Office setup'
    ]
  }
]

export const alerts: Alert[] = [
  {
    id: 'alert-1',
    type: 'opportunity',
    title: 'Saudi Arabia Launches New Entertainment City',
    description: 'Qiddiya entertainment city announces Phase 1 opening with theme parks, sports venues, and cultural attractions. Major opportunity for hospitality and entertainment services.',
    countryCode: 'SA',
    sectorId: 'tourism',
    severity: 'info',
    timestamp: new Date('2024-12-15'),
    isRead: false
  },
  {
    id: 'alert-2',
    type: 'regulatory',
    title: 'UAE Updates Data Protection Law',
    description: 'New federal data protection regulations come into effect. Companies must ensure compliance with data localization and consent requirements.',
    countryCode: 'AE',
    sectorId: 'technology',
    severity: 'warning',
    timestamp: new Date('2024-12-14'),
    isRead: false
  },
  {
    id: 'alert-3',
    type: 'market',
    title: 'Egypt Pound Stabilizes After IMF Deal',
    description: 'Egyptian pound showing stability following latest IMF agreement. Improved outlook for foreign investment and import costs.',
    countryCode: 'EG',
    severity: 'info',
    timestamp: new Date('2024-12-13'),
    isRead: true
  },
  {
    id: 'alert-4',
    type: 'opportunity',
    title: 'Qatar Opens New Free Zone',
    description: 'Qatar Free Zones Authority launches new media and tech-focused free zone with 100% foreign ownership and tax benefits.',
    countryCode: 'QA',
    sectorId: 'technology',
    severity: 'info',
    timestamp: new Date('2024-12-12'),
    isRead: false
  },
  {
    id: 'alert-5',
    type: 'risk',
    title: 'Morocco Drought Impact on Agriculture',
    description: 'Continued drought affecting agricultural output. Potential impact on food import demand and related logistics.',
    countryCode: 'MA',
    sectorId: 'import-export',
    severity: 'warning',
    timestamp: new Date('2024-12-11'),
    isRead: true
  },
  {
    id: 'alert-6',
    type: 'regulatory',
    title: 'Bahrain Open Banking Phase 2',
    description: 'Central Bank of Bahrain announces Phase 2 of open banking framework with expanded API requirements and new use cases.',
    countryCode: 'BH',
    sectorId: 'financial-services',
    severity: 'info',
    timestamp: new Date('2024-12-10'),
    isRead: false
  },
  {
    id: 'alert-7',
    type: 'market',
    title: 'UAE E-commerce Growth Exceeds Forecasts',
    description: 'UAE e-commerce market grew 25% YoY exceeding analyst expectations. Social commerce and same-day delivery driving growth.',
    countryCode: 'AE',
    sectorId: 'online-services',
    severity: 'info',
    timestamp: new Date('2024-12-09'),
    isRead: true
  },
  {
    id: 'alert-8',
    type: 'opportunity',
    title: 'Saudi Launches Health Tech Accelerator',
    description: 'Ministry of Health partners with international VCs to launch health tech accelerator. $50M fund for digital health startups.',
    countryCode: 'SA',
    sectorId: 'wellness-health',
    severity: 'info',
    timestamp: new Date('2024-12-08'),
    isRead: false
  }
]

// Get opportunities by country
export function getOpportunitiesByCountry(countryCode: string): MarketOpportunity[] {
  return marketOpportunities.filter(o => o.countryCode === countryCode)
}

// Get opportunities by sector
export function getOpportunitiesBySector(sectorId: string): MarketOpportunity[] {
  return marketOpportunities.filter(o => o.sectorId === sectorId)
}

// Get top opportunities by score
export function getTopOpportunities(limit: number = 5): MarketOpportunity[] {
  return [...marketOpportunities].sort((a, b) => b.score - a.score).slice(0, limit)
}

// Get unread alerts
export function getUnreadAlerts(): Alert[] {
  return alerts.filter(a => !a.isRead)
}

// Get alerts by severity
export function getAlertsBySeverity(severity: Alert['severity']): Alert[] {
  return alerts.filter(a => a.severity === severity)
}

// Get recent alerts
export function getRecentAlerts(limit: number = 5): Alert[] {
  return [...alerts].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit)
}
