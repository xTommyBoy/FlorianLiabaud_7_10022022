import { useState } from 'react'
import useSWR from 'swr'
import Input from '../components/Input'
import Post from '../components/Post'
import Link from 'next/link'

export default function Feed() {
  const [currentPostId, setCurrentPostId] = useState(14)
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/post`
  )
  const commentsEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/comments/${currentPostId}`
  const { data: currentComments, error: commentsError } =
    useSWR(commentsEndpoint)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex-grow border-l border-t min-h-[100vh] border-r border-black max-w-3xl raw1:ml-[73px] xl:ml-[370px]">
      <div className=" items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-black bg-white">
        <h2 className="text-lg sm:text-xl font-bold pb-2 border-b border-black">
          Accueil
        </h2>
        <Link href="/newPost" passHref>
          <button className="flex justify-center w-full my-4 py-2 font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-sm cursor-pointer bg-gray-900 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            Faire un post
          </button>
        </Link>
      </div>
      {/* <Input /> */}
      <div className="pb-72">
        {data?.map((post) => (
          <Post
            key={post.id}
            post={post}
            setIsDialogOpen={setIsDialogOpen}
            setCurrentPostId={setCurrentPostId}
          />
        ))}
      </div>
    </div>
  )
}