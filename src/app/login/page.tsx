'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input }  from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const VALID_EMAIL = 'technology@kameleonlabs.ai'
const VALID_PASSWORD = '#4nrsHSre1#@uPC$3ZR8'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      document.cookie = "auth=true; path=/; max-age=3600"
      router.push('/report/sales')
    } else {
      setError('Usuario o contraseña inválidos')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}
