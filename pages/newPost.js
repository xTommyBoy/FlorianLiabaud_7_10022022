import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import createPost from '/api/createPost'
import { XCircleIcon } from '@heroicons/react/solid'
import FormButton from '/components/FormButton'
import { useConnectedUserContext } from '/pages/_app'

export default function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const [errorMessage, seterrorMessage] = useState(null)
  const [postIsPosting, setPostIsUpdating] = useState(false)
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  async function onSubmit(data) {
    try {
      seterrorMessage(null)
      setPostIsUpdating(true)
      await createPost(data.title, data.externalGifURl)
      router.push('/feed')
    } catch (error) {
      seterrorMessage(error.message)
      setPostIsUpdating(false)
    }
  }

  return (
    <main className="flex flex-col w-full max-w-3xl py-10 mx-auto sm:px-6">
      <section className="flex flex-col w-full px-4 py-6 border border-gray-900 sm:p-6 sm:rounded-lg">
        <h1 className="mb-8 text-2xl font-bold">Faire un post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-sm">Titre</label>
            <input
              className={`block w-full mt-1 rounded-md ${
                errors.externalGifURl ? 'invalid-input' : 'valid-input'
              } input`}
              type="text"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <p className="text-red-500">Un titre doit être renseigné !</p>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">
              URL de l&apos;image de profil &#40; jpg, png, gif &#41;
            </label>
            <div className="flex mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className={`flex-1 block w-full min-w-0 px-3 py-2 rounded-md placeholder-gray-400 ${
                  errors.externalGifURl
                    ? 'border-red-300 focus:border-red-400 placeholder-red-300 focus:ring-red-200'
                    : 'valid-input'
                } focus:ring focus:ring-opacity-50`}
                placeholder="https://example.com/image.png"
                {...register('externalGifURl', { required: false })}
              />
            </div>
            {errors.externalGifURl && (
              <p className="text-red-500">Le lien doit être renseigné !</p>
            )}
          </div>
          <div className="flex items-center mt-4">
            <FormButton
              loading={postIsPosting}
              text="Ajouter une publication"
            />
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
      </section>
    </main>
  )
}
