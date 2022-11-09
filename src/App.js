import "./App.css"
import {Icon} from "@iconify/react"
import musicCover from "./assests/Alan-wa/cover.jpg"
import song from "./assests/Alan-wa/Faded.mp3"

function App() {
 return (
  <div>
   <div className="album">
    <div className="album-content">
     <h1>0:00</h1>
     <div className="song-cover">
      <img className="image-cover" src={musicCover} alt="cover" />
      <div className="dot"></div>
      <div className="cic-dot"></div>
     </div>
    </div>
    <div className="album-info">
     <h1>ALAN WALKER</h1>
     <h2>FADED</h2>
     <h3>ESSENTIALS</h3>
    </div>
   </div>
   <audio src={song} />
   <div>
    <div></div>
   </div>
   <div className="controls">
    <Icon
     icon="material-symbols:next-plan-outline-rounded"
     width="80"
     height="80"
     hFlip={true}
    />
    {/* <Icon icon="gg:play-pause-o" width="100" height="100" /> */}
    <Icon icon="gg:play-button-o" width="100" height="100" />
    <Icon
     icon="material-symbols:next-plan-outline-rounded"
     width="80"
     height="80"
    />
   </div>
  </div>
 )
}

export default App
