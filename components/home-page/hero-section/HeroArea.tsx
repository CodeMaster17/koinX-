"use client";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

import { annualIncomeData, country, financialYearData } from "@/constants";
import { calculateTax } from "@/utils/calculations";

const HeroArea: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investmentType, setInvestmentType] = useState("short");
  const [annualIncome, setAnnualIncome] = useState(
    annualIncomeData[1].incomeRange
  );
  const [financialYear, setFinancialYear] = useState(financialYearData[0].year);

  const [discount, setDiscount] = useState(0);
  const [capitalGains, setCapitalGains] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxRate, setTaxRate] = useState(0)

  
  function calculationCall() {
    try {
        let { taxRate, netCapitalGains, discount, capitalGainsAmount }: any = calculateTax({
            purchasePrice,
            salesPrice,
            expenses,
            investmentType,
            annualIncome,
            financialYear,
        });

        console.log("capitalGainsAmount : ", capitalGainsAmount);

        // Check for capitalGains instead of capitalGainsAmount
        if (!capitalGainsAmount) {
            setCapitalGains(0);
        } else {
            setCapitalGains(capitalGainsAmount);
        }

        if (!netCapitalGains) {
          setNetCapitalGains(0);
        } else {
          setNetCapitalGains(netCapitalGains);
        }

        setTaxRate(taxRate);

        if (!discount) {
            setDiscount(0);
        } else {
            setDiscount(discount);
        }



    } catch (error) {
        console.log("Error : ", error);
    }
}

  useEffect(() => {
    calculationCall();
  }, [
    purchasePrice,
    salesPrice,
    expenses,
    investmentType,
    annualIncome,
    financialYear,
    taxRate
  ]);

  return (
    <div className="mt-4 w-full lg:w-3/4 ">
      <div className=" mx-auto w-[95%] lg:mx-0 lg:p-8 rounded-md border-[1px]  p-2">
        <div className=" flex w-full items-center justify-center">
          <p className="text-center  font-inter text-2xl font-bold leading-9">
            Free Crypto Tax Calculator Australia
          </p>
        </div>

        <div className="mt-4 w-full">
          <div className="flex w-full justify-between gap-2 border-b-[1px] pb-4">
            <div className="flex w-full  flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 border-2 "> 
              <label htmlFor="financial-year" className="text-sm">
                Financial Year
              </label>

              <Listbox value={financialYear} onChange={setFinancialYear}>
                <div className="relative mt-1 lg:w-full">
                  <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-300">
                    <span className=" w-full  text-base ">{financialYear}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      {/* <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {financialYearData.map((item, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none bg-white-100 py-2 pl-10 pr-4 bg-white ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={item.year}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item.year}
                            </span>
                            {selected ? (
                              <span className="absolute left-0 flex items-center pl-3 text-amber-600">
                                {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            <div className="flex w-full  flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 border-2  ">
              <label htmlFor="financial-year" className="text-sm">
                Country
              </label>
              <Listbox value={financialYear} onChange={setFinancialYear}>
                <div className="relative mt-1 lg:w-full">
                  <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left border-2 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-300">
                    <span className=" w-full  text-base ">{financialYear}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      {/* <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {country.map((item, personIdx) => (
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
                              <span className="absolute left-0 flex items-center pl-3 text-amber-600">
                                {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
          </div>
            
             <div className="lg:w-full lg:flex gap-4"> 
            {/* purchase price */}
          <div className="mt-4 w-full">
            <label
              htmlFor="purchase-price"
              className="font-inter text-sm font-normal leading-6"
            >
              Enter the purchase price of Crypto
            </label>
            <input
              type="number"
              className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm"
              placeholder="Purchase price"
              value={purchasePrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPurchasePrice(parseInt(e.target.value))
              }
            />
          </div>

          {/* sales price */}
          <div className="mt-4 w-full">
            <label
              htmlFor="sale-price"
              className="font-inter text-sm font-normal leading-6"
            >
              Enter the sale price of Crypto
            </label>
            <input
              type="number"
              className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm"
              placeholder="Sales price"
              value={salesPrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSalesPrice(parseInt(e.target.value))
              }
            />
          </div>

            </div>







            <div className="lg:w-full lg:flex gap-4"> 

          {/* expenses */}
          <div className="mt-4 w-full">
            <label
              htmlFor="Expenses"
              className="font-inter text-sm font-normal leading-6"
            >
              Enter your Expenses
            </label>
            <input
              type="number"
              className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm"
              placeholder="expenses"
              value={expenses}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setExpenses(parseInt(e.target.value))
              }
            />
          </div>

          {/* investment type */}
          <div className="mt-4 w-full">
            <label
              htmlFor="purchase-price"
              className="font-inter text-sm font-normal leading-6"
            >
              Enter the purchase price of Crypto
            </label>
            <div className=" w-full flex justify-between items-center gap-2">
              <div className="w-full">
                <button
                  className="w-full py-[17px] px-[12px] border-2 rounded-sm text-base flex justify-start"
                  onClick={() => setInvestmentType("short")}
                >
                  Short Term
                </button>
                <p> 12months </p>
              </div>
              <div className="w-full">
                <button
                  className="w-full py-[17px] px-[12px] border-2 rounded-sm text-base flex justify-start"
                  onClick={() => setInvestmentType("long")}
                >
                  Long Term
                </button>
                <p> 12months </p>
              </div>
            </div>
          </div>
          </div>
          <div className="mt-4 w-full lg:flex lg:gap-2">
            <div className="lg:w-full">

            <label
              htmlFor="purchase-price"
              className="font-inter text-sm font-normal leading-6"
              >
              Select Your Annual Income
            </label>
             
            <Listbox value={annualIncome} onChange={setAnnualIncome}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default  bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-white-300">
                  <span className=" w-full  text-base ">{annualIncome}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    {/* <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> */}
                  </span>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {annualIncomeData.map((item, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none bg-white-100 py-2 pl-10 pr-4 bg-white ${
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
                            <span className="absolute left-0 flex items-center pl-3 text-amber-600">
                              {/* <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            </div>
            <div className="lg:w-full lg:flex lg:justify-left lg:items-center">
            <p className="text-xs mt-2 font-normal ">
              Tax Rate : $5.902 + 32.5% of excess over $45,001{" "}
            </p>
            </div>
          </div>

          {/* capital  gains amount */}
          <div className="lg:w-full lg:flex gap-4"> 
          {investmentType === "long" ? (
            <div className="mt-4 w-full">
              <label
                htmlFor="Expenses"
                className="font-inter text-sm font-normal leading-6"
              >
                Capital gains amount
              </label>
              <div className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm">
                <p> Capital Gains : {capitalGains}</p>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* discount for long term gains */}

          {investmentType === "long" ? (
            <div className="mt-4 w-full">
              <label
                htmlFor="Expenses"
                className="font-inter text-sm font-normal leading-6"
              >
                Discount for long term gains
              </label>
              <div className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm">
                <p> Discount : {discount}</p>
              </div>
            </div>
          ) : (
            ""
            )}
            </div>

          {/* final output */}
        
          <div className="w-full mt-4 flex justify-center items-center gap-4 flex-col lg:flex-row">
            <div className="flex flex-col justify-center items-center p-4 w-4/5 lg:w-full bg-[#EBF9F4] rounded-sm">
              <p className="text-center">Net Capital gains tax amount</p>
              <p>{netCapitalGains}</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 w-4/5 lg:w-full bg-[#EBF2FF] rounded-sm">
              <p className="text-center">The tax you need to pay</p>
              <p>Tax Rate : {taxRate}</p>
            </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
