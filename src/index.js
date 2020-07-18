import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu'
import SlotMachine from './components/SlotMachine'

ReactDOM.render(
  <div>
    <Menu />
    <center><SlotMachine /></center>
  </div>,
  document.querySelector('#root')
)