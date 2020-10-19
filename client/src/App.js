import React, { useContext } from 'react';
import Counter from './Components/Counter';
import Page from './Components/Page';
import TextInput from './Components/TextInput';
import { AppCtx } from './context';

function App() {
  const ctx = useContext(AppCtx);

  return (
    <div className={`App ${(ctx.state.theme).toLowerCase()}`}>
      <Page name="home" title="Word Counter">
        <TextInput />
        <Counter />
      </Page>
    </div>
  );
}

export default App;
