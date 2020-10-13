import React from 'react';
import Counter from './Components/Counter';
import Page from './Components/Page';
import TextInput from './Components/TextInput';

function App() {
  return (
    <div className="App">
      <Page name="home" title="Word Counter" theme="light">
        <TextInput />
        <Counter />
      </Page>
    </div>
  );
}

export default App;
