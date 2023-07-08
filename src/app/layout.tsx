import './globals.css'
import { Container } from '@/components/Container'
import React from 'react'

export const metadata = {
  title: 'Al-Quran Indonesia',
  description: 'Al-Quran for everyone'
}

type props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
