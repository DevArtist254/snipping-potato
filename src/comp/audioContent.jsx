import React from "react"
import musicCover from "../assests/Alan-wa/cover.jpg"

function AudioContent() {
 return (
  <div className="album-content">
   <h1>0:00</h1>
   <div className="song-cover">
    <img className="image-cover" src={musicCover} alt="cover" />
    <div className="dot"></div>
    <div className="cic-dot"></div>
   </div>
  </div>
 )
}

export default AudioContent
