import './globals.css'
import '@uploadthing/react/styles.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainNav from '@/components/shared/main-nav'
import { CSPostHogProvider } from './_analytics/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'galury',
  description: 'upload images and share them with the world'
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <body className={`${inter.className}`}>
            <MainNav />
            <main>
              {children}
              {modal}
              <div id="modal-root" />
            </main>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  )
}
