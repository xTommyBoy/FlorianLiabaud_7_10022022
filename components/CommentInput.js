import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import createComment from '/api/createComment'
import FormButton from './FormButton'
import { mutate } from 'swr'
import { useConnectedUserContext } from '/pages/_app'

export default function CommentInput({ currentPostId, commentsEndpoint }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isCommentPosting, setIsCommentPosting] = useState(false)
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  async function onSubmit(data) {
    try {
      setIsCommentPosting(true)
      await createComment(currentPostId, data.comment)
      mutate(commentsEndpoint)
      setIsCommentPosting(false)
      reset()
    } catch (error) {
      alert(error)
      setIsCommentPosting(false)
    }
  }

  return (
    <form className="flex flex-grow mt-2" onSubmit={handleSubmit(onSubmit)}>
      <img
        referrerPolicy="no-referrer"
        className="w-11 h-11 rounded-full mr-4 border-2 border-gray-900"
        src={
          connectedUser?.profileImageUrl === ''
            ? '/images/default-pp.png'
            : connectedUser?.profileImageUrl
        }
        alt=""
      />
      <input
        type="text"
        placeholder="Votre commentaire..."
        {...register('comment', { required: true })}
        className={`border-none tracking-wide w-full ${
          errors.comment ? 'invalid-input' : 'valid-input'
        } flex-1 mb-2 sm:mb-0 sm:mr-4 input`}
      />
      <button
        className="bg-gray-900 hover:bg-blue-400 text-white rounded-full px-4 py-1.5 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
        type="submit"
      >
        Poster
      </button>
    </form>
  )
}
