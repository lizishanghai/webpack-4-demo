var React = require('react');
var ReactDOM = require('react-dom');
// require('index.css');
import './index.css';

// state
// lifecycle events
// UI

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World! xxx
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));