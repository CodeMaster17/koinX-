import React from 'react'

const Table = () => {
    return (
        <table className='border-[1px] border-gray-300 mt-4'>
            <thead className='border-[1px] border-gray-300'>
                <tr>
                    <th className="border-[1px] border-gray-300 p-4">Income</th>
                    <th className='p-4'>Tax Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-[1px] border-gray-300">
                    <td className='border-[1px] border-gray-300 p-4 text-center text-sm font-normal text-gray-200'>$0 - $18,200</td>
                    <td className='p-4 text-center text-sm font-normal text-gray-200'>0%</td>
                </tr>
                <tr className="border-[1px] border-gray-300">
                    <td className='border-[1px] border-gray-300 p-4'>$18,201 - $45,000</td>
                    <td className='p-4 text-center text-sm font-normal text-gray-200'>Nil + 19% of the excess over $18,200</td>
                </tr>
                <tr className="border-[1px] border-gray-300">
                    <td className='border-[1px] border-gray-300 p-4'>$45,001 - $120,000</td>
                    <td className='p-4 text-center text-sm font-normal text-gray-200'>$5,092 + 32.5% of the excess over $45,000</td>
                </tr>
                <tr className="border-[1px] border-gray-300">
                    <td className='border-[1px] border-gray-300 p-4'>$120,001 - $180,000</td>
                    <td className='p-4 text-center text-sm font-normal text-gray-200'>$29,467 + 37% of the excess over $120,000</td>
                </tr>
                <tr className="border-[1px] border-gray-300">
                    <td className='border-[1px] border-gray-300 p-4'>$180,001+</td>
                    <td className='p-4 text-center text-sm font-normal text-gray-200'>$51,667 + 45% of the excess over $180,000</td>
                </tr>
            </tbody>
        </table>

    )
}

export default Table