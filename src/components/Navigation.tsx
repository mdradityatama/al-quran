import React from 'react'
import { useRouter } from 'next/navigation'

type props = {
  Title: string
  url: string
}

export const Navigation = ({ Title, url }: props) => {
  const router = useRouter()

  return (
    <div className="flex items-center p-4 gap-2 border-b-2">
      <button onClick={() => router.push(url)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>
      <div className="border-l-2 border-b-black pl-4">{Title}</div>
    </div>
  )
}

export default Navigation
