import React from 'react'

const Note = props => {
  const noteStyle = {
    background: props.noteColor
  }
  return (
    <div className='note' style={noteStyle}>
      {props.noteText}
    </div>
  )
}

export default Note
