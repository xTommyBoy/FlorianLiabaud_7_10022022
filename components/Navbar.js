import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Popover, Menu, Transition } from '@headlessui/react'
import { useConnectedUserContext } from '/pages/_app'
import groupomaniaLogo from '/public/logo/groupomania.svg'
import { useCookies } from 'react-cookie'
import disconnectUser from '/api/disconnectUser'
import classNames from '/utils/classNames'

export default function Header() {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()
  const [cookies, setCookie, removeCookie] = useCookies(['connectedUser'])
  const router = useRouter()

  const profileNavigation = [
    { name: 'Profil', href: '/profil' },
    {
      name: 'Se déconnecter',
      onClick: () => {
        try {
          disconnectUser()
          removeCookie('connectedUser')
          setConnectedUser(null)
          router.push('/')
        } catch {
          alert('error during logout')
        }
      },
    },
  ]

  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? 'lg:static lg:overflow-y-visible py-2' : '',
          'bg-white lg:static lg:overflow-y-visible py-2'
        )
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-3xl px-4 mx-auto sm:px-6">
            <div className="relative flex justify-between sm:justify-evenly">
              <div className="flex">
                <div className="flex mx-auto">
                  <Link href={connectedUser ? '/feed' : '/'}>
                    <a className="flex items-center">
                      <img
                        className="w-[200px] h-[100px]"
                        src="https://cdn.discordapp.com/attachments/908759277555048478/925400401983979570/icon-left-font-monochrome-black.svg"
                        alt="Logo Groupomania"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-center raw1:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden raw1:flex raw1:items-center raw1:justify-end">
                <div className="flex items-center">
                  {connectedUser && (
                    <ProfileMenu profileNavigation={profileNavigation} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <HeaderMobile
            profileNavigation={profileNavigation}
            connectedUser={connectedUser}
          />
        </>
      )}
    </Popover>
  )
}

function ProfileMenu({ profileNavigation }) {
  const { connectedUser, setConnectedUser } = useConnectedUserContext()

  return (
    <Menu as="div" className="">
      {({ open }) => (
        <>
          {profileNavigation.map((item) => {
            if (item.onClick) {
              return (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'flex justify-center w-full px-4 py-2 font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-sm cursor-pointer bg-gray-900 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2'
                      )}
                      onClick={item.onClick}
                    >
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              )
            }
          })}
        </>
      )}
    </Menu>
  )
}

function HeaderMobile({ profileNavigation }) {
  return (
    <Popover.Panel as="nav" className="raw1:hidden" aria-label="Global">
      <div className="pt-4 pb-3">
        <div className="max-w-3xl px-2 space-y-1 sm:px-4">
          {profileNavigation.map((item) => {
            if (item.onClick) {
              return (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="block w-full px-3 py-[6px] text-base font-medium text-left text-gray-500 rounded-md icon"
                >
                  {item.name}
                </button>
              )
            } else {
              return (
                <Link key={item.name} href={item.href}>
                  <a
                    key={item.name}
                    className="block w-full px-3 py-[6px] text-base font-medium text-gray-500 rounded-md icon"
                  >
                    {item.name}
                  </a>
                </Link>
              )
            }
          })}
        </div>
      </div>
    </Popover.Panel>
  )
}
