import {Component} from 'react';

export default class Loggedin extends Component {
    state = {currentUserName : ""}
    
    componentDidMount(){
        this.setState({currentUserName: localStorage.getItem("currentUserName")})
    }

    logout = () => {
        window.location = "/logout"
    }
    render(){
        return(
            <>
            <h1>Loggedin page</h1>
            <h3>welcome, {this.state.currentUserName}</h3>
            <button onClick = {() =>this.logout()}>Logout</button>
            </>
        );
    }
}