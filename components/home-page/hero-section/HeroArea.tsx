"use client";
import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

import { annualIncomeData, countryData, financialYearData } from "@/constants";
import { calculateTax } from "@/utils/calculations";
import FinancialYearDropdown from "@/components/shared/Dropdown/FinancialYearDropdown";
import CountryDropdown from "@/components/shared/Dropdown/CountryDropdown";
import AnnualIncomeDropdown from "@/components/shared/Dropdown/AnnualIncomeDropdown";
import Button from "@/components/shared/Button/Button";
import InputField from "@/components/shared/InputField/InputField";

const HeroArea: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [investmentType, setInvestmentType] = useState("short");
  const [annualIncome, setAnnualIncome] = useState(
    annualIncomeData[1].incomeRange
  );
  const [financialYear, setFinancialYear] = useState(financialYearData[0].value);
  const [country, setCountry] = useState(countryData[0].name);

  const [discount, setDiscount] = useState(0);
  const [capitalGains, setCapitalGains] = useState(0);
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxRate, setTaxRate] = useState(0)
  const [taxRateSentence, setRateSentence] = useState("Nil + 19% of the excess over $18,200")




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

      console.log("annualIncome : ", annualIncome);

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


      // setting tax rate sentence
      if (annualIncome === '$0 - $18,200') {
        setRateSentence("0%")
      } else if (annualIncome === '$18,201 - $45,000') {
        setRateSentence("Nil + 19% of the excess over $18,200")
      } else if (annualIncome === '$45,001 - $120,000') {
        setRateSentence("$5,092 + 32.5% of the excess over $45,000")
      } else if (annualIncome === '$120,001 - $180,000') {
        setRateSentence("$29,467 + 37% of the excess over $120,000")
      } else {
        setRateSentence("$51,667 + 45% of the excess over $180,000")
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
    taxRate,
    taxRateSentence
  ]);

  return (
    <div className="mt-4 w-full lg:w-3/4 ">
      <div className=" mx-auto w-[95%] lg:mx-0 lg:p-8 rounded-md  bg-white-100  p-2">
        <div className=" flex w-full items-center justify-center">
          <p className="text-center  font-inter text-2xl font-bold leading-9">
            Free Crypto Tax Calculator Australia
          </p>
        </div>

        <div className="mt-4 w-full">
          <div className="flex w-full justify-between gap-2 border-b-[1px] pb-4">
            <div className="flex w-full  flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8  ">
              <FinancialYearDropdown financialYear={financialYear} setFinancialYear={setFinancialYear} />
            </div>
            <div className="flex w-full  flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8  ">

              <CountryDropdown country={country} setCountry={setCountry} />
            </div>
          </div>
          <div className="lg:w-full lg:flex gap-4">
            {/* purchase price */}
            <InputField type={"number"} htmlFor={"purchase-price"} placeholder={"Purchase price"} value={purchasePrice} onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPurchasePrice(parseInt(e.target.value))
            }
              labelText={" Enter the purchase price of Crypto"}
            />



            {/* sales price */}
            <InputField type={"number"} htmlFor={"sale-price"} placeholder={"Sales price"} value={salesPrice} onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSalesPrice(parseInt(e.target.value))
            }
              labelText={"Enter the sale price of Crypto"}
            />
          </div>

          <div className="lg:w-full lg:flex gap-4">
            {/* expenses */}
            <InputField type={"number"} htmlFor={"expenses"} placeholder={"expenses"} value={expenses} onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExpenses(parseInt(e.target.value))} labelText={"Enter your expenses"} />
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
                  <Button
                    id="short"
                    text={`Short Term`}
                    onClickHandler={() => setInvestmentType("short")}
                    isActive={investmentType === 'short'}
                  />
                  <p>&lt; 12months</p>
                </div>
                <div className="w-full">
                  <Button
                    id="long"
                    text={"Long Term"}
                    onClickHandler={() => setInvestmentType("long")}
                    isActive={investmentType === 'long'}
                  />
                  <p>&gt; 12months</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full lg:flex lg:gap-2">
            <div className="lg:w-full">
              <AnnualIncomeDropdown annualIncome={annualIncome} setAnnualIncome={setAnnualIncome} />
            </div>
            <div className="lg:w-full lg:flex lg:justify-left lg:items-center">
              <p className="text-xs mt-2 font-normal ">
                Tax Rate :{taxRateSentence}
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
              <p className="font-bold text-lg font-inter leading-6 text-green"> &#36; {netCapitalGains}</p>
            </div>
            <div className="flex flex-col justify-center items-center p-4 w-4/5 lg:w-full bg-[#EBF2FF] rounded-sm">
              <p className="text-center ">The tax you need to pay</p>
              <p className="font-bold text-lg font-inter leading-6 text-darkBlue">&#36; {taxRate}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroArea;
