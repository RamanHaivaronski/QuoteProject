import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="card">
        <div id="text" className="card-body">
          Quote
        </div>
        <footer id="author" className="card-footer bg-transparent border-success">
              Author
        </footer>
    </div>
    );
  }
}

export default App;
