import React from 'react';
import logo from './logo.svg';
import LexChat from 'react-lex';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SA SOS</h1>
      </header>
      <div>
        <LexChat botName="AWSSA"
          IdentityPoolId="us-east-1:3ec15448-603e-4501-a061-f24a15ff989e"
          placeholder="Placeholder text"
          style={{position: 'absolute'}}
          backgroundColor="#FFFFFF"
          height="600"
          headerText="Chat with our awesome bot" />
      </div>
    </div>
  );
}
export default App;
