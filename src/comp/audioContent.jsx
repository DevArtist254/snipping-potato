import React from "react"
import musicCover from "../assests/Alan-wa/cover.jpg"

function AudioContent({song}) {
 console.log(song.paused)
 return (
  <div className="album-content">
   <h1>0:00</h1>
   <div className="song-cover">
    {/* Use the paused fn to check whether it's paused or not n order to animate */}
    <img
     className={song.paused ? `image-cover` : `spin-the-disk image-cover`}
     src={musicCover}
     alt="cover"
    />
    <div className="dot"></div>
    <div className="cic-dot"></div>
   </div>
  </div>
 )
}

export default AudioContent
