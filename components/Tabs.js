import { Tab } from '@headlessui/react'
import Login from '/components/Login'
import Signup from '/components/Signup'
import classNames from '/utils/classNames'

export default function Example() {
  const tabNames = ['Se connecter', 'Créer un compte']

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="">
          {tabNames.map((name, index) => (
            <Tab
              key={name}
              className={({ selected }) =>
                classNames(
                  'w-full py-4 text-sm font-bold rounded-lg',
                  selected
                    ? 'bg-gray-900 shadow-sm text-white'
                    : 'text-gray-500  hover:text-black transition duration-200 ease-in-out',
                  index === 0 ? 'rounded-r-lg' : 'rounded-l-lg'
                )
              }
            >
              {name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Login />
          </Tab.Panel>
          <Tab.Panel>
            <Signup />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
