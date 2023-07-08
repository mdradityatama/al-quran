import { useRouter } from 'next/navigation'

type props = {
  id: number
  name: string
  revelationPlace: string
  versesCount: number
}

export const CardChapter = ({ id, name, revelationPlace, versesCount }: props) => {
  const router = useRouter()

  return (
    <div className="p-4 flex gap-4 items-center border-4 cursor-pointer" onClick={() => router.push(`quran/capters/${id}`)}>
      <div>Icon</div>
      <div>
        <div>{name}</div>
        <div>
          {revelationPlace} | {versesCount} ayat
        </div>
      </div>
    </div>
  )
}

export default CardChapter
