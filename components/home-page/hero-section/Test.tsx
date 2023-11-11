'use client'
import React, { useState } from 'react'

const Test = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salesPrice, setSalesPrice] = useState(0);
  return (
    <div>
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
      {purchasePrice}
           
    </div>
  )
}

export default Test
