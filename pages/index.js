import Image from 'next/image'
import Tabs from '/components/Tabs'
import Logo from '/public/logo/groupomania.svg'

export default function Home() {
  return (
    <div className="flex flex-1 bg-white">
      <div className="fixed inset-0 bg-white" />
      <div className="z-50 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <div className="py-16 px-8">
          <Image
            src={Logo}
            layout="intrinsic"
            alt="groupomania"
            width="350"
            height="56"
          />
        </div>
        <Tabs />
      </div>
    </div>
  )
}
