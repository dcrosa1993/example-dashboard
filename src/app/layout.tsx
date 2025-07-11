import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'My Dashboard',
  description: 'BI Dashboard built with Next.js and shadcn/ui',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {typeof window !== 'undefined' && !window.location.pathname.startsWith('/login') && (
          <header className="flex justify-between items-center p-4 border-b">
            <h1 className="text-xl font-bold">My Dashboard</h1>
            <Link href="/logout" className="text-sm text-red-500">
              Logout
            </Link>
          </header>
        )}
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
