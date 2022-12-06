import {useState} from "react"
import {Icon} from "@iconify/react"

function PlayBtn({src}) {
 const [act, setAct] = useState(true)

 function playBtn() {
  setAct(!act)
  if (act) {
   //action by the user is true play song
   src.play()
  } else {
   //action by the user is false pause song
   src.pause()
  }

  console.log(src.paused)
 }

 return (
  <div>
   <Icon
    icon={act ? `gg:play-button-o` : `gg:play-pause-o`}
    width="100"
    height="100"
    onClick={playBtn}
   />
  </div>
 )
}

export default PlayBtn
