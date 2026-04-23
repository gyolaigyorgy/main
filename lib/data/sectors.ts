import type { Sector, SectorId, CountrySectorData, CountryCode } from './types'

export const sectors: Record<SectorId, Sector> = {
  'technology': {
    id: 'technology',
    name: 'Technology',
    description: 'IT services, software development, digital infrastructure, AI, and emerging tech',
    icon: 'Cpu',
    globalMarketSize: 5200,
    averageGrowthRate: 8.5
  },
  'financial-services': {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Banking, insurance, fintech, investment services, and Islamic finance',
    icon: 'Landmark',
    globalMarketSize: 22500,
    averageGrowthRate: 6.2
  },
  'online-services': {
    id: 'online-services',
    name: 'Online Services',
    description: 'E-commerce, digital platforms, SaaS, cloud services, and digital marketplaces',
    icon: 'Globe',
    globalMarketSize: 4800,
    averageGrowthRate: 12.4
  },
  'wellness-health': {
    id: 'wellness-health',
    name: 'Wellness & Health',
    description: 'Healthcare services, medical tourism, fitness, pharmaceuticals, and wellness tech',
    icon: 'Heart',
    globalMarketSize: 4500,
    averageGrowthRate: 7.8
  },
  'tourism': {
    id: 'tourism',
    name: 'Tourism',
    description: 'Hospitality, travel services, attractions, events, and destination management',
    icon: 'Plane',
    globalMarketSize: 1700,
    averageGrowthRate: 9.2
  },
  'import-export': {
    id: 'import-export',
    name: 'Import/Export',
    description: 'Trade logistics, supply chain, commodities, manufacturing, and distribution',
    icon: 'Ship',
    globalMarketSize: 19800,
    averageGrowthRate: 4.5
  }
}

export const countrySectorData: CountrySectorData[] = [
  // Qatar
  {
    countryCode: 'QA',
    sectorId: 'technology',
    marketSize: 3250,
    marketSizeGrowth: 12.5,
    opportunityScore: 82,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Meeza', marketShare: 18, headquarters: 'Doha', description: 'Leading data center and cloud provider', strengths: ['Government backing', 'State-of-art facilities'] },
      { name: 'Ooredoo', marketShare: 25, headquarters: 'Doha', description: 'Telecom and digital services giant', strengths: ['Market leader', 'Regional presence'] },
      { name: 'Vodafone Qatar', marketShare: 15, headquarters: 'Doha', description: 'Telecommunications and digital solutions', strengths: ['International standards', 'Innovation focus'] }
    ],
    trends: [
      { title: 'Smart City Initiatives', description: 'Heavy investment in IoT and smart infrastructure post-World Cup', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Cybersecurity Growth', description: 'Increasing demand for security solutions', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Strong growth expected as Qatar leverages World Cup infrastructure for tech hub development'
  },
  {
    countryCode: 'QA',
    sectorId: 'financial-services',
    marketSize: 42500,
    marketSizeGrowth: 6.8,
    opportunityScore: 78,
    competitiveIntensity: 'high',
    regulatoryComplexity: 7,
    entryBarriers: 'high',
    keyPlayers: [
      { name: 'Qatar National Bank', marketShare: 45, headquarters: 'Doha', description: 'Largest bank in MENA region', strengths: ['Market dominance', 'Government ownership'] },
      { name: 'Commercial Bank of Qatar', marketShare: 18, headquarters: 'Doha', description: 'Major commercial bank', strengths: ['Retail network', 'Corporate banking'] },
      { name: 'Qatar Islamic Bank', marketShare: 15, headquarters: 'Doha', description: 'Leading Islamic finance institution', strengths: ['Islamic finance expertise', 'Growing demand'] }
    ],
    trends: [
      { title: 'Islamic Finance Expansion', description: 'Growing demand for Sharia-compliant products', impact: 'positive', timeframe: 'long-term' },
      { title: 'Digital Banking Transformation', description: 'Banks investing heavily in digital channels', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Stable growth with opportunities in digital banking and Islamic finance innovation'
  },
  {
    countryCode: 'QA',
    sectorId: 'online-services',
    marketSize: 1850,
    marketSizeGrowth: 18.2,
    opportunityScore: 85,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 4,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Talabat', marketShare: 35, headquarters: 'Kuwait (Regional)', description: 'Food delivery platform', strengths: ['Market leader', 'Strong brand'] },
      { name: 'Snoonu', marketShare: 22, headquarters: 'Doha', description: 'Local delivery and e-commerce', strengths: ['Local presence', 'Government support'] },
      { name: 'Carriage', marketShare: 15, headquarters: 'Kuwait (Regional)', description: 'Multi-service delivery platform', strengths: ['Service variety', 'Tech platform'] }
    ],
    trends: [
      { title: 'Super App Development', description: 'Platforms expanding into multiple services', impact: 'positive', timeframe: 'medium-term' },
      { title: 'B2B E-commerce Growth', description: 'Business procurement moving online', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Excellent growth trajectory with high smartphone penetration and affluent consumer base'
  },
  {
    countryCode: 'QA',
    sectorId: 'wellness-health',
    marketSize: 5200,
    marketSizeGrowth: 9.5,
    opportunityScore: 80,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 8,
    entryBarriers: 'high',
    keyPlayers: [
      { name: 'Hamad Medical Corporation', marketShare: 55, headquarters: 'Doha', description: 'Government healthcare provider', strengths: ['Comprehensive care', 'Free services'] },
      { name: 'Sidra Medicine', marketShare: 15, headquarters: 'Doha', description: 'Research hospital', strengths: ['World-class facilities', 'Research focus'] },
      { name: 'Al Ahli Hospital', marketShare: 8, headquarters: 'Doha', description: 'Private healthcare provider', strengths: ['Private sector leader', 'Specialized care'] }
    ],
    trends: [
      { title: 'Medical Tourism Growth', description: 'Investment in attracting international patients', impact: 'positive', timeframe: 'long-term' },
      { title: 'Digital Health Adoption', description: 'Telemedicine and health apps gaining traction', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Strong investment in healthcare infrastructure with opportunities in private sector and health tech'
  },
  {
    countryCode: 'QA',
    sectorId: 'tourism',
    marketSize: 8500,
    marketSizeGrowth: 22.5,
    opportunityScore: 88,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Qatar Airways', marketShare: 40, headquarters: 'Doha', description: 'National carrier and tourism driver', strengths: ['World-class airline', 'Global network'] },
      { name: 'Katara Hospitality', marketShare: 25, headquarters: 'Doha', description: 'Luxury hotel development', strengths: ['Premium properties', 'Government backing'] },
      { name: 'Qatar Tourism', marketShare: 20, headquarters: 'Doha', description: 'National tourism authority', strengths: ['Marketing power', 'Event hosting'] }
    ],
    trends: [
      { title: 'Sports Tourism Boom', description: 'Leveraging World Cup for ongoing sports events', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Cultural Tourism Development', description: 'Museums and heritage sites attracting visitors', impact: 'positive', timeframe: 'long-term' }
    ],
    outlook: 'Explosive growth post-World Cup with massive infrastructure ready for tourism expansion'
  },
  {
    countryCode: 'QA',
    sectorId: 'import-export',
    marketSize: 85000,
    marketSizeGrowth: 5.2,
    opportunityScore: 75,
    competitiveIntensity: 'high',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'QTerminals', marketShare: 45, headquarters: 'Doha', description: 'Port operations and logistics', strengths: ['Port monopoly', 'New Hamad Port'] },
      { name: 'Qatar Petroleum', marketShare: 35, headquarters: 'Doha', description: 'LNG exports', strengths: ['World largest LNG exporter', 'Long-term contracts'] },
      { name: 'Milaha', marketShare: 12, headquarters: 'Doha', description: 'Maritime and logistics', strengths: ['Diversified services', 'Regional network'] }
    ],
    trends: [
      { title: 'LNG Export Expansion', description: 'North Field expansion increasing export capacity', impact: 'positive', timeframe: 'long-term' },
      { title: 'Food Security Imports', description: 'Diversifying food import sources', impact: 'neutral', timeframe: 'medium-term' }
    ],
    outlook: 'Dominated by energy exports with opportunities in logistics and food import services'
  },

  // UAE
  {
    countryCode: 'AE',
    sectorId: 'technology',
    marketSize: 15800,
    marketSizeGrowth: 14.2,
    opportunityScore: 95,
    competitiveIntensity: 'high',
    regulatoryComplexity: 4,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'e&', marketShare: 22, headquarters: 'Abu Dhabi', description: 'Telecom and digital transformation', strengths: ['Market presence', 'Investment capacity'] },
      { name: 'G42', marketShare: 15, headquarters: 'Abu Dhabi', description: 'AI and cloud computing', strengths: ['AI leadership', 'Government partnerships'] },
      { name: 'Dubai Silicon Oasis', marketShare: 12, headquarters: 'Dubai', description: 'Tech free zone and ecosystem', strengths: ['Infrastructure', 'Business support'] }
    ],
    trends: [
      { title: 'AI Investment Surge', description: 'UAE positioning as AI leader with significant investments', impact: 'positive', timeframe: 'short-term' },
      { title: 'Blockchain Adoption', description: 'Government blockchain strategy implementation', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Premier tech hub in MENA with world-class infrastructure and investor-friendly policies'
  },
  {
    countryCode: 'AE',
    sectorId: 'financial-services',
    marketSize: 125000,
    marketSizeGrowth: 7.5,
    opportunityScore: 90,
    competitiveIntensity: 'high',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'First Abu Dhabi Bank', marketShare: 25, headquarters: 'Abu Dhabi', description: 'Largest UAE bank', strengths: ['Scale', 'Regional expansion'] },
      { name: 'Emirates NBD', marketShare: 20, headquarters: 'Dubai', description: 'Leading Dubai-based bank', strengths: ['Innovation', 'Customer focus'] },
      { name: 'ADCB', marketShare: 12, headquarters: 'Abu Dhabi', description: 'Major commercial bank', strengths: ['Digital transformation', 'Corporate banking'] }
    ],
    trends: [
      { title: 'Fintech Hub Development', description: 'DIFC and ADGM attracting global fintech', impact: 'positive', timeframe: 'short-term' },
      { title: 'Open Banking Initiative', description: 'Regulatory push for open banking', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Leading financial center with strong fintech ecosystem and regulatory innovation'
  },
  {
    countryCode: 'AE',
    sectorId: 'online-services',
    marketSize: 8500,
    marketSizeGrowth: 22.8,
    opportunityScore: 92,
    competitiveIntensity: 'high',
    regulatoryComplexity: 3,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Noon', marketShare: 28, headquarters: 'Dubai', description: 'E-commerce marketplace', strengths: ['Local champion', 'Investment backing'] },
      { name: 'Amazon UAE', marketShare: 24, headquarters: 'Dubai', description: 'Global e-commerce leader', strengths: ['Global expertise', 'Prime ecosystem'] },
      { name: 'Careem', marketShare: 18, headquarters: 'Dubai', description: 'Super app platform', strengths: ['Regional brand', 'Multiple services'] }
    ],
    trends: [
      { title: 'Social Commerce Rise', description: 'Instagram and TikTok shopping integration', impact: 'positive', timeframe: 'short-term' },
      { title: 'Same-Day Delivery Standard', description: 'Consumer expectations driving logistics innovation', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Most mature e-commerce market in region with continued strong growth trajectory'
  },
  {
    countryCode: 'AE',
    sectorId: 'wellness-health',
    marketSize: 18500,
    marketSizeGrowth: 11.2,
    opportunityScore: 88,
    competitiveIntensity: 'high',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Mediclinic', marketShare: 18, headquarters: 'Abu Dhabi', description: 'International hospital group', strengths: ['Quality care', 'Multiple facilities'] },
      { name: 'NMC Health', marketShare: 15, headquarters: 'Abu Dhabi', description: 'Healthcare provider', strengths: ['Network size', 'Recovery growth'] },
      { name: 'Cleveland Clinic Abu Dhabi', marketShare: 10, headquarters: 'Abu Dhabi', description: 'World-renowned medical center', strengths: ['International reputation', 'Advanced care'] }
    ],
    trends: [
      { title: 'Medical Tourism Hub', description: 'Dubai Health City attracting international patients', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Wellness Tourism Integration', description: 'Combining luxury travel with health services', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Premier regional healthcare destination with opportunities in medical tourism and health tech'
  },
  {
    countryCode: 'AE',
    sectorId: 'tourism',
    marketSize: 42000,
    marketSizeGrowth: 15.5,
    opportunityScore: 94,
    competitiveIntensity: 'high',
    regulatoryComplexity: 3,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Emirates', marketShare: 30, headquarters: 'Dubai', description: 'Global airline and tourism driver', strengths: ['World-class service', 'Global network'] },
      { name: 'Emaar Hospitality', marketShare: 15, headquarters: 'Dubai', description: 'Luxury hospitality developer', strengths: ['Premium properties', 'Iconic developments'] },
      { name: 'Dubai Holding', marketShare: 12, headquarters: 'Dubai', description: 'Diversified tourism investments', strengths: ['Asset portfolio', 'Government backing'] }
    ],
    trends: [
      { title: 'Sustainable Tourism', description: 'Investment in eco-tourism and sustainable practices', impact: 'positive', timeframe: 'long-term' },
      { title: 'Experience Economy', description: 'Shift from luxury goods to unique experiences', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'World-leading tourism destination with continued innovation and expansion'
  },
  {
    countryCode: 'AE',
    sectorId: 'import-export',
    marketSize: 420000,
    marketSizeGrowth: 6.8,
    opportunityScore: 85,
    competitiveIntensity: 'high',
    regulatoryComplexity: 4,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'DP World', marketShare: 35, headquarters: 'Dubai', description: 'Global port operator', strengths: ['Global network', 'Infrastructure'] },
      { name: 'ADNOC', marketShare: 25, headquarters: 'Abu Dhabi', description: 'Oil and gas exports', strengths: ['Resources', 'Vertical integration'] },
      { name: 'Jafza', marketShare: 15, headquarters: 'Dubai', description: 'Free zone logistics hub', strengths: ['Location', 'Business environment'] }
    ],
    trends: [
      { title: 'Trade Route Diversification', description: 'New routes to Africa and Asia', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Digital Trade Platforms', description: 'Blockchain-based trade finance adoption', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Global trade hub with opportunities in logistics tech and new market access'
  },

  // Bahrain
  {
    countryCode: 'BH',
    sectorId: 'technology',
    marketSize: 1250,
    marketSizeGrowth: 10.5,
    opportunityScore: 75,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 4,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Batelco', marketShare: 45, headquarters: 'Manama', description: 'Telecommunications leader', strengths: ['Market position', 'Data center investment'] },
      { name: 'AWS Bahrain', marketShare: 20, headquarters: 'Manama', description: 'Cloud computing region', strengths: ['Global platform', 'First MENA region'] },
      { name: 'Fintech Bay', marketShare: 10, headquarters: 'Manama', description: 'Fintech innovation hub', strengths: ['Ecosystem support', 'Government backing'] }
    ],
    trends: [
      { title: 'Cloud Hub Development', description: 'AWS presence attracting cloud-first companies', impact: 'positive', timeframe: 'short-term' },
      { title: 'Startup Ecosystem Growth', description: 'Incubators and accelerators expanding', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Emerging tech hub leveraging AWS presence and fintech-friendly regulations'
  },
  {
    countryCode: 'BH',
    sectorId: 'financial-services',
    marketSize: 28500,
    marketSizeGrowth: 5.2,
    opportunityScore: 82,
    competitiveIntensity: 'high',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Ahli United Bank', marketShare: 22, headquarters: 'Manama', description: 'Regional banking leader', strengths: ['Regional network', 'Islamic banking'] },
      { name: 'National Bank of Bahrain', marketShare: 18, headquarters: 'Manama', description: 'Oldest commercial bank', strengths: ['Local presence', 'Government ties'] },
      { name: 'Bank ABC', marketShare: 15, headquarters: 'Manama', description: 'International bank', strengths: ['Trade finance', 'Corporate banking'] }
    ],
    trends: [
      { title: 'Fintech Regulatory Sandbox', description: 'Progressive regulations attracting fintech', impact: 'positive', timeframe: 'short-term' },
      { title: 'Open Banking Leadership', description: 'First open banking framework in GCC', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Regional fintech hub with progressive regulations and established banking sector'
  },
  {
    countryCode: 'BH',
    sectorId: 'online-services',
    marketSize: 450,
    marketSizeGrowth: 15.8,
    opportunityScore: 70,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 3,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Talabat', marketShare: 40, headquarters: 'Kuwait (Regional)', description: 'Food delivery leader', strengths: ['Market dominance', 'Brand recognition'] },
      { name: 'Jahez', marketShare: 18, headquarters: 'Saudi (Regional)', description: 'Delivery platform', strengths: ['Regional expansion', 'Tech platform'] },
      { name: 'Local e-commerce', marketShare: 25, headquarters: 'Manama', description: 'Various local platforms', strengths: ['Local knowledge', 'Niche focus'] }
    ],
    trends: [
      { title: 'Cross-border E-commerce', description: 'Regional shopping from UAE platforms', impact: 'neutral', timeframe: 'short-term' },
      { title: 'Local Platform Development', description: 'Investment in homegrown platforms', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Small but growing market with opportunities in niche e-commerce and local services'
  },
  {
    countryCode: 'BH',
    sectorId: 'wellness-health',
    marketSize: 1850,
    marketSizeGrowth: 7.2,
    opportunityScore: 68,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'KHUH', marketShare: 35, headquarters: 'Manama', description: 'King Hamad University Hospital', strengths: ['Government hospital', 'Comprehensive care'] },
      { name: 'American Mission Hospital', marketShare: 20, headquarters: 'Manama', description: 'Private hospital', strengths: ['Heritage', 'Quality care'] },
      { name: 'Royal Bahrain Hospital', marketShare: 15, headquarters: 'Manama', description: 'Private healthcare', strengths: ['Modern facilities', 'Specialist care'] }
    ],
    trends: [
      { title: 'Health Insurance Expansion', description: 'Mandatory health insurance implementation', impact: 'positive', timeframe: 'short-term' },
      { title: 'Medical Tourism Potential', description: 'Positioning as affordable quality destination', impact: 'positive', timeframe: 'long-term' }
    ],
    outlook: 'Steady growth with opportunities in private healthcare and health insurance'
  },
  {
    countryCode: 'BH',
    sectorId: 'tourism',
    marketSize: 4200,
    marketSizeGrowth: 12.5,
    opportunityScore: 72,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 4,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Gulf Air', marketShare: 35, headquarters: 'Manama', description: 'National carrier', strengths: ['Regional connectivity', 'Heritage brand'] },
      { name: 'Bahrain Tourism Authority', marketShare: 25, headquarters: 'Manama', description: 'Tourism promotion', strengths: ['Marketing', 'Event hosting'] },
      { name: 'Four Seasons Bahrain', marketShare: 10, headquarters: 'Manama', description: 'Luxury hospitality', strengths: ['Premium positioning', 'Beach resort'] }
    ],
    trends: [
      { title: 'F1 and Events Tourism', description: 'Major events driving visitor numbers', impact: 'positive', timeframe: 'short-term' },
      { title: 'Weekend Getaway Market', description: 'Saudi visitors for entertainment', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Growing tourism sector with F1 and events driving regional visitor traffic'
  },
  {
    countryCode: 'BH',
    sectorId: 'import-export',
    marketSize: 24500,
    marketSizeGrowth: 4.2,
    opportunityScore: 65,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'APM Terminals Bahrain', marketShare: 45, headquarters: 'Manama', description: 'Port operations', strengths: ['Infrastructure', 'Global network'] },
      { name: 'Alba', marketShare: 30, headquarters: 'Manama', description: 'Aluminum exports', strengths: ['Production capacity', 'Quality product'] },
      { name: 'Bahrain Logistics Zone', marketShare: 15, headquarters: 'Manama', description: 'Logistics hub', strengths: ['Free zone benefits', 'Location'] }
    ],
    trends: [
      { title: 'Saudi Connectivity', description: 'King Fahd Causeway expansion', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Manufacturing Diversification', description: 'Beyond aluminum to other industries', impact: 'positive', timeframe: 'long-term' }
    ],
    outlook: 'Stable trade sector with aluminum exports and opportunities in Saudi connectivity'
  },

  // Saudi Arabia
  {
    countryCode: 'SA',
    sectorId: 'technology',
    marketSize: 35000,
    marketSizeGrowth: 18.5,
    opportunityScore: 92,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'stc', marketShare: 45, headquarters: 'Riyadh', description: 'Telecom and digital leader', strengths: ['Market dominance', 'Investment capacity'] },
      { name: 'SITE', marketShare: 15, headquarters: 'Riyadh', description: 'Systems integration', strengths: ['Government contracts', 'Local presence'] },
      { name: 'Elm', marketShare: 12, headquarters: 'Riyadh', description: 'Digital government services', strengths: ['Government platform', 'Scale'] }
    ],
    trends: [
      { title: 'Vision 2030 Digital Push', description: 'Massive government digitization investment', impact: 'positive', timeframe: 'long-term' },
      { title: 'Data Localization', description: 'Requirements driving local data center investment', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Explosive growth driven by Vision 2030 with massive government and private investment'
  },
  {
    countryCode: 'SA',
    sectorId: 'financial-services',
    marketSize: 185000,
    marketSizeGrowth: 8.2,
    opportunityScore: 88,
    competitiveIntensity: 'high',
    regulatoryComplexity: 7,
    entryBarriers: 'high',
    keyPlayers: [
      { name: 'Al Rajhi Bank', marketShare: 22, headquarters: 'Riyadh', description: 'Largest Islamic bank', strengths: ['Islamic finance leader', 'Retail network'] },
      { name: 'Saudi National Bank', marketShare: 20, headquarters: 'Riyadh', description: 'Merged mega-bank', strengths: ['Scale', 'Corporate banking'] },
      { name: 'Riyad Bank', marketShare: 12, headquarters: 'Riyadh', description: 'Major commercial bank', strengths: ['Government business', 'Digital transformation'] }
    ],
    trends: [
      { title: 'Fintech Licensing Expansion', description: 'Central bank opening fintech licenses', impact: 'positive', timeframe: 'short-term' },
      { title: 'IPO Market Growth', description: 'Tadawul attracting more listings', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Largest regional market with significant fintech opportunities and capital market growth'
  },
  {
    countryCode: 'SA',
    sectorId: 'online-services',
    marketSize: 12500,
    marketSizeGrowth: 25.5,
    opportunityScore: 90,
    competitiveIntensity: 'high',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Jahez', marketShare: 30, headquarters: 'Riyadh', description: 'Food delivery unicorn', strengths: ['Market leader', 'Saudi champion'] },
      { name: 'Noon', marketShare: 25, headquarters: 'Riyadh', description: 'E-commerce platform', strengths: ['Regional scale', 'Investment'] },
      { name: 'Hunger Station', marketShare: 18, headquarters: 'Riyadh', description: 'Delivery platform', strengths: ['Delivery Kitchen investment', 'Local focus'] }
    ],
    trends: [
      { title: 'Super App Race', description: 'Platforms competing to become Saudi super app', impact: 'positive', timeframe: 'short-term' },
      { title: 'Last-Mile Innovation', description: 'Dark stores and rapid delivery', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Fastest growing e-commerce market in region with young, digital-first population'
  },
  {
    countryCode: 'SA',
    sectorId: 'wellness-health',
    marketSize: 42000,
    marketSizeGrowth: 12.8,
    opportunityScore: 85,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 7,
    entryBarriers: 'high',
    keyPlayers: [
      { name: 'Dr. Sulaiman Al Habib', marketShare: 18, headquarters: 'Riyadh', description: 'Leading private hospital group', strengths: ['Quality', 'Expansion'] },
      { name: 'Saudi German Hospital', marketShare: 12, headquarters: 'Jeddah', description: 'International hospital chain', strengths: ['Brand', 'Multi-city'] },
      { name: 'Nahdi Medical', marketShare: 20, headquarters: 'Jeddah', description: 'Pharmacy and retail health', strengths: ['Retail network', 'E-commerce'] }
    ],
    trends: [
      { title: 'Healthcare Privatization', description: 'Government encouraging private sector investment', impact: 'positive', timeframe: 'long-term' },
      { title: 'Digital Health Mandate', description: 'Seha virtual platform and telemedicine push', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Massive investment in healthcare infrastructure with privatization opportunities'
  },
  {
    countryCode: 'SA',
    sectorId: 'tourism',
    marketSize: 35000,
    marketSizeGrowth: 28.5,
    opportunityScore: 95,
    competitiveIntensity: 'low',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Saudi Tourism Authority', marketShare: 30, headquarters: 'Riyadh', description: 'National tourism body', strengths: ['Marketing power', 'Investment'] },
      { name: 'Red Sea Global', marketShare: 20, headquarters: 'Riyadh', description: 'Mega resort developer', strengths: ['Scale', 'Government backing'] },
      { name: 'NEOM', marketShare: 15, headquarters: 'NEOM', description: 'Future city and tourism', strengths: ['Vision', 'Investment scale'] }
    ],
    trends: [
      { title: 'Entertainment Revolution', description: 'Concerts, events, theme parks opening', impact: 'positive', timeframe: 'short-term' },
      { title: 'Religious Tourism Enhancement', description: 'Hajj and Umrah experience upgrades', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Unprecedented growth as Saudi opens to tourism with mega-project investments'
  },
  {
    countryCode: 'SA',
    sectorId: 'import-export',
    marketSize: 380000,
    marketSizeGrowth: 5.5,
    opportunityScore: 80,
    competitiveIntensity: 'high',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Saudi Aramco', marketShare: 45, headquarters: 'Dhahran', description: 'Oil and gas exports', strengths: ['World largest', 'Resources'] },
      { name: 'SABIC', marketShare: 20, headquarters: 'Riyadh', description: 'Petrochemicals exports', strengths: ['Scale', 'Global presence'] },
      { name: 'Saudi Ports Authority', marketShare: 15, headquarters: 'Riyadh', description: 'Port operations', strengths: ['Infrastructure', 'Investment'] }
    ],
    trends: [
      { title: 'Non-Oil Export Growth', description: 'Push to diversify export base', impact: 'positive', timeframe: 'long-term' },
      { title: 'Logistics Hub Development', description: 'Red Sea and Gulf port expansion', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Dominant energy exporter with growing diversification and logistics investment'
  },

  // Morocco
  {
    countryCode: 'MA',
    sectorId: 'technology',
    marketSize: 4200,
    marketSizeGrowth: 11.5,
    opportunityScore: 72,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 5,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Maroc Telecom', marketShare: 40, headquarters: 'Rabat', description: 'Telecom leader', strengths: ['Market position', 'Africa expansion'] },
      { name: 'Inwi', marketShare: 25, headquarters: 'Casablanca', description: 'Telecom challenger', strengths: ['Innovation', 'Youth focus'] },
      { name: 'Capgemini Morocco', marketShare: 12, headquarters: 'Casablanca', description: 'IT services', strengths: ['Global client base', 'Nearshore hub'] }
    ],
    trends: [
      { title: 'Nearshore IT Hub', description: 'French companies establishing tech centers', impact: 'positive', timeframe: 'short-term' },
      { title: 'Digital Morocco 2030', description: 'Government digitization initiative', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Growing tech hub serving European and African markets with cost advantages'
  },
  {
    countryCode: 'MA',
    sectorId: 'financial-services',
    marketSize: 52000,
    marketSizeGrowth: 6.5,
    opportunityScore: 70,
    competitiveIntensity: 'high',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Attijariwafa Bank', marketShare: 28, headquarters: 'Casablanca', description: 'Largest Moroccan bank', strengths: ['Market leader', 'Africa network'] },
      { name: 'BMCE Bank', marketShare: 20, headquarters: 'Casablanca', description: 'International bank', strengths: ['Africa focus', 'Trade finance'] },
      { name: 'Banque Populaire', marketShare: 18, headquarters: 'Casablanca', description: 'Cooperative bank', strengths: ['Branch network', 'SME focus'] }
    ],
    trends: [
      { title: 'Mobile Money Growth', description: 'Central bank promoting digital payments', impact: 'positive', timeframe: 'short-term' },
      { title: 'Africa Gateway', description: 'Moroccan banks expanding into Africa', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Stable banking sector with opportunities in mobile payments and Africa expansion'
  },
  {
    countryCode: 'MA',
    sectorId: 'online-services',
    marketSize: 1850,
    marketSizeGrowth: 18.2,
    opportunityScore: 74,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 4,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Jumia Morocco', marketShare: 30, headquarters: 'Casablanca', description: 'E-commerce platform', strengths: ['Market leader', 'Logistics network'] },
      { name: 'Glovo Morocco', marketShare: 22, headquarters: 'Casablanca', description: 'Delivery platform', strengths: ['Multi-service', 'Urban presence'] },
      { name: 'Avito', marketShare: 25, headquarters: 'Casablanca', description: 'Classifieds platform', strengths: ['User base', 'Trust'] }
    ],
    trends: [
      { title: 'Cash on Delivery Dominance', description: 'Payment infrastructure challenges', impact: 'neutral', timeframe: 'short-term' },
      { title: 'Social Commerce Growth', description: 'Instagram and WhatsApp selling', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Growing e-commerce with challenges in digital payments but strong potential'
  },
  {
    countryCode: 'MA',
    sectorId: 'wellness-health',
    marketSize: 6500,
    marketSizeGrowth: 8.5,
    opportunityScore: 68,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 6,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Akdital', marketShare: 18, headquarters: 'Casablanca', description: 'Private hospital group', strengths: ['IPO growth', 'Expansion'] },
      { name: 'Oncology Center', marketShare: 12, headquarters: 'Casablanca', description: 'Specialized care', strengths: ['Specialist focus', 'Partnerships'] },
      { name: 'Pharmacies chains', marketShare: 25, headquarters: 'Various', description: 'Retail pharmacy', strengths: ['Distribution', 'Accessibility'] }
    ],
    trends: [
      { title: 'Universal Health Coverage', description: 'AMO expansion to all citizens', impact: 'positive', timeframe: 'short-term' },
      { title: 'Medical Tourism from Africa', description: 'Regional patients seeking care', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Healthcare expansion driven by universal coverage and regional medical tourism'
  },
  {
    countryCode: 'MA',
    sectorId: 'tourism',
    marketSize: 12500,
    marketSizeGrowth: 14.5,
    opportunityScore: 80,
    competitiveIntensity: 'high',
    regulatoryComplexity: 4,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Royal Air Maroc', marketShare: 35, headquarters: 'Casablanca', description: 'National carrier', strengths: ['Africa hub', 'Global network'] },
      { name: 'ONMT', marketShare: 20, headquarters: 'Rabat', description: 'Tourism authority', strengths: ['Marketing', 'Development'] },
      { name: 'Accor Morocco', marketShare: 15, headquarters: 'Casablanca', description: 'Hotel group', strengths: ['Brand portfolio', 'Scale'] }
    ],
    trends: [
      { title: 'Sustainable Tourism', description: 'Eco-lodges and responsible travel', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Desert and Adventure', description: 'Experience tourism growth', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Strong tourism sector with diverse offerings and growing sustainable travel segment'
  },
  {
    countryCode: 'MA',
    sectorId: 'import-export',
    marketSize: 68000,
    marketSizeGrowth: 7.2,
    opportunityScore: 78,
    competitiveIntensity: 'high',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Tanger Med', marketShare: 40, headquarters: 'Tangier', description: 'Mega port operator', strengths: ['Africa largest port', 'Free zone'] },
      { name: 'OCP Group', marketShare: 25, headquarters: 'Casablanca', description: 'Phosphate exports', strengths: ['World leader', 'Vertical integration'] },
      { name: 'Renault Morocco', marketShare: 15, headquarters: 'Tangier', description: 'Automotive exports', strengths: ['Export hub', 'Manufacturing'] }
    ],
    trends: [
      { title: 'Automotive Export Hub', description: 'Morocco becoming car manufacturing center', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Africa Trade Gateway', description: 'AfCFTA positioning', impact: 'positive', timeframe: 'long-term' }
    ],
    outlook: 'Strategic export hub with automotive, phosphates, and Africa gateway positioning'
  },

  // Egypt
  {
    countryCode: 'EG',
    sectorId: 'technology',
    marketSize: 8500,
    marketSizeGrowth: 15.2,
    opportunityScore: 78,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 6,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Telecom Egypt', marketShare: 35, headquarters: 'Cairo', description: 'State telecom', strengths: ['Infrastructure', 'Government ties'] },
      { name: 'Vodafone Egypt', marketShare: 30, headquarters: 'Cairo', description: 'Mobile operator', strengths: ['Market share', 'Innovation'] },
      { name: 'ITIDA', marketShare: 15, headquarters: 'Cairo', description: 'IT industry authority', strengths: ['Policy support', 'BPO promotion'] }
    ],
    trends: [
      { title: 'Startup Ecosystem Growth', description: 'Cairo becoming regional startup hub', impact: 'positive', timeframe: 'short-term' },
      { title: 'BPO and Outsourcing', description: 'Growing IT outsourcing industry', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Large tech market with growing startup ecosystem and outsourcing opportunities'
  },
  {
    countryCode: 'EG',
    sectorId: 'financial-services',
    marketSize: 95000,
    marketSizeGrowth: 9.5,
    opportunityScore: 75,
    competitiveIntensity: 'high',
    regulatoryComplexity: 7,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'National Bank of Egypt', marketShare: 28, headquarters: 'Cairo', description: 'Largest bank', strengths: ['Government bank', 'Scale'] },
      { name: 'Commercial International Bank', marketShare: 18, headquarters: 'Cairo', description: 'Leading private bank', strengths: ['Private sector leader', 'Innovation'] },
      { name: 'Fawry', marketShare: 12, headquarters: 'Cairo', description: 'Payments platform', strengths: ['Financial inclusion', 'Network'] }
    ],
    trends: [
      { title: 'Financial Inclusion Push', description: 'Central bank promoting digital banking', impact: 'positive', timeframe: 'short-term' },
      { title: 'Fintech Licensing', description: 'New regulatory framework for fintech', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Large underbanked market with massive financial inclusion opportunity'
  },
  {
    countryCode: 'EG',
    sectorId: 'online-services',
    marketSize: 5200,
    marketSizeGrowth: 28.5,
    opportunityScore: 82,
    competitiveIntensity: 'high',
    regulatoryComplexity: 5,
    entryBarriers: 'low',
    keyPlayers: [
      { name: 'Talabat Egypt', marketShare: 28, headquarters: 'Cairo', description: 'Food delivery', strengths: ['Market presence', 'Operations'] },
      { name: 'Amazon Egypt', marketShare: 22, headquarters: 'Cairo', description: 'E-commerce giant', strengths: ['Souq acquisition', 'Scale'] },
      { name: 'Swvl', marketShare: 15, headquarters: 'Cairo', description: 'Mass transit platform', strengths: ['Innovation', 'Scale-up'] }
    ],
    trends: [
      { title: 'Super App Competition', description: 'Multiple players vying for dominance', impact: 'positive', timeframe: 'short-term' },
      { title: 'Rural E-commerce', description: 'Expansion beyond Cairo', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Fastest growing e-commerce market with 100M+ population and young demographics'
  },
  {
    countryCode: 'EG',
    sectorId: 'wellness-health',
    marketSize: 18500,
    marketSizeGrowth: 10.5,
    opportunityScore: 72,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 7,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Cleopatra Hospital Group', marketShare: 15, headquarters: 'Cairo', description: 'Private hospital chain', strengths: ['Market leader', 'Quality'] },
      { name: 'Ibn Sina Pharma', marketShare: 22, headquarters: 'Cairo', description: 'Pharmaceutical distributor', strengths: ['Distribution network', 'Scale'] },
      { name: 'Vezeeta', marketShare: 10, headquarters: 'Cairo', description: 'Health tech platform', strengths: ['Digital innovation', 'User base'] }
    ],
    trends: [
      { title: 'Universal Health Insurance', description: 'New national health insurance rollout', impact: 'positive', timeframe: 'long-term' },
      { title: 'Health Tech Growth', description: 'Digital health startups gaining traction', impact: 'positive', timeframe: 'short-term' }
    ],
    outlook: 'Large healthcare market with universal coverage expansion and health tech opportunities'
  },
  {
    countryCode: 'EG',
    sectorId: 'tourism',
    marketSize: 13500,
    marketSizeGrowth: 18.2,
    opportunityScore: 76,
    competitiveIntensity: 'medium',
    regulatoryComplexity: 5,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'EgyptAir', marketShare: 30, headquarters: 'Cairo', description: 'National carrier', strengths: ['Network', 'Star Alliance'] },
      { name: 'Orascom Hotels', marketShare: 18, headquarters: 'Cairo', description: 'Tourism developer', strengths: ['El Gouna', 'Development'] },
      { name: 'Egyptian Tourism Authority', marketShare: 20, headquarters: 'Cairo', description: 'Tourism promotion', strengths: ['Heritage marketing', 'Events'] }
    ],
    trends: [
      { title: 'Grand Egyptian Museum', description: 'Major attraction opening', impact: 'positive', timeframe: 'short-term' },
      { title: 'Red Sea Resorts', description: 'Beach tourism development', impact: 'positive', timeframe: 'medium-term' }
    ],
    outlook: 'Tourism recovery with unique heritage assets and Red Sea beach development'
  },
  {
    countryCode: 'EG',
    sectorId: 'import-export',
    marketSize: 125000,
    marketSizeGrowth: 6.8,
    opportunityScore: 70,
    competitiveIntensity: 'high',
    regulatoryComplexity: 7,
    entryBarriers: 'medium',
    keyPlayers: [
      { name: 'Suez Canal Authority', marketShare: 35, headquarters: 'Ismailia', description: 'Canal operations', strengths: ['Strategic asset', 'Revenue'] },
      { name: 'Egyptian Natural Gas', marketShare: 20, headquarters: 'Cairo', description: 'LNG exports', strengths: ['Mediterranean gas', 'Export capacity'] },
      { name: 'Alexandria Port', marketShare: 15, headquarters: 'Alexandria', description: 'Port operations', strengths: ['Historic port', 'Mediterranean access'] }
    ],
    trends: [
      { title: 'Suez Canal Expansion', description: 'Capacity and service improvements', impact: 'positive', timeframe: 'medium-term' },
      { title: 'Gas Export Growth', description: 'Mediterranean gas development', impact: 'positive', timeframe: 'long-term' }
    ],
    outlook: 'Strategic trade position with Suez Canal and growing gas exports'
  }
]

export const sectorList = Object.values(sectors)
export const sectorIdList: SectorId[] = ['technology', 'financial-services', 'online-services', 'wellness-health', 'tourism', 'import-export']

// Helper function to get sector data for a country
export function getSectorDataForCountry(countryCode: CountryCode): CountrySectorData[] {
  return countrySectorData.filter(d => d.countryCode === countryCode)
}

// Helper function to get country data for a sector
export function getCountryDataForSector(sectorId: SectorId): CountrySectorData[] {
  return countrySectorData.filter(d => d.sectorId === sectorId)
}

// Helper function to get specific country-sector data
export function getCountrySectorData(countryCode: CountryCode, sectorId: SectorId): CountrySectorData | undefined {
  return countrySectorData.find(d => d.countryCode === countryCode && d.sectorId === sectorId)
}
