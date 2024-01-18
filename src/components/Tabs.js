import React from 'react'
import './tabs.css'
import CancelIcon from '@mui/icons-material/Cancel';


const Tabs = () => {
    return (
        <div className=''>
            <div className='tabsMain'>
                <div className='tab1'>
                    <h5>All leads</h5>
                    <CancelIcon className='close_button' style={{ fontSize: 18 }}/>
                </div>
                <div className='tab2 '>
                    <h5>All new lead</h5>
                    <CancelIcon className='close_button' style={{ fontSize: 18 }} />
                </div>
                <div className='tab3'>
                    <h5>Edit lead - Aag</h5>
                    <CancelIcon className='close_button' style={{ fontSize: 18 }} />
                </div>
            </div>
        </div>
    )
}

export default Tabs