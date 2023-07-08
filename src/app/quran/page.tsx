'use client'
import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import CardChapter from '@/components/CardChapter'
import { bool } from 'prop-types'

const getData = async (): Promise<any> => {
  const res = await fetch(' https://equran.id/api/v2/surat')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Quran() {
  // @ts-ignore
  const [isLoading, setLoading] = useState<bool | undefined>(undefined)
  const { data: surahs }: any = await getData()

  return (
    <>
      <Navigation Title="Quran" url="/" />
      {surahs &&
        surahs.map((data: any) => (
          <CardChapter
            key={data.nomor}
            id={data.nomor}
            name={data.namaLatin}
            revelationPlace={data.tempatTurun}
            versesCount={data.jumlahAyat}
          />
        ))}
    </>
  )
}
