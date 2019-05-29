import React, {Component} from 'react'
import DivCell from './DivCell'

export default class NoteBoard extends Component {
  createPinHooks() {
    let divBucket = []
    for(let i=0; i < 40; i++) {
      for(let j=0; j < 40; j++) {
        const props = {
          style: {
            gridColumnStart: i,
            gridRowStart: j
          },
          keyProp: `${i}${j}${j}`
        }
        divBucket.push(<DivCell key={props.keyProp} {...props} />)
      }
    }
    return (
      divBucket
    )
  }
  render() {
    return(
      <div id='note-board'>
        {this.createPinHooks()}
      </div>
    )
  }
}
