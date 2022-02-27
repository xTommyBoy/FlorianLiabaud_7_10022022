import { useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useConnectedUserContext } from '/pages/_app'
import {
  ChatIcon,
  TrashIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import deletePost from '../api/deletePost'
import CommentModal from '../components/CommentModal'
import { mutate } from 'swr'

function Post({ post }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const router = useRouter()
  let [comments, setComments] = useState([])
  let [isOpen, setIsOpen] = useState(false)

  async function getComments() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/comments/${post.id}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
    setComments(response)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  async function deleteAction() {
    try {
      await deletePost(post.id)
      mutate(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/post`)
    } catch (error) {
      alert(error.message)
    }
  }

  function copyUrl() {
    navigator.clipboard.writeText(post.imageUrl)
    alert("Lien de l'image copié !")
  }

  function copyPostContent() {
    navigator.clipboard.writeText(post.title)
    alert('Contenu du post copié !')
  }

  return (
    <>
      <div className="mt-4 p-3 border-b border-gray-700">
        <div className="flex space-x-3 ">
          {connectedUser?.role === 'admin' ||
          connectedUser?.id === post.user?.id ? (
            <img
              onClick={() => router.push('/profil')}
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full mr-4 border-2 border-gray-900 cursor-pointer"
              src={
                post.user.profileImageUrl === ''
                  ? '/images/default-pp.png'
                  : post.user.profileImageUrl
              }
              alt=""
            />
          ) : (
            <img
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-full mr-4 border-2 border-gray-900"
              src={
                post.user.profileImageUrl === ''
                  ? '/images/default-pp.png'
                  : post.user.profileImageUrl
              }
              alt=""
            />
          )}
          <div className="space-y-2 w-full">
            <div className="inline-block">
              {connectedUser?.role === 'admin' ||
              connectedUser?.id === post.user?.id ? (
                <h4
                  className="font-bold inline-block text-sm sm:text-base hover:underline cursor-pointer"
                  onClick={() => router.push('/profil')}
                >
                  {post.user.displayName}
                </h4>
              ) : (
                <h4 className="font-bold inline-block text-sm sm:text-base hover:underline">
                  {post.user.displayName}
                </h4>
              )}{' '}
              ·{' '}
              <span className="text-sm text-gray-500">
                <time dateTime={post.dateCreated}>
                  {dayjs(post.dateCreated)
                    .locale('fr')
                    .format('DD MMMM YYYY [à] HH[h]mm')}
                </time>
              </span>
            </div>
            <h2
              id={'post-title-' + post.id}
              className="mt-4 text-base font-medium text-gray-900"
            >
              {post.title}
            </h2>
            <img
              className="bg-gray-50 rounded-xl object-contain max-h-[25rem] cursor-pointer"
              src={post.imageUrl}
              alt=""
              onClick={copyUrl}
            />
            <div className="text-[#6e767d] flex justify-between sm:justify-around sm:space-x-40 w-[80%] mx-auto mt-2">
              <div className="flex items-center space-x-1 group">
                <button
                  className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 space-x-2"
                  onClick={() => {
                    getComments(), (isOpen = true)
                  }}
                >
                  <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
                  <span className="group-hover:text-[#1d9bf0] text-sm mr-1">
                    {post._count.comment}
                  </span>
                </button>
              </div>

              <div className="flex items-center space-x-1 group">
                <div className="icon group-hover:bg-red-600/10">
                  {connectedUser?.role === 'admin' ||
                  connectedUser?.id === post.user?.id ? (
                    <TrashIcon
                      onClick={deleteAction}
                      className="h-5 group-hover:text-red-600"
                    />
                  ) : (
                    <SwitchHorizontalIcon
                      className="h-5 group-hover:text-green-500"
                      onClick={copyPostContent}
                    />
                  )}
                </div>
              </div>
              {isOpen ? (
                <CommentModal
                  parentEvent={closeModal}
                  comments={comments}
                  post={post}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          {connectedUser?.role === 'admin' ||
            connectedUser?.id === post.user?.id}
        </div>
      </div>
    </>
  )
}

export default Post
