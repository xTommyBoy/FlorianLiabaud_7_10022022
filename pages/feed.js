import { useState } from 'react'
import useSWR from 'swr'
import Input from '../components/Input'

export default function Feed() {
  const [currentPostId, setCurrentPostId] = useState(14)
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/post`
  )
  const commentsEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/comments/${currentPostId}`
  const { data: currentComments, error: commentsError } =
    useSWR(commentsEndpoint)

  return (
    <div className="flex-grow border-l border-t min-h-[100vh] border-r border-black max-w-3xl raw1:ml-[73px] xl:ml-[370px]">
      <div className=" flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-black">
        <h2 className="text-lg sm:text-xl font-bold">Accueil</h2>
      </div>
      <Input />
    </div>
  )
}
