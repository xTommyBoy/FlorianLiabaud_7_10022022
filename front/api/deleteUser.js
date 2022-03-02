export default async function deleteUser(userId, password) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users/${userId}`,
    {
      method: 'DELETE',
      credentials: 'include',
      body: JSON.stringify({
        password: password,
      }),
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
