'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-xl font-semibold">You have been logged out.</h1>
      <button
        onClick={() => router.push('/login')}
        className="text-blue-500 underline"
      >
        Back to login
      </button>
    </div>
  )
}
