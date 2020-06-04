import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './components/repr/shared/global';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>Hello React</div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));