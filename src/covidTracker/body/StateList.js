import React, { memo } from 'react'
import Topbar from '../header/Topbar'
import StateCard from './stateCard/StateCard'

const StateList = ({ list }) => {

    const render = list?.map(({ name, value, districts, dates }, index) => <StateCard key={index} name={name} value={value} districts={districts} dates={dates} />)

    return (
        <div>
            <Topbar />
            <div>
                <div className='container-fluid row state-list'>
                    {
                        list?.length ? render : <h5 className='text-center mt-3'>Result not found</h5>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(StateList)