import React, { ChangeEventHandler } from 'react'
interface InputFieldProps {
  type: string;
  placeholder: string;
  htmlFor: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: number | string;
  labelText: string;
}


const InputField = ({ type, placeholder, htmlFor, onChangeHandler, value, labelText }: InputFieldProps) => {
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
          onChange={onChangeHandler}
        />
      </div>
    </>
  )

}

export default InputField
