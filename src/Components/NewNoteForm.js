import React from 'react'

const NewNoteForm = props => {
  return (
    <form id='note-form'>
       <input
        id='color-bar'
        type='color'
        value={props.noteColor}
        onChange={props.changeNoteColor}
       />
       <textarea
          id='note-form-text'
          maxLength='72'
          rows='2'
          cols='20'
          wrap='hard'
          placeholder='Write a note!               Change color above!        Drag to Post!'
          onChange={props.changeNoteText}
          value={props.noteText}
        />
    </form>
  )
}

export default NewNoteForm
