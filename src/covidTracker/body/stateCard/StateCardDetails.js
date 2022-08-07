import React, { memo, useState } from 'react'
import './stateCard.css'
import StateDelta from './StateDelta'
import StateDelta7 from './StateDelta7'
import StateTotal from './StateTotal'

const StateCardDetails = ({ value: { total, delta, delta7 }, district: { value: districtValue = false, data: districtData = {} }, date: { value: dateValue = false, data: dateData = {}  } }) => {

    // * state
    const [carousel, setCarousel] = useState(0)

    // * carousel
    const changeNextCarousel = () => setCarousel(carousel === 2 ? 0 : carousel+1)
    const changePreviousCarousel = () => setCarousel(carousel === 0 ? 2 : carousel-1)

    return (
        <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-icon carousel-button' onClick={e => changePreviousCarousel()}>{'<'}</button>
            {
                carousel === 0 ? 
                <StateTotal details={districtValue ? districtData?.value?.total ?? {} : (dateValue ? dateData?.value?.total : total)} /> : 
                carousel === 1 ? 
                <StateDelta details={districtValue ? districtData?.value?.delta ?? {} : (dateValue ? dateData?.value?.delta : delta)} /> : 
                <StateDelta7 details={districtValue ? districtData?.value?.delta7 ?? {} : (dateValue ? dateData?.value?.delta7 : delta7)} />
            }
            <button type='button' className='btn btn-icon carousel-button' onClick={e => changeNextCarousel()}>{'>'}</button>
        </div>
    )
}

export default memo(StateCardDetails)