import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dateValue, searchValue, sortValue } from '../../store/actions/actions';
import store from '../../store/store';
import './topbar.css'

const Topbar = () => {
  const dispatch = useDispatch();

  // * store state
  const { sort: stateSort } = useSelector((state) => state?.covidTracker);

  // * effect
  useEffect(() => {
    return () => {
      const { covidTracker: { sort: sortText } } = store.getState()
      !sortText && setSort('')
    }
  }, [stateSort])
  

  // * search
  const [search, setSearch] = useState('')
  const onChange = e => {
    const value = e?.target?.value ?? null
    setSearch(value)
  }
  const checkForEnterKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const value = e?.target?.value ?? null
      setSearch(value)
      dispatch(searchValue(value))
    }
  }

  // * date
  const [date, setDate] = useState('')
  const onChangeDate = e => {
    const value = e?.target?.value ?? null
    setDate(value)
    dispatch(dateValue(value))
    dispatch(sortValue(''))
  }

  // * sort
  const [sort, setSort] = useState('')
  const sortChange = (e) => {
    const value = e?.target?.value ?? ''
    setSort(value)
    dispatch(sortValue(value))
  }

  return (
    <nav className="border-bottom d-flex header-bg justify-content-start navbar navbar-dark p-0 top-bar-class text-bg-light" >

      <div className="d-flex">
        <div className='form-label mt-2 mx-5' htmlFor='stateSearch'>State</div>
        <input type="search" placeholder="Search" className='form-control' id='stateSearch' value={search}
          onChange={e => onChange(e)} onKeyUp={e => checkForEnterKey(e)} name="search" />
      </div>

      <div className='mx-5 text-center'>
        <input type="date" placeholder="Date" className='form-control mt-3' id='dateSearch' value={date}
          onChange={e => onChangeDate(e)} name="date" min="2020-01-30" max="2021-10-31" />
        <span className='date-description'>FROM: 2020-01-30 - To: 2021-10-31</span>
        {/* FROM: 2020-01-30 - To: 2021-10-31 */}
      </div>

      <div className='text-center'>
              <select name="sortby" placeholder='Sort by' value={sort} className='form-control'
                onChange={e => sortChange(e)}>
                <option value=''>Sort by</option>
                <option value='stateAsc'>State Ascending</option>
                <option value='stateDesc'>State Ascending</option>
                <option value='confirmedAscending'>Confirmed Ascending</option>
                <option value='confirmedDescending'>Confirmed Descending</option>
                <option value='affectedAscending'>Affected Percentage Ascending</option>
                <option value='affectedDescending'>Affected Percentage Descending</option>
                <option value='vaccinatedAscending'>Vaccinated percentage Ascending</option>
                <option value='vaccinatedDescending'>Vaccinated percentage Descending</option>
              </select>
      </div>


    </nav>
  )
}

export default Topbar