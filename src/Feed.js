import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'


function Feed() {

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    {/* <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button> */}
                    <input type='text' />
                    <button>Send</button>
                </form>
            </div>
            <div className='feed_inputOptions'>
              <InputOption title='Media' className='inputOption-title' Icon={ImageIcon} color="#70B5F9" />
              <InputOption title='Event' Icon={EventNoteIcon} color="#c37d16" />
              <InputOption title='Write article' Icon={CalendarViewDayIcon} color="#7FC15E" />
            </div>
        </div>
        {/* {posts.map((post)=>(
          <Post />
        ))} */}
        <Post name='Madhu Varsha' description='Full-Stack Dev' message='Wow! This works awesome'/>
        <Post name='Madhu Varsha' description='Full-Stack Dev' message='He is our post'/>
        <Post name='Madhu Varsha' description='Full-Stack Dev' message='Yet more to goo!!'/>
        <Post name='Madhu Varsha' description='Full-Stack Dev' message='Its working perfectly!'/>
    </div>
  )
}

export default Feed