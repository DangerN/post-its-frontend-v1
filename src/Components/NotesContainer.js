import React, {Component} from 'react'

import NewNote from './NewNote'
import NoteBoard from './NoteBoard'

export default class NotesContainer extends Component {
  render() {
    return(
      <div id='notes-container'>
        <NewNote />
        <NoteBoard />
      </div>
    )
  }
}
