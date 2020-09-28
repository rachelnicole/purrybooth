import React, {Component} from 'react'

const Mode = ( {setStage} ) => {

  return (
    <div>
      <p>this is the Mode page</p>
      <p onClick={() => setStage("photo")}>Go to Photo Page</p>
    </div>
  )
}

export default Mode
