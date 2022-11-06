import "./App.css"
import {Icon} from "@iconify/react"
import musicCover from "./assests/Alan-wa/cover.jpg"
import song from "./assests/Alan-wa/Faded.mp3"

function App() {
 return (
  <div className="App">
   <h1>Alan walker</h1>
   <h2>Faded</h2>
   <img src={musicCover} alt="cover" />
   <audio src={song} controls />
   <div>
    <div>
     <div>0.00</div>
     <div>2.63</div>
    </div>
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
