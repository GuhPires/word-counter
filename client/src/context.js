import React, { Component } from 'react';

const AppCtx = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'Light',
      text: '',
      wordsObj: {},
      mostUsed: [],
      words: 0,
      chars: 0,
      spaces: 0,
      numbers: 0,
      paragraphs: 0
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
      },
      text: {
        type: txt => this.setState({ text: txt }),
        countAll: (wordsObj, words, chars, spaces, numbers, paragraphs) => this.setState({ wordsObj, words, chars, spaces, numbers, paragraphs })
      },
    }
  }
  render() {
    return <AppCtx.Provider value={{ state: this.state, ...this.ctxActions }}>
      {this.props.children}
    </AppCtx.Provider>
  }
}

export { AppCtx, AppProvider }