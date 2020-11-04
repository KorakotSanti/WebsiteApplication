import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar/navbar';
import Main from './components/Main/Main';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
