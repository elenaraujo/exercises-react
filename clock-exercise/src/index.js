import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }

    render() {
        return (
            <div className={`time div`}>
                The time is: {this.state.time}
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));