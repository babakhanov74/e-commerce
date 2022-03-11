import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import './style.scss'
import store, {subscribe} from "./store/storRedux"
import { Provider } from 'react-redux';

const reRender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('.wrapper')
  );
}
reRender()
store.subscribe(reRender)
