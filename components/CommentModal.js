import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'
import { XIcon } from '@heroicons/react/solid'

export default function MyDialog({
  isOpen,
  setIsOpen,
  comments,
  currentPostId,
  commentsEndpoint,
}) {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition.Root appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
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
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
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
                <div className="p-6 my-8 bg-white rounded-md shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="mb-8 text-xl font-bold text-rose-600"
                  >
                    Commentaires
                  </Dialog.Title>
                  <Comment comments={comments} />
                  <CommentInput
                    currentPostId={currentPostId}
                    commentsEndpoint={commentsEndpoint}
                  />
                  <button
                    type="button"
                    className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded right-10 top-14"
                    onClick={closeModal}
                  >
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
