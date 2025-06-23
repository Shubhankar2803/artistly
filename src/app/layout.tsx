import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FilterProvider } from "@/context/FilterContext"
import { Suspense } from "react"
import Loading from "@/components/Loading"
import PageTransition from "@/components/PageTransition"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly.com',
  description: 'Performing Artist Booking Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FilterProvider>
            <Suspense fallback={<Loading />}>
              <PageTransition>
                {children}
              </PageTransition>
            </Suspense>
          </FilterProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
