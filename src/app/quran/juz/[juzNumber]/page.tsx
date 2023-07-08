'use client'
import Navigation from '@/components/Navigation'

type props = {
  params: { juzNumber: number }
}

export default function Page({ params }: props) {
  return (
    <>
      <Navigation Title={`Juz ${params.juzNumber}`} url="/quran" />
      <div>Juz Number: {params.juzNumber}</div>
    </>
  )
}
