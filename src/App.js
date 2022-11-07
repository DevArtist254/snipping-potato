import "./App.css"
import {Icon} from "@iconify/react"
import musicCover from "./assests/Alan-wa/cover.jpg"
import song from "./assests/Alan-wa/Faded.mp3"

function App() {
 return (
  <div>
   <div>
    <div>
     <h1>0:00</h1>
     <div className="song-cover">
      <img className="image-cover" src={musicCover} alt="cover" />
      <div className="dot"></div>
      <div className="cic-dot"></div>
     </div>
    </div>
    <div>
     <h1>ALAN WALKER</h1>
     <h2>FADED</h2>
     <h3>ESSENTIALS</h3>
    </div>
   </div>
   <audio src={song} />
   <div>
    <div></div>
   </div>
   <div>
    <Icon
     icon="material-symbols:next-plan-outline-rounded"
     width="100"
     height="100"
     hFlip={true}
    />
    <Icon icon="gg:play-pause-o" width="100" height="100" />
    <Icon icon="gg:play-button-o" width="100" height="100" />
    <Icon
     icon="material-symbols:next-plan-outline-rounded"
     width="100"
     height="100"
    />
   </div>
  </div>
 )
}

export default App
