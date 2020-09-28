import React, {Component} from 'react'

const Landing = ( {setStage} ) => {

  return (
    <div>
      <p>this is the landing page</p>
      <p onClick={() => setStage("layout")}>Go to Layout Page</p>
    </div>
  )
}

export default Landing
