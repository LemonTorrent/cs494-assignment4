import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import store from './redux/store'
import candyReducer from './redux/candyReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log("Create store ", createStore(candyReducer))
root.render(
    <React.StrictMode>
        {/* <Provider cart={cart}> */}
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>
)
