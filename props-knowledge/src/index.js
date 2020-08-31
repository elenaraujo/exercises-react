import React from 'react';
import ReactDOM from 'react-dom';
import { Alert, AlertTitle } from '@material-ui/lab';

const App = () => {
    return (
        <div>
            <Message header="Changes in Service" text="We just updated our privacy policy here to better service our customers." />
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="ui message">
            <Alert severity="info">
                <AlertTitle>{props.header}</AlertTitle>
                {props.text}
            </Alert>
        </div>
    );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));