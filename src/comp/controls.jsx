import React from "react"
import {Icon} from "@iconify/react"

function Controls() {
 return (
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
 )
}

export default Controls
