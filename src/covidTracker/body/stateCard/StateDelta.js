import React from 'react'

const StateDelta = ({ details }) => {
  return (
    <div className='text-center'>
      <div className='state-card-title'>Delta</div>
      
      <div className='d-flex justify-content-evenly'>
              <div>Tested</div>
              <div>:</div>
              <div>{details?.tested ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Vaccinated One</div>
              <div>:</div>
              <div>{details?.vaccinated1 ?? 0}</div>
            </div>
            <div className='d-flex justify-content-evenly'>
              <div>Vaccinated Two</div>
              <div>:</div>
              <div>{details?.vaccinated2 ?? 0}</div>
            </div>
    </div>
  )
}

export default StateDelta