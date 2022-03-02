export default async function updateUser(
  email,
  displayName,
  profileImageUrl,
  password
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users`,
    {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        displayName: displayName,
        profileImageUrl: profileImageUrl === '' ? null : profileImageUrl,
        password: password,
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
