import React from 'react';
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import { Provider } from './context/context'
import './index.css'
import App from './App'

ReactDOM.render(
    <SpeechProvider appId="5fcb81da-fc82-4268-8816-d436c173ec0f" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,

    document.getElementById('root')
);