'use client'
import Navigation from '@/components/Navigation'
import CardVerses from '@/components/CardVerses'

async function getData(id: number) {
  const res = await fetch(` https://equran.id/api/v2/surat/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type props = {
  params: { captersNumber: number }
}

export default async function Page({ params }: props) {
  const capter = await getData(params.captersNumber)
  console.log(capter.data)
  return (
    <>
      <Navigation Title={`Surah ${params.captersNumber}`} url="/quran" />
      {capter &&
        capter.data.ayat.map((ayat: any) => (
          <CardVerses key={ayat.nomorAyat} id={ayat.nomorAyat} textArabic={ayat.teksArab} textIndonesia={ayat.teksIndonesia} />
        ))}
    </>
  )
}
