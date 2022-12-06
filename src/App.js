import "./App.css"
import song from "./assests/Alan-wa/Faded.mp3"
import Controls from "./comp/controls"
import AudioContent from "./comp/audioContent"
import AudioInfo from "./comp/audioInfo"
import Progress from "./comp/progress"

function App() {
 const audio = new Audio(song)
 return (
  <div>
   <div className="album">
    <AudioContent song={audio} />
    <AudioInfo />
   </div>
   <Progress />
   <Controls song={audio} />
  </div>
 )
}

export default App
