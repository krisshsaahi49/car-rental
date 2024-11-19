import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Rental Service',
  description: 'Car Rental Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html data-theme="light" lang="en">
        <body className={inter.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <SignIn routing='hash' />
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  )
}
