import { createRoot } from 'react-dom/client'
import App from './App.js'
import { Provider } from 'react-redux';
import { store } from '@/store';
import AlertContainer from '@/components/alert/AlertContainer';

import './index.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <AlertContainer />
  </Provider>
)

