import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'
interface ButtonProps {
    id: string;
    text: string;
    onClickHandler: () => void;
    isActive: boolean;
  }
  

const Button = ({ id, text, onClickHandler, isActive }:ButtonProps) => {
    return (
        <button
        id={id}
        onClick={onClickHandler}
        className={`${
          isActive ?  "border-darkBlue text-darkBlue font-bold text-lg" : ''
        } w-full py-[17px] px-[12px] border-2 rounded-sm text-base flex justify-start`}
      >
        {text}
        {isActive && (
          <span className=" flex items-center pl-5 text-darkBlue">
            <CheckIcon className="h-8 w-8" aria-hidden="true" />
          </span>
        )}
      </button>
    )
}

export default Button