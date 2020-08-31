## Updating Components with State

The Clock class below is trying to implement a clock display that updates every second. Right now, a beginner engineer tried putting the component together, but they're finding that they can't get the time to update!

### Your goal:
* Update the Clock class do that it properly updates once per second

### Hints:
* You definitely need to use `state`. Make sure you initialize the 'state' object.
* Remember that you can get your component to update by calling `setState`.
* Remember that you only update state by calling `setState`.

```javascript
class Clock extends React.Component {
        componentDidMount() {
            setInterval(() => {
                this.time = new Date().toLocaleTimeString()    
            }, 1000)
        }
        
        render() {
            return (
                <div className="time">
                    The time is: {this.time}
                </div>
            );
        }
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<Clock />, document.querySelector('#root'));
```

**Exercise from Udemy course [Modern React with Redux](https://www.udemy.com/course/react-redux/) by @StephenGrider**