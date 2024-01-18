import React from 'react'
import './navbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import logo from '../assets/LogoAa.png'


const Navbar = () => {
    return (
        <div>
            <div className='container mt-3 mb-3'>
                <nav className='navbar_back d-flex justify-content-between'>
                    <div className='navbar_logo'>
                        <Avatar src={logo}/>
                    </div>
                    <div className='navbar_profile_notification'>
                        <div>
                            <div className='notification_border'>
                            <div className='redDot'></div>
                            <NotificationsIcon className='notificationIcon'/>
                            </div>
                        </div>
                        <div className='d-flex' >
                            <Avatar className='avatar_profile' src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww' />
                            <div className='profile_content'>
                                <h5 className='name'>Nithin josh</h5>
                                <p className='welcome'>Welcome</p>
                            </div>
                        </div>
                        <div className='navbar_setting'>
                            <SettingsIcon className='settingIcon' style={{color:'gray'}}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar