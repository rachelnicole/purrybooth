import React, {Component} from 'react'

const Decorate = ( {setStage}) => {

  return (
    <div>
      <p>this is the Decorate page</p>
      <p onClick={() => setStage("share")}>Go to Share Page</p>
    </div>
  )
}

export default Decorate
