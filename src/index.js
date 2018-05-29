import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { addLocaleData } from 'react-intl'
import thunk from 'redux-thunk'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import reducers from './reducers'
import App from './App'
import { localeSet } from './actions/locale'

addLocaleData(en)
addLocaleData(es)

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // add redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

if (localStorage.alhubLang) {
  store.dispatch(localeSet(localStorage.alhubLang))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
