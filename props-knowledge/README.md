## Test Your Knowledge: Props

Check out the code below. Right now it contains two components: the `App` and the `Message`. The code works, but notice that the `Message` component has a hard-coded header of `Changes in Service` and hard-coded message of `We just updated...`.

As it stands, the `Message` component can't be reused to show any other message!

### Your goal:
* Refactor the `Message` component so that it receives its props from the parent component (the `App`).
* The `Message` should receive a prop of `header` and `text`.
* The `Message` should show the `header` prop inside of the div with className header and the `text` prop inside of the paragraph tag.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <Message />
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="ui message">
            <div className="header">Changes in Service</div>
            <p>We just updated our privacy policy here to better service our customers.</p>
        </div>
    );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));
```

*I put some extra style from [material-ui](https://material-ui.com/pt/components/alert/) just because I wanted to. It isn't necessary for this exercise, it is totaly optional.*

**Exercise from Udemy course [Modern React with Redux](https://www.udemy.com/course/react-redux/) by @StephenGrider**