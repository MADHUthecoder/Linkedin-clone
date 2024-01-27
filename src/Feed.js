import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@mui/icons-material/Create"
import InputOption from './InputOption'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import ImageIcon from '@mui/icons-material/Image'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import { db } from 'firebase'
import firebase from "firebase"

function Feed() {
  const [input, setInput]= useState('');
  const [posts, setPosts] =useState([]);

  useEffect(() => { db.collection("posts").onSnapshot(snapshot =>(
    setPosts(snapshot.docs.map(doc =>(
      {
        id:doc.id,
        data: doc.data(),
      }
    )))
  )) },[]);

  const sendPost = (e) =>{
    e.preventDefault();

    db.collection('posts').add({
      name: 'Madhu Varsha',
      description: 'this is a test',
      message: input,
      photoUrl:'',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed_inputOptions'>
              <InputOption title='Photo' Icon={ImageIcon} color="#70B5F9" />
              <InputOption title='Video' Icon={SubscriptionsIcon} color="#E7A33E" />
              <InputOption title='Event' Icon={EventNoteIcon} color="#C0CBCD" />
              <InputOption title='Write article' Icon={CalendarViewDayIcon} color="#7FC15E" />
            </div>
        </div>
        {posts.map((post)=>(
          <Post />
        ))}
        <Post name='Madhu Varsha' description='This is a test' message='Wow! This works awesome'/>
    </div>
  )
}

export default Feed