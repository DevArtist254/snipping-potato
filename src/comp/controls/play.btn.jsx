import {useState} from "react"
import {Icon} from "@iconify/react"

function PlayBtn() {
 const [act, setAct] = useState(true)

 function playBtn() {
  setAct(!act)
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
