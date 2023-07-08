import { useRouter } from 'next/navigation'

type props = {
  id: number
  textArabic: string
  textIndonesia: string
}

export const CardChapter = ({ id, textArabic, textIndonesia }: props) => {
  const router = useRouter()

  return (
    <div className="p-4 flex gap-4 items-center border-4 cursor-pointer">
      <div>Icon</div>
      <div>
        <div>{textArabic}</div>
        <div>{textIndonesia}</div>
      </div>
    </div>
  )
}

export default CardChapter
