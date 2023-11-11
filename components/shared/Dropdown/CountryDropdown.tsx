import { countryData } from '@/constants'
import { Listbox } from '@headlessui/react'
import React from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
interface DropdownProps {
    country:string,
    setCountry:(financialYear:string)=>void
  }

const CountryDropdown = ({country, setCountry}:DropdownProps) => {
  return (
    <>
      <label htmlFor="financial-year" className="text-sm">
                Country
              </label>
    <Listbox value={country} onChange={setCountry}>
    <div className="relative mt-1 lg:w-full bg-white">
      <Listbox.Button className="relative w-full cursor-default  bg-white py-4 rounded-sm pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-300">
        <span className=" w-full  text-base ">{country}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
    className="h-5 w-5 text-gray-400"
    aria-hidden="true"
  />
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {countryData.map((item, personIdx) => (
          <Listbox.Option
            key={personIdx}
            className={({ active }) =>
              `relative cursor-default select-none bg-white-100 py-2 pl-10 pr-4 bg-white ${
                active
                  ? "bg-amber-100 text-amber-900"
                  : "text-gray-900"
              }`
            }
            value={item.value}
          >
            {({ selected }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {item.name}
                </span>
                {selected ? (
                  <span className="absolute top-2 left-0 flex items-center pl-3 text-amber-600">
                    <CheckIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                ) : null}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
  </>
  )
}

export default CountryDropdown