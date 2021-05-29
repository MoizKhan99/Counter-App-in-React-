import logo from './logo.svg';
import './App.css';
import React from 'react'
import CounterClass from './Counter_App/CounterClass'
import CounterHooks from './Counter_App/CounterHooks';
import Timer from './Timer'
class App extends React.Component {
  render() {
    return (
      <div>
        <Timer />
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      </div>
   )
  }
}

export default App;
