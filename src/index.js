import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apiService from './services/apiService'
import { tokenService } from './services/storageService'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import loadSprites from './plugins/loadSvg'

const store = configureStore()

apiService.init(apiService.getBaseUrl())
apiService.addInterceptor()
loadSprites()

if (tokenService.getToken()) {
  apiService.setHeader()
  apiService.mount401Interceptor()
}

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  /* </React.StrictMode> */ ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
