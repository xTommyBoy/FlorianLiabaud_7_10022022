export default async function createUser(email, displayName, password) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/users`,
    {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        displayName: displayName,
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
