import React from 'react';
// import logo from './logo.svg';
import SideNav from './Components/SideNav'
import NotesContainer from './Components/NotesContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <SideNav />
      <NotesContainer />
    </div>
  );
}

export default App;
