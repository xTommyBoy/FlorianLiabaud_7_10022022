import { useState } from 'react'
import { ChatAltIcon } from '@heroicons/react/solid'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useConnectedUserContext } from '/pages/_app'
import FormButton from './FormButton'
import { XCircleIcon, XIcon } from '@heroicons/react/solid'
import { useForm } from 'react-hook-form'
import { updatePost } from '/api/updatePost'
import { ChatIcon, TrashIcon } from '@heroicons/react/outline'

function Post({ post, setIsDialogOpen, setCurrentPostId }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [showUpdateUi, setShowUpdateUi] = useState(false)

  return (
    <>
      <div className="mt-4 p-3 border-b border-gray-700">
        <div className="flex space-x-3 ">
          <img
            referrerPolicy="no-referrer"
            className="w-11 h-11 rounded-full mr-4"
            src={post.user.profileImageUrl} // TODO: use user's profile image
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
            <img
              className="bg-gray-50 rounded-xl object-contain max-h-[25rem]"
              src={post.imageUrl}
              alt=""
            />
          </div>
          {connectedUser?.role === 'admin' ||
            connectedUser?.id === post.user?.id}
        </div>

        <div className="text-[#6e767d] flex justify-around w-10/12 mx-auto mt-2">
          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            <span className="group-hover:text-[#1d9bf0] text-sm"></span>
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-red-600/10">
              <TrashIcon className="h-5 group-hover:text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {showUpdateUi && (
        <PostUpdate post={post} setShowUpdateUi={setShowUpdateUi} />
      )}
    </>
  )
}

function PostUpdate({ post, setShowUpdateUi }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [postIsUpdating, setPostIsUpdating] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  async function onSubmit(data) {
    try {
      setErrorMessage(null)
      setPostIsUpdating(true)
      await updatePost(
        data.title,
        data.externalGifURl,
        connectedUser.id,
        post.id
      )
      setPostIsUpdating(false)
      setShowUpdateUi(false)
    } catch (error) {
      setErrorMessage(error.message)
      setPostIsUpdating(false)
    }
  }

  return (
    <article className="absolute inset-0 px-4 py-6 bg-white sm:p-6 bg-opacity-95">
      <button
        type="button"
        className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded right-4 sm:right-6 top-6"
        onClick={() => {
          setShowUpdateUi(false)
        }}
      >
        <XIcon className="w-4 h-4" />
      </button>
      <h2 className="section-title">Modifier la post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-sm">Titre de la post</label>
          <input
            className={`block w-full mt-1 ${
              errors.externalGifURl ? 'invalid-input' : 'valid-input'
            } input`}
            type="text"
            defaultValue={post.title}
            {...register('title', { required: true })}
          />
          {errors.title && (
            <p className="text-red-500">Le titre doit être renseigné !</p>
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm">Lien du GIF ou de l'image</label>
          <div className="flex mt-1 rounded-md shadow-sm">
            <input
              type="text"
              defaultValue={post.imageUrl}
              name="company-website"
              id="company-website"
              className={`flex-1 block w-full min-w-0 px-3 py-2 rounded-md placeholder-gray-400 ${
                errors.externalGifURl
                  ? 'border-red-300 focus:border-red-400 placeholder-red-300 focus:ring-red-200'
                  : 'valid-input'
              } focus:ring focus:ring-opacity-50`}
              placeholder="https://www.example.com"
              {...register('externalGifURl', { required: true })}
            />
          </div>
          {errors.externalGifURl && (
            <p className="text-red-500">Le lien doit être renseigné !</p>
          )}
        </div>
        <div className="flex items-center mt-4">
          <FormButton loading={postIsUpdating} text="Modifier le post" />
        </div>
      </form>

      {errorMessage && (
        <div className="p-4 mt-4 rounded-md bg-red-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="w-5 h-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {errorMessage}
              </h3>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default Post
