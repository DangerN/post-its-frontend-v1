import React, {Component} from 'react'

import NotePile from './NotePile'
import NewNoteForm from './NewNoteForm'
export default class NewNote extends Component {
  state = {
    noteProps: {
        noteColor: '#ffff88',
        noteText: ''
    }
  }
  changeNoteColor = event => {
    this.setState({
      noteProps: {
        noteColor: event.target.value,
        noteText: this.state.noteProps.noteText
      }
    })
  }
  changeNoteText = event => {
    this.setState({
      noteProps: {
        noteColor: this.state.noteProps.noteColor,
        noteText: event.target.value
      }
    })
  }
  render() {
    return(
      <div id='new-note-container'>
        <NotePile {...this.state.noteProps}/>
        <NewNoteForm {...this.state.noteProps} changeNoteText={this.changeNoteText} changeNoteColor={this.changeNoteColor} />
      </div>
    )
  }
}
