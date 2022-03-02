export default async function createComment(postId, comment) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/comments`,
    {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        postId: postId,
        comment: comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(
      `${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`
    )
  }

  return response.json()
}
