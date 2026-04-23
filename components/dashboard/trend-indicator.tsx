import { cn } from '@/lib/utils'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface TrendIndicatorProps {
  value: number
  showValue?: boolean
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
  suffix?: string
  className?: string
}

export function TrendIndicator({
  value,
  showValue = true,
  showIcon = true,
  size = 'md',
  suffix = '%',
  className,
}: TrendIndicatorProps) {
  const isPositive = value > 0
  const isNegative = value < 0
  const isNeutral = value === 0

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1',
        sizeClasses[size],
        className
      )}
    >
      {showIcon && (
        <>
          {isPositive && (
            <TrendingUp className={cn(iconSizes[size], 'text-success')} />
          )}
          {isNegative && (
            <TrendingDown className={cn(iconSizes[size], 'text-destructive')} />
          )}
          {isNeutral && (
            <Minus className={cn(iconSizes[size], 'text-muted-foreground')} />
          )}
        </>
      )}
      {showValue && (
        <span
          className={cn(
            'font-medium',
            isPositive && 'text-success',
            isNegative && 'text-destructive',
            isNeutral && 'text-muted-foreground'
          )}
        >
          {isPositive && '+'}
          {value.toFixed(1)}
          {suffix}
        </span>
      )}
    </div>
  )
}
