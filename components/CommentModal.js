import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Fragment } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'
import { XIcon } from '@heroicons/react/solid'
import { useConnectedUserContext } from '/pages/_app'
import dayjs from 'dayjs'

export default function CommentModal({ comments, post, parentEvent }) {
  let [isOpen, setIsOpen] = useState(true)
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  function closeModal() {
    setIsOpen(false)
    parentEvent()
  }

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-99 border-2"
          onClose={() => setIsOpen(true)}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-20 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            ></span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl px-4 overflow-hidden text-left align-middle transition-all transform">
                <div className="p-2 bg-white rounded-t-2xl shadow-xl border-b border-gray-700">
                  <div
                    className="hover:bg-black hover:bg-opacity-5 rounded-full w-9 h-9 flex items-center justify-center xl:px-0 cursor-pointer"
                    onClick={closeModal}
                  >
                    <XIcon className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex px-4 pt-5 pb-2.5 sm:px-6 bg-white rounded-b-2xl shadow-xl">
                  <div className="w-full">
                    <div className="flex gap-x-3 relative">
                      <span className="w-0.5 h-10 absolute left-5 top-11 bg-gray-500" />

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
                      <div className="space-y-2 w-full">
                        <div className="inline-block">
                          <h4 className="font-bold inline-block text-sm sm:text-base hover:underline ">
                            {post.user.displayName}
                          </h4>{' '}
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
                      </div>
                      {connectedUser?.role === 'admin' ||
                        connectedUser?.id === post.user?.id}
                    </div>

                    <div className="mt-7 flex w-full">
                      <Comment comments={comments} />
                    </div>
                    <CommentInput currentPostId={post.id} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
