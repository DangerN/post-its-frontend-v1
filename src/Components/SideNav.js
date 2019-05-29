import React, {Component} from 'react'

export default class SideNav extends Component {
  state = {
    visible: false
  }
  renderListyBits() {
    return (
      <ul className='nav-item-list'>
        <li className='nav-item'>My Notes</li>
        <li className='nav-item'>Edit</li>
        <li className='nav-item'>Delete</li>
      </ul>
    )
  }
  toggleNav = event => {
    this.setState({visible:
      this.state.visible ? false : true
    })
  }
  render() {
    return (
      <nav className='side-nav' onClick={this.toggleNav}>
        <span className='nav-bar-toggle'>UwU</span>
        {this.state.visible ? this.renderListyBits() : null}
      </nav>
    )
  }
}
