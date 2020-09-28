import React, {Component} from 'react'

const Photo = ( {setStage}) => {

  return (
    <div>
      <p>this is the Photo page</p>
      <p onClick={() => setStage("decorate")}>Go to Decorate Page</p>
    </div>
  )
}

export default Photo
