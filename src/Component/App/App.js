import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  handleClick = () =>{
    console.log('in handleClick');
    this.props.dispatch({
      type: 'test00', 
      payload: 'tests info'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Lamport Combine Logger</p>
        </header>
        <button onClick = {this.handleClick}>Test</button>
        <p>Reducer 1:{this.props.reduxState.reducerOne}</p>
        <p>Reducer 2:{this.props.reduxState.reducerTwo}</p>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) =>({reduxState})
export default connect(putStateOnProps)(App);
