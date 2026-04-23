// Utility functions for formatting data

/**
 * Format a number as currency (USD by default)
 */
export function formatCurrency(
  value: number,
  options: {
    currency?: string
    compact?: boolean
    decimals?: number
  } = {}
): string {
  const { currency = 'USD', compact = false, decimals = 0 } = options

  if (compact) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      notation: 'compact',
      maximumFractionDigits: decimals,
    }).format(value)
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format a number with compact notation (e.g., 1.2B, 500M)
 */
export function formatCompactNumber(value: number, decimals: number = 1): string {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Format a number as a percentage
 */
export function formatPercentage(
  value: number,
  options: {
    decimals?: number
    showSign?: boolean
  } = {}
): string {
  const { decimals = 1, showSign = false } = options
  const formatted = value.toFixed(decimals)
  
  if (showSign && value > 0) {
    return `+${formatted}%`
  }
  
  return `${formatted}%`
}

/**
 * Format a large number with appropriate suffix
 */
export function formatLargeNumber(value: number): string {
  if (value >= 1_000_000_000_000) {
    return `${(value / 1_000_000_000_000).toFixed(1)}T`
  }
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`
  }
  return value.toString()
}

/**
 * Format a date relative to now
 */
export function formatRelativeDate(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return 'Today'
  }
  if (diffDays === 1) {
    return 'Yesterday'
  }
  if (diffDays < 7) {
    return `${diffDays} days ago`
  }
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} month${months > 1 ? 's' : ''} ago`
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Format a date in standard format
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Get trend color class based on value
 */
export function getTrendColorClass(value: number): string {
  if (value > 0) return 'metric-positive'
  if (value < 0) return 'metric-negative'
  return 'metric-neutral'
}

/**
 * Get trend arrow based on value
 */
export function getTrendArrow(value: number): string {
  if (value > 0) return '↑'
  if (value < 0) return '↓'
  return '→'
}

/**
 * Format risk level to display string
 */
export function formatRiskLevel(risk: 'low' | 'medium' | 'high'): string {
  return risk.charAt(0).toUpperCase() + risk.slice(1)
}

/**
 * Get risk level color class
 */
export function getRiskColorClass(risk: 'low' | 'medium' | 'high'): string {
  switch (risk) {
    case 'low':
      return 'text-success'
    case 'medium':
      return 'text-warning'
    case 'high':
      return 'text-destructive'
    default:
      return 'text-muted-foreground'
  }
}

/**
 * Format opportunity score with color indication
 */
export function getScoreColorClass(score: number): string {
  if (score >= 85) return 'text-success'
  if (score >= 70) return 'text-primary'
  if (score >= 50) return 'text-warning'
  return 'text-destructive'
}

/**
 * Format population in millions
 */
export function formatPopulation(millions: number): string {
  if (millions >= 100) {
    return `${millions.toFixed(0)}M`
  }
  return `${millions.toFixed(1)}M`
}

/**
 * Format GDP in billions
 */
export function formatGDP(billions: number): string {
  if (billions >= 1000) {
    return `$${(billions / 1000).toFixed(2)}T`
  }
  return `$${billions.toFixed(1)}B`
}
