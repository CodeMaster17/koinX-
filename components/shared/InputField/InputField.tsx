import React from 'react'

const InputField = ({ type, placeholder, htmlFor, onChangeHandler, value, labelText }) => {
    return (

        <>
        <div className="mt-4 w-full">
         <label
                htmlFor={htmlFor}
                className="font-inter text-sm font-normal leading-6"
              >
                {labelText}
              </label>
            <input className="mt-2 bg-white-300 px-4 py-[17px] w-full rounded-sm" type={type} placeholder={placeholder} value={value}
    onChange = { onChangeHandler }
/>    
</div>
    </>
    )

}

export default InputField
/*
   <InputField type={"number"} htmlFor={"sale-price"} placeholder={"Sales price"} value={salesPrice} onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSalesPrice(parseInt(e.target.value)} labelText={"Enter the sale price of Crypto"} />
*/