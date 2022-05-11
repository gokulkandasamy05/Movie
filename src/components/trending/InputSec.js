import React from 'react'

const InputSec = (props) => {
  return (
    
        <input
          className="input-field"
          type="text"
          onChange={props.func}
          placeholder="search..."
        ></input>

  )
}

export default InputSec