import React from "react"
import {Icon} from "@iconify/react"
import PlayBtn from "./controls/play.btn"

function Controls() {
 return (
  <div className="controls">
   <Icon
    icon="material-symbols:next-plan-outline-rounded"
    width="80"
    height="80"
    hFlip={true}
   />
   <PlayBtn />
   <Icon
    icon="material-symbols:next-plan-outline-rounded"
    width="80"
    height="80"
   />
  </div>
 )
}

export default Controls
