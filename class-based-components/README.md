## Class-based Components

See the code below, which creates a component called `UserForm`. Right now the `UserForm` is a functional component.

### Your goal:
* Refactor the `UserForm` to be a class-based component. It should return the exact same JSX.

### Remember that class-based components must:

1. Be a Javascript class
2. Extend React.Component
3. Implement a render method that returns some JSX

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const UserForm = () => {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<UserForm />, document.querySelector('#root'));
```

**Exercise from Udemy course [Modern React with Redux](https://www.udemy.com/course/react-redux/) by @StephenGrider**