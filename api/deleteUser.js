export default async function deleteUser(userId) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users/${userId}`,
    {
      method: 'DELETE',
      credentials: 'include',
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
