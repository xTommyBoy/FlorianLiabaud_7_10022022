export default async function fetcher(url) {
  console.log(url)

  const response = await fetch(url, {
    credentials: 'include',
  })

  if (!response.ok) {
    const errorDetails = await response.json()
    throw new Error(
      `${response.status} ${response.statusText} (${response.type}) : ${errorDetails.message}`
    )
  }

  const json = await response.json()
  return json
}
