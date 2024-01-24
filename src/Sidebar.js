import React from 'react'
import "./Siderbar.css"
import { Avatar } from '@mui/material'
import bgimage from "./images/bgimg.jpg"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
          <img src={bgimage} alt='bgimg' />
          <Avatar className='sidebar_avatar'/>
          <h2>Madhu Varsha</h2>
          <h4>madhuvarsha0608@gmail.com</h4>
        </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stats'>
          <p>Who viewed you</p>
          <p className='sidebar_statsNumber'>240</p>
        </div>
        <div className='sidebar_stats'>
          <p>Views on post</p>
          <p className='sidebar_statsNumber'>200</p>
        </div>
      </div>
      <div className='sidebar_buttom'>
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar