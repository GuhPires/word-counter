import React from 'react';
import Page from './Components/Page';
import TextInput from './Components/TextInput';

function App() {
  return (
    <div className="App">
      <Page name="home" title="Word Counter" theme="light">
        <h3>Aside</h3>
        <TextInput />
      </Page>
    </div>
  );
}

export default App;
