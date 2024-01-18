import React from 'react'
import './allLeadsTab.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Avatar } from '@mui/material';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const AllLeadsTab = () => {

    
    const leads = [
        {
            id: 1,
            img_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
            comp_details: "Try jobs private limited",
            pro_tag: "CRM",
            Cont_person: "Ramcharan",
            status: "New",
            status_indicate:'blue',
            foll_date: "20 Jan 2022",
        },
        {
            id: 2,
            img_url: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Aagnia Technology private limited",
            pro_tag: "Ecommerce",
            Cont_person: "Karthikeyan",
            status: "Hot",
            status_indicate:'red',
            foll_date: "25 Jan 2022",
        },
        {
            id: 3,
            img_url: 'https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Try jobs private limited",
            pro_tag: "CRM",
            Cont_person: "Ramcharan",
            status: "Lost",
            status_indicate:'gray',
            foll_date: "20 Jan 2022",
        },
        {
            id: 4,
            img_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Aagnia Technology private limited",
            pro_tag: "Ecommerce",
            Cont_person: "Karthikeyan",
            status: "Won",
            status_indicate:'lightGreen',
            foll_date: "20 Jan 2022",
        },
        {
            id: 5,
            img_url: 'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Try jobs private limited",
            pro_tag: "CRM",
            Cont_person: "Ramcharan",
            status: "New",
            status_indicate:'blue',
            foll_date: "20 Jan 2022",
        },
        {
            id: 6,
            img_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Aagnia Technology private limited",
            pro_tag: "Ecommerce",
            Cont_person: "Karthikeyan",
            status: "Hot",
            status_indicate:'Red',
            foll_date: "20 Jan 2022",
        },
        {
            id: 7,
            img_url: 'https://images.unsplash.com/photo-1503467913725-8484b65b0715?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Try jobs private limited",
            pro_tag: "Ecommerce",
            Cont_person: "Karthikeyan",
            status: "Lost",
            status_indicate:'gray',
            foll_date: "20 Jan 2022",
        },
        {
            id: 8,
            img_url: 'https://images.unsplash.com/photo-1636936291087-2972edf08f14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comp_details: "Aagnia Technology private limited",
            pro_tag: "Ecommerce",
            Cont_person: "Karthikeyan",
            status: "Won",
            status_indicate:'lightGreen',
            foll_date: "20 Jan 2022",
        },
    ]

    return (
        <div style={{ background: '#ffff' }}>
            <div className='px-3 pt-3 pb-3'>
                {/* Leads Navbar Section */}
                <header className='header row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <h4>All Leads</h4>
                        <p>from 20 september to 20 December 2021</p>
                    </div>
                    <div className='rightMenuHead col-12 col-md-6 col-lg-6'>
                        <div className='rightMenu row'>
                            <div className='search_input col-12 col-lg-4'>
                                <input type="text" placeholder='Search a lead ..' />
                                <SearchIcon className='search_button' />
                            </div>
                            <div className=' col-12 col-lg-3'>
                                <select class="form-select">
                                    <option>All leads</option>
                                    <option>New leads</option>
                                </select>
                            </div>
                            <div className=' col-6 col-lg-1 '>
                                <FilterListIcon className='filterIcon' style={{ fontSize: 35 }} />
                            </div>
                            <div className='col-6 col-lg-1'>
                                <ShareIcon className='searchIcon' style={{ fontSize: 30 }} />
                            </div>
                            <div className='col-12 col-lg-3'>
                                <button className='addNewButton'><AddCircleIcon /> Add new</button>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Leads Tabel section */}
                <div className='row'>
                    <table className='col-12'>
                        {/* Leads Tabel Heading Section */}
                        <thead className='tableHead'>
                            <tr className='row tableHeadRow' style={{ backgroundColor: '#F1EAFF' }}>
                                <th className='col-3' style={{ paddingRight: '93px' }}>Company details</th>
                                <th className='col-1'>Project tags</th>
                                <th className='col-2'>Contact person</th>
                                <th className='col-2'>Status</th>
                                <th className='col-2'>Follow up date</th>
                                <th className='col-2'>Actions</th>
                            </tr>
                        </thead>
                        {/* Leads Tabel Body Section */}
                        <tbody>
                            {
                                leads ? (
                                    leads.map((lead) => {
                                        return(
                                        <div className='row all_leads' key={lead.id}>
                                            <div className='col-12'>
                                                <tr className='row leads_row'>
                                                    <td className='col-3 company_det'>
                                                        <div>
                                                            <Avatar src={lead.img_url} />
                                                        </div>
                                                        <div className='text-start ps-4'>
                                                            <h6>{lead.comp_details}</h6>
                                                            <p>Location : Coimbatore, Tamilnadu, Created : 20 Dec 2021</p>
                                                        </div>
                                                    </td>
                                                    <td className='col-1 project_tag'>{lead.pro_tag}</td>
                                                    <td className='col-2'>
                                                        <div className='contact_person'>
                                                            <h6>{lead.Cont_person}</h6>
                                                            <p>Contact : 9800465478</p>
                                                        </div>
                                                    </td>
                                                    <td className='col-2'>
                                                        <div>
                                                            <div className='status_top'>
                                                                <div className='statusDot' style={{ backgroundColor:lead.status_indicate }}></div>
                                                                <h6 className='pt-1'>{lead.status}</h6>
                                                            </div>
                                                            <p className='ps-3'>status key word</p>
                                                        </div>
                                                    </td>
                                                    <td className='col-2'>
                                                        <div className='follow_date'>
                                                            <h6>{lead.foll_date}</h6>
                                                            <p style={{ paddingRight: '39px' }}>4 days left</p>
                                                        </div>
                                                    </td>
                                                    <td className='col-2 actions_main'>
                                                        <div className='actions '>
                                                            <WifiCalling3Icon className='actionIcons' style={{ fontSize: 30 }} />
                                                            <EventNoteIcon className='actionIcons ' style={{ fontSize: 30 }} />
                                                            <MoreVertIcon className='actionIcons' style={{ fontSize: 30 }} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </div>
                                        </div>
                                        )
                                    })
                                ) : null
                            }
                            <div className='load_more'>
                                <button className='load_more_button'>Load more</button>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllLeadsTab