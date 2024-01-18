import React from 'react'
import Tabs from './Tabs'
import AllLeadsTab from './AllLeadsTab'

const MainBody = () => {
  return (
    <div className='container-fluid vh-100 pt-3' style={{background:'#F1EAFF'}}>
        <Tabs/>
        <AllLeadsTab/>
    </div>
  )
}

export default MainBody