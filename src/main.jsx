import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client'
import { store } from "./store";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // För att göra store tillgänglig för hela appen så omrigar vi app med Provider och
  //  skickar med store som prop
  <Provider store={store}>
    <App />
  </Provider>,
)
