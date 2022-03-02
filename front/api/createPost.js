export default async function createPost(title, gifUrl) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/post`,
    {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        title,
        imageUrl: gifUrl,
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
