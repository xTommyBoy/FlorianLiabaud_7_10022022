import React, { useState, useRef } from 'react'
import { Router, useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { useConnectedUserContext } from '/pages/_app'
import FormButton from '/components/FormButton'
import updateUser from '/api/updateUser'
import DeleteButton from '../components/DeleteButton'
import deleteUser from '../api/deleteUser'

export default function Profil() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const filePickerRef = useRef(null)

  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [isUserUpdating, setIsUserUpdating] = useState(false)

  async function onSubmit({ email, name, profileImage, password }) {
    try {
      setErrorMessage(null)
      setSuccessMessage(null)
      setIsUserUpdating(true)
      const updatedUser = await updateUser(email, name, profileImage, password)
      setConnectedUser(updatedUser)
      setIsUserUpdating(false)
      setSuccessMessage('Mise à jour effectuée avec succès')
    } catch (error) {
      setIsUserUpdating(false)
      setSuccessMessage(null)
      setErrorMessage(error.message)
    }
  }

  async function deleteAction() {
    try {
      await deleteUser(connectedUser?.id, getValues("password"))
      router.push('/')
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const src = connectedUser?.profileImageUrl

  return (
    <main className="flex flex-col text-sm font-bold rounded-lg w-full max-w-3xl py-10 mx-auto px-6">
      <section className="flex border-2 border-gray-900 flex-col w-full px-4 py-6 sm:p-6 rounded-lg">
        <h1 className="mb-8 text-xl font-bold pb-4 border-b-2 border-gray-900">
          Mon Profil
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            {src && (
              <img
                src={src}
                alt="profile"
                className="h-24 w-24 rounded-full border-2 border-gray-900"
              />
            )}

            <span className="text-xl ml-4">{connectedUser?.name || ''}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-8">
          <div className="flex flex-col">
            <label className="text-sm">
              URL de l&apos;image de profil &#40; jpg, png, gif &#41;
            </label>
            <input
              className={`block w-full rounded-md mt-1 ${
                errors.profileImage ? 'invalid-input' : 'valid-input'
              } input`}
              type="text"
              placeholder="https://example.com/image.png"
              {...register('profileImage', { required: false })}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm">NOM</label>
            <input
              defaultValue={connectedUser?.name || ''}
              className={`block w-full rounded-md mt-1 ${
                errors.name ? 'invalid-input' : 'valid-input'
              } input`}
              type="text"
              placeholder="John Doe"
              {...register('name', { required: true })}
            />
            {errors.name && <p className="text-red-500">Un nom est requis !</p>}
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">EMAIL</label>
            <input
              defaultValue={connectedUser?.email || ''}
              className={`block w-full rounded-md mt-1 ${
                errors.email ? 'invalid-input' : 'valid-input'
              } input`}
              type="email"
              placeholder="johndoe@mail.com"
              {...register('email', {
                required: true,
                pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
              })}
            />
            {errors.email && (
              <p className="text-red-500">Une adresse mail est requise !</p>
            )}
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm">MOT DE PASSE</label>
            <input
              defaultValue={connectedUser?.password || ''}
              className={`block w-full rounded-md mt-1 ${
                errors.password ? 'invalid-input' : 'valid-input'
              } input`}
              type="password"
              placeholder="***********"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Un mot de passe est requis</p>
            )}
          </div>

          <div className="flex items-center mt-4">
            <FormButton text="Mettre à jour" loading={isUserUpdating} />
          </div>
        </form>
        <div className="flex items-center mt-6" onClick={deleteAction}>
          <DeleteButton text="Supprimer le compte" />
        </div>

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

        {successMessage && (
          <div className="p-4 mt-4 rounded-md bg-green-50">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="w-5 h-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  {successMessage}
                </h3>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
