import React, {Component} from 'react'

import Note from './Note'

export default class NotePile extends Component {
  render() {
    return (
      <div id='note-pile'>
        <Note {...this.props}/>
      </div>
    )
  }
}
