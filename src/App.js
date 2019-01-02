import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'file-drop-element';

class App extends Component {
  constructor (props) {
    super(props);
    this.myRef = React.createRef();


  }

  componentDidMount () {
    if (this.myRef && this.myRef.current) {
      this.myRef.current.addEventListener('filedrop', (event) => console.log('drop', event.file));
    } 
    
  }
  render() {
    return (
      <div className="App">        
        <file-drop 
          id="dropTarget" 
          class="drop"
          onfiledrop={(event) => {console.log('drop', event.file)}}
          ref={this.myRef}
        >
          Drop a file here
        </file-drop>
      </div>
    );
  }
}

export default App;
