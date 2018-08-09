import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Home />
,  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
