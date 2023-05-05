import React from 'react'
import { useState, useEffect } from 'react'

const HOC = (Comp) => {
    return (props) => {

        return <div style={{backgroundColor: "red"}}>
          <Comp {...props}/>
        </div>
    }
}

export default HOC