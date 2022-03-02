export default async function updatePost(title, gifUrl, userId, postId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/post`,
    {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        title: title,
        imageUrl: gifUrl,
        userId: userId,
        postId: postId,
      }),
      headers: {
        'Content-type': 'application/json',
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
