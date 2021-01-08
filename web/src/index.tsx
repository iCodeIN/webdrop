import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages';
import './global/main.scss';
import SnackbarProvider from 'react-simple-snackbar';
import 'react-circular-progressbar/dist/styles.css';
import * as serviceWorker from './serviceWorker';

export function App(): React.ReactElement {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();