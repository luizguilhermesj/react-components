import React from 'react';
import ReactDOM from 'react-dom';

import PreferenceCenter from './pages/preferenceCenter';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PreferenceCenter />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
