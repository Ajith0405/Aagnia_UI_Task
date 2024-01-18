import React from 'react'
import './subNavbar.css'
import leads from '../assets/journal-bookmark-fill.svg'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const SubNavbar = () => {
    return (
        <div className='container-fluid'>
            <div className='subNabarMain row' style={{ background: '#365486' }}>
                <div className='d-flex leadMain active col-12 col-md-2 col-lg-2'>
                    <div className='leadsIcon'>
                        <img src={leads} height={'30px'} width={'30px'} alt="Leads" style={{color:'white'}} />
                    </div>
                    <div className='lead_content'>
                        <h5 className='leadHead'>Leads</h5>
                        <p className='leadPara'>12 leads are pending</p>
                    </div>
                </div>
                <div className='d-flex accountsMain col-12 col-md-2 col-lg-2 '>
                    <div className='accountsIcon'>
                        <BusinessOutlinedIcon height={'30px'} width={'30px'} alt="Leads" style={{color:'white'}} />
                    </div>
                    <div className='accounts_content'>
                        <h5 className='accountsHead'>Accounts</h5>
                        <p className='accountsPara'>10 active accounts</p>
                    </div>
                </div>
                <div className='d-flex contactsMain col-12 col-md-2 col-lg-2 '>
                    <div className='conatctsIcon'>
                        <ContactsIcon height={'30px'} width={'30px'} alt="Leads" style={{color:'white'}}  />
                    </div>
                    <div className='contacts_content'>
                        <h5 className='contactsHead'>Contacts</h5>
                        <p className='contactsPara'>10 active users</p>
                    </div>
                </div>
                <div className='d-flex tasksMain col-12 col-md-2 col-lg-2 '>
                    <div className='tasksIcon'>
                        <AccessTimeFilledIcon height={'30px'} width={'30px'} alt="Leads" style={{color:'white'}} />
                    </div>
                    <div className='tasks_content'>
                        <h5 className='tasksHead'>Tasks</h5>
                        <p className='tasksPara'>25 tasks are pending</p>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default SubNavbar