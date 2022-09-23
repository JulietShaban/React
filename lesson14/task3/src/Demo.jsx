import React, { useState } from "react";
import Dimentions from "./Dimentions";


const Button = ({children}) => <div>{children}</div>

const Demo = () => {
  const [ isVisible, setIsVisible ] = useState(true);

  return(
    <div>
      <div>
        <button className="btn" onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button className="btn" onClick={() => setIsVisible(false)}>
          Hide
        </button>
        <Button>123</Button>
        <Button>234</Button>

      </div>
      {isVisible && <Dimentions /> }
    </div>
  )
   
  }


export default Demo;
