import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import MainBody from './MainBody'
import Footer from './Footer'


function Home() {
    return (
        <div>
            <Navbar/>
            <SubNavbar/>
            <MainBody/>
            <Footer/>
        </div>
    )
}

export default Home