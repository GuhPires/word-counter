import React, { Component } from 'react';

const AppCtx = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'Light',
      wordsObj: {},
      words: 0,
      chars: 0,
      spaces: 0,
      paragraphs: 0,
      numbers: 0
    }
    this.ctxActions = {
      theme: {
        change: () => {
          switch(this.state.theme) {
            case 'Light':
              this.setState({ theme: 'Dark' });
              break;
            case 'Dark':
            default:
              this.setState({ theme: 'Light' });
              break;
          }
        }
      }
    }
  }
  render() {
    return <AppCtx.Provider value={{ state: this.state, ...this.ctxActions }}>
      {this.props.children}
    </AppCtx.Provider>
  }
}

export { AppCtx, AppProvider }