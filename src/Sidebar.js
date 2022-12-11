import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
const user = useSelector(selectUser)


    const recentItem =(topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media-exp1.licdn.com/dms/image/C4D16AQHdR5QrmCBqpw/profile-displaybackgroundimage-shrink_350_1400/0/1652739030417?e=1674086400&v=beta&t=l5nad5hEymLBiuPz9E_AnbYjAXSGVTAi8ovUVQBPfTE" alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,500</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on Post</p>
            <p className='sidebar__statNumber'>2,300</p>
                </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}

        </div>
    </div>
  )
}

export default Sidebar