import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import configure from './store/configure';

// @ts-ignore
const store = configure();

const Root: React.FunctionComponent<any> = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

export default Root;
