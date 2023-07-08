import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen sm:container">
      <div className="flex justify-center mt-16">
        <div className="w-80 h-80 bg-amber-200 rounded-full"></div>
      </div>
      <div className="flex justify-evenly mt-10">
        <Link
          href="/quran"
          type="button"
          className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Baca Qur'an
        </Link>
        <button
          type="button"
          className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Terakhir baca
        </button>
      </div>
    </div>
  )
}
