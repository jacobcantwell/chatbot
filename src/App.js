import React from 'react';
import LexChat from './components/lex/LexChat';

function App() {
  return (
    <LexChat botName="AWSSA"
      IdentityPoolId="us-east-1:3ec15448-603e-4501-a061-f24a15ff989e"
      placeholder="Enter an AWS service name"
      style={{position: 'absolute'}}
      backgroundColor="#FFFFFF"
      height={400}
      headerText="Chat with the SA SOS bot" />
  );
}
export default App;
