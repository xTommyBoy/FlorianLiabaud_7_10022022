import { createContext, useState, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Sidebar from '/components/Sidebar'
import { useCookies } from 'react-cookie'
import Navbar from '/components/Navbar'

const ConnectedUserContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cookies] = useCookies(['connectedUser'])

  const [connectedUser, setConnectedUser] = useState(
    !cookies.connectedUser ? null : cookies.connectedUser
  )

  return (
    <div>
      <Head>
        <title>Groupomania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectedUserContext.Provider
        value={{ connectedUser, setConnectedUser }}
      >
        <Navbar />
        <Sidebar />
        <div id="mycontainer" className="min-h-screen mx-auto max-w-[1600px]">
          <Component id="mycontainer" {...pageProps} />
        </div>
      </ConnectedUserContext.Provider>
    </div>
  )
}

export function useConnectedUserContext() {
  return useContext(ConnectedUserContext)
}

export default MyApp
