import { annualIncomeData } from '@/constants'
import { Listbox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface DropdownProps{
    annualIncome:string,
    setAnnualIncome:(financialYear:string)=>void
}

const AnnualIncomeDropdown = ({annualIncome,setAnnualIncome}:DropdownProps) => {
  return (
    <>
    
    <label
              htmlFor="purchase-price"
              className="font-inter text-sm font-normal leading-6"
              >
              Select Your Annual Income
            </label>
    <Listbox value={annualIncome} onChange={setAnnualIncome}>
    <div className="relative mt-1">
      <Listbox.Button className="relative w-full cursor-default rounded-sm  bg-white py-4 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-300">
        <span className=" w-full  text-base ">{annualIncome}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
      className="h-5 w-5 text-gray-400"
      aria-hidden="true"
    />
        </span>
      </Listbox.Button>

      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {annualIncomeData.map((item, personIdx) => (
          <Listbox.Option
            key={personIdx}
            className={({ active }) =>
              `relative cursor-default select-none bg-white-100 py-4 pl-10 pr-4 bg-white ${
                active
                  ? "bg-amber-100 text-amber-900"
                  : "text-gray-900"
              }`
            }
            value={item.incomeRange}
          >
            {({ selected }) => (
              <>
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {item.incomeRange}
                </span>
                {selected ? (
                  <span className="absolute left-0 top-0 flex items-center pl-3 text-amber-600">
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

export default AnnualIncomeDropdown