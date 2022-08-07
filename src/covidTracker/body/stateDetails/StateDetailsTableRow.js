import React from 'react'

const StateDetailsTableRow = ({ data: { name = '', value: { total = {}, delta = {}, delta7 = {} } } }) => {
    return (
        <tr>
            <td className='text-center align-middle'><b>{name ?? ''}</b></td>
            <td className='text-center align-middle'>{total.confirmed ?? 0}</td>
            <td className='text-center align-middle'>{total.recovered ?? 0}</td>
            <td className='text-center align-middle'>{total.deceased ?? 0}</td>
            <td className='text-center align-middle'>
                <div>
                    <div>Confirmed - {delta?.confirmed ?? 0}</div>
                    <div>Recovered - {delta?.recovered ?? 0}</div>
                    <div>Deceased - {delta?.deceased ?? 0}</div>
                </div>
            </td>
            <td className='text-center align-middle'>
                <div>
                    <div>Confirmed - {delta7?.confirmed ?? 0}</div>
                    <div>Recovered - {delta7?.recovered ?? 0}</div>
                    <div>Deceased - {delta7?.deceased ?? 0}</div>
                </div>
            </td>
        </tr>
    )
}

export default StateDetailsTableRow