import React, {Component} from 'react'

const Layout = ( {setStage}) => {

  return (
    <div>
      <p>this is the layout page</p>
      <p onClick={() => setStage("mode")}>Go to Mode Page</p>
    </div>
  )
}

export default Layout
