'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { formatRelativeDate } from '@/lib/utils/format'
import type { Alert } from '@/lib/data/types'
import { countries } from '@/lib/data/countries'
import { Bell, AlertTriangle, TrendingUp, FileText, Shield } from 'lucide-react'

interface AlertFeedProps {
  alerts: Alert[]
  className?: string
}

const alertTypeIcons = {
  opportunity: TrendingUp,
  risk: AlertTriangle,
  regulatory: FileText,
  market: Shield,
}

const alertTypeColors = {
  opportunity: 'text-success',
  risk: 'text-destructive',
  regulatory: 'text-warning',
  market: 'text-info',
}

const severityColors = {
  info: 'bg-info/10 text-info border-info/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  critical: 'bg-destructive/10 text-destructive border-destructive/20',
}

export function AlertFeed({ alerts, className }: AlertFeedProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Bell className="h-4 w-4 text-primary" />
          Recent Alerts
        </CardTitle>
        <Badge variant="outline" className="text-xs">
          {alerts.filter(a => !a.isRead).length} new
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[320px]">
          <div className="px-6 pb-6 space-y-3">
            {alerts.map((alert) => {
              const Icon = alertTypeIcons[alert.type]
              const country = alert.countryCode ? countries[alert.countryCode] : null
              
              return (
                <div
                  key={alert.id}
                  className={cn(
                    'p-3 rounded-lg border transition-colors cursor-pointer hover:bg-muted/50',
                    !alert.isRead && 'bg-muted/30 border-primary/20'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn('mt-0.5', alertTypeColors[alert.type])}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className={cn(
                          'text-sm font-medium leading-tight',
                          !alert.isRead && 'text-foreground',
                          alert.isRead && 'text-muted-foreground'
                        )}>
                          {alert.title}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={cn('text-[10px] shrink-0', severityColors[alert.severity])}
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {alert.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        {country && (
                          <span className="text-xs text-muted-foreground">
                            {country.flag} {country.name}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {formatRelativeDate(alert.timestamp)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
