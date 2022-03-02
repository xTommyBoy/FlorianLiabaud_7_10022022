import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import createComment from '/api/createComment'
import { mutate } from 'swr'
import { useConnectedUserContext } from '/pages/_app'

export default function CommentInput({ currentPostId, commentsEndpoint, addComment,}) {
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
       const comment = await createComment(currentPostId, data.comment)
      setIsCommentPosting(false)
      addComment(comment.comment)

    } catch (error) {
      alert(error)
      setIsCommentPosting(false)
    }
  }

  const src = connectedUser?.profileImageUrl
  return (
    <form className="flex flex-grow mt-4" onSubmit={handleSubmit(onSubmit)}>
      {src && (
        <img
          src={src}
          alt="profile"
          className="h-24 w-24 rounded-full border-2 border-gray-900"
        />
      )}
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
