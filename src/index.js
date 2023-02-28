import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Global, css } from '@emotion/react'

import App from './App'
import store from './redux/store'
import candyReducer from './redux/candyReducer'


const globalStyles = css`
    html {
        height: 100%;
    }
    body {
        margin: 0;
        height: 100%;
    }

    #root {
        height: 100%;
    }

    #styling-div {
        height: 100%;
    }

    button {
        background-color: #e383a8;
        color: #fff;
        border: 2px solid #e383a8;
        border-radius: 3px;
        font-size: 18px;
        font-weight: 300;
        padding: 5px 10px;
        margin: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #f4cce4;
    }
    
`

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log("Create store ", createStore(candyReducer))
root.render(
    <React.StrictMode>
        {/* <Provider cart={cart}> */}
        <Global styles={globalStyles} />
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>
)
