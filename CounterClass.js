import React from 'react'


class CounterClass extends React.Component{
    constructor() {
      super()
      this.state ={
        count: 0
      };
    }
    
    onIncrement = () => {
      this.setState({
        count: this.state.count + 1
      }) 
    }
    onDecrement = () => {
      this.setState({
        count: this.state.count - 1
      })
    }
  
    render() {
      return(
        <div className='main'>
            <div className='border'>
          <h1>Counter App (Class Component)</h1>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
          </div>
        </div>
      )
    }
  }

  export default CounterClass