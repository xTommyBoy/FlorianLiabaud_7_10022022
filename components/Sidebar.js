import Link from 'next/link'

function Sidebar({ active }) {
  return (
    <div className="hidden raw1:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="space-y-5 mt-48 raw2:self-end self-center ">
        <Link href="/feed" passHref>
          <a className="hidden sm:flex items-center hover:text-[#1d9bf0] transition duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 flex ml-2 xl:justify-start text-xl space-x-3 hoverAnimation xl:h-14 ${
                active && 'font-bold'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden xl:inline text-[20px] ">Accueil</span>
          </a>
        </Link>

        <Link href="/profil" passHref>
          <a className="hidden sm:flex items-center hover:text-[#1d9bf0] transition duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 flex ml-2 xl:justify-start text-xl space-x-3 hoverAnimation xl:h-14 ${
                active && 'font-bold'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="hidden xl:inline text-[20px] ">Profil</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
