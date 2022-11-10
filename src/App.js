import "./App.css"
import song from "./assests/Alan-wa/Faded.mp3"
import Controls from "./comp/controls"
import AudioContent from "./comp/audioContent"
import AudioInfo from "./comp/audioInfo"
import Progress from "./comp/progress"

function App() {
 return (
  <div>
   <div className="album">
    <AudioContent />
    <AudioInfo />
   </div>
   <audio src={song} />
   <Progress />
   <Controls />
  </div>
 )
}

export default App
