import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [countPosts, setCountPosts] = useState(0);


  useEffect(() => {
    const fetchPosts = () => {
      getDocs(collection(db, "posts")).then((querySnapshot) => {
        const newData: any = querySnapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setPosts(newData);
      });
    };
    fetchPosts();
  }, [countPosts]);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: "Madhu Varsha",
      description: "Full Stack dev",
      message: input,
      photoUrl: "",
    });
    setCountPosts(countPosts + 1);
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption
            title="Media"
            className="inputOption-title"
            Icon={ImageIcon}
            color="#70B5F9"
          />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c37d16" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
