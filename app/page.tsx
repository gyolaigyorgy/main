'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FieldGroup, Field, FieldLabel, FieldError } from '@/components/ui/field'
import { Shield, TrendingUp, Globe, BarChart3 } from 'lucide-react'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Full navigation so middleware sees the freshly set auth cookie
        window.location.href = '/dashboard'
      } else {
        setError('Invalid password. Please try again.')
        setIsLoading(false)
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-4">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">MPI Hub</h1>
          <p className="text-muted-foreground mt-2">Market & Competitive Intelligence</p>
        </div>

        {/* Login Card */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your access code to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="password">Access Code</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-input/50"
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                  {error && <FieldError>{error}</FieldError>}
                </Field>
                <Button 
                  type="submit" 
                  className="w-full mt-2"
                  disabled={isLoading || !password}
                >
                  {isLoading ? 'Authenticating...' : 'Access Dashboard'}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">6 Countries</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
            <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">6 Sectors</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/40 border border-border/30">
            <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Real-time Data</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          MENA Region Market Intelligence Platform
        </p>
      </div>
    </div>
  )
}
