import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Container extends React.Component {
    state = { isMounted: true };

    render() {
        const { isMounted = true } = this.state;
        return (
            <>
                <button
                    onClick={() =>
                        this.setState(state => ({ isMounted: !state.isMounted }))
                    }
                >
                    {isMounted ? "Unmount" : "Mount"}
                </button>
                {isMounted && <App />}
                {isMounted && <div>Scroll to zoom, drag to rotate</div>}
            </>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
