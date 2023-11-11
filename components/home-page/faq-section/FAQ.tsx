import Table from '@/components/shared/Table/Table'
import { faqDetails } from '@/constants'
import React from 'react'

const FAQ = () => {
    return (
        <div className="w-full  bg-white-100 mt-8 lg:flex lg:items-start lg:p-8">
            <div className="w-[90%]  lg:rounded-lg lg:border-[1px] border-gray-300 mx-auto  lg:p-8" >
                <h1 className="text-xl font-bold leading-5" >
                    Frequently Asked Questions
                </h1>
                {faqDetails.map((item) => {
                    return (
                        <div key={item.id} className="mt-4">

                            <p className="text-lg font-bold leading-6" >

                                {item.question}
                            </p>
                            <div className="text-base font-normal leading-6" >
                                {item.answer.map((item, index) => {
                                    return (
                                        <p key={index} className="text-base font-normal leading-6" >
                                            {item}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

                <Table />
                <br/>
                <p className="text-lg font-bold leading-6" >

                    Capital Gains Tax
                </p>
                <br/>
                <p className="text-base font-normal leading-6" >
                    Calculate your capital gains or losses on cryptocurrency transactions using this formula:

                </p>
                <br/>
                <p className="text-base font-bold leading-6" >
                    Capital Gain/Loss = Capital Proceeds - Cost Basis
                </p>
                <br/>
                <p className="text-base font-bold leading-6" >
                    Note: <br />
                    Capital Proceeds (sale value or any form of receipt) <br />
                    Cost Basis (costs incurred to acquire, hold, and dispose of the asset)
                </p>
                <br/>

                <p className="text-base font-normal leading-6" >
                    Your tax rate depends on whether you held the cryptocurrency for more than 12 months (long-term) or less (short-term). Long-term gains receive a 50% discount.

                    <br />
                    <br />

                    Calculate your Australian crypto taxes accurately and effortlessly with KoinX&apos;s free crypto tax calculator for Australia. It simplifies the process, ensuring compliance with the latest tax rates and regulations making crypto tax calculations easy and precise.

                </p>
            </div>


        </div>
    )
}

export default FAQ
