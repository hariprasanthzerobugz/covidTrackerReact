import React from 'react'

const StateTotal = ({ details }) => {
  return (
    <div className='text-center'>
      <div className='state-card-title'>Total</div>
      
            <div className='d-flex justify-content-evenly'>
              <div>Confirmed</div>
              <div>: {details?.confirmed ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Recovered</div>
              <div>: {details?.recovered ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Deceased</div>
              <div>: {details?.deceased ?? 0}</div>
            </div>

    </div>
  )
}

export default StateTotal