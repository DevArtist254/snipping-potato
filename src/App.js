import "./App.css"
import song from "./assests/Alan-wa/Faded.mp3"
import Controls from "./comp/controls"
import AudioContent from "./comp/audioContent"
import AudioInfo from "./comp/audioInfo"

function App() {
 return (
  <div>
   <div className="album">
    <AudioContent />
    <AudioInfo />
   </div>
   <audio src={song} />
   <div>
    <div></div>
   </div>
   <Controls />
  </div>
 )
}

export default App
