import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../../Providers/Providers'
import Header from './components/templates/Header'
import Filters from './components/templates/Filters'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dashboard App',
    description: 'Designed and Created by Grzegorz Skrabucha',
}

export const revalidate = 0

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Header />
                    <Filters />
                    <div className="h-full xl:ml-[100px] mt-[80px] xl:mt-0 xl:w-[calc(100vw-100px)] p-3 md:p-6">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
