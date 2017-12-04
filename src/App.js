import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

    state = {
        usernames: [
            "Alpha",
            "Beta",
            "Gamma"
        ]
    };

    nameChangeHandler = (event) => {
        let newState = this.state;
        newState.usernames[0] = event.target.value;
        this.setState(this.state);
    };

    render() {
        return (
            <div>
                <UserInput username={this.state.usernames[0]} handler={this.nameChangeHandler}/>
                <UserOutput username={this.state.usernames[0]}/>
                <UserOutput username={this.state.usernames[1]}/>
                <UserOutput username={this.state.usernames[2]}/>
            </div>
        );
    }
}

export default App;
