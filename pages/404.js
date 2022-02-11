import Link from 'next/link'
import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full mt-60 max-w-3xl sm:ml-[73px] xl:ml-[370px]">
      <h1 className="text-3xl font-bold ">404 Not found</h1>
      <p className="text-gray-600 text-center m-4">
        La page que vous recherchez n'a pas été trouvée ou n'existe pas.
      </p>
      <Link href="/feed">
        <button
          className="flex justify-center items-center px-4 py-2 font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-sm cursor-pointer bg-gray-900 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          type="submit"
        >
          Retourner à l'accueil
          <ArrowSmRightIcon className="h-4 ml-1" />
        </button>
      </Link>
    </div>
  )
}
