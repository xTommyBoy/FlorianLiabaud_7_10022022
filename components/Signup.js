import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useConnectedUserContext } from '/pages/_app'
import FormButton from '/components/FormButton'
import createUser from '/api/createUser'

export default function Signup() {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState(null)
  const [requestSending, setrequestSending] = useState(false)

  async function onSubmit(data) {
    try {
      setrequestSending(true)
      setErrorMessage(null)
      const user = await createUser(data.email, data.displayName, data.password)
      setConnectedUser(user)
      setrequestSending(false)
      router.push('/feed')
    } catch (error) {
      setErrorMessage(error.message)
      setrequestSending(false)
    }
  }

  const formPswd = watch('password') || ''

  const uppercaseCondition = (localPswd) => {
    const password = localPswd || formPswd
    return password.search(/[A-Z]/) !== -1
  }

  const lowercaseCondition = (localPswd) => {
    const password = localPswd || formPswd
    return password.search(/[a-z]/) !== -1
  }

  const numberCondition = (localPswd) => {
    const password = localPswd || formPswd
    return password.search(/[1-9]/) !== -1
  }

  const passwordValidation = (inputValue) => {
    return (
      uppercaseCondition(inputValue) &&
      lowercaseCondition(inputValue) &&
      numberCondition(inputValue)
    )
  }

  return (
    <section className="flex flex-col w-full px-4 py-6 bg-white rounded-lg border-2 border-gray-900 sm:p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-sm">Nom</label>
          <input
            className={`${
              errors.displayName ? 'invalid-input' : 'valid-input'
            } input block w-full mt-1`}
            type="text"
            {...register('displayName', { required: true })}
          />
          {errors.displayName && (
            <p className="text-red-500">Un nom est requis</p>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm">Email</label>
          <input
            className={` ${
              errors.email ? 'invalid-input' : 'valid-input'
            } input block w-full mt-1`}
            type="email"
            placeholder="example@gmail.com"
            {...register('email', {
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
            })}
          />
          {errors.email && (
            <p className="text-red-500">Une adresse mail est requise</p>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-sm">Mot de passe</label>
          <input
            className={`${
              errors.password ? 'invalid-input' : 'valid-input'
            } input block w-full mt-1`}
            type="password"
            {...register('password', {
              required: true,
              validate: (inputValue) => passwordValidation(inputValue),
            })}
          />
          {errors.password && (
            <p className="text-red-500">
              Le mot de passe doit contenir au moins une majuscule et un nombre
            </p>
          )}
        </div>

        <div className="flex items-center mt-4">
          <FormButton loading={requestSending} text="Créer un compte" />
        </div>
      </form>

      {errorMessage && (
        <div className="p-4 mt-4 rounded-md bg-red-50">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {errorMessage}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
