import {Component} from 'react';

export default class Login extends Component {
    render(){
        return(
            <>
             <nav className = "navbar navbar-expand-lg bg-dark">
               <h1 classname = "navbar-brand" style = {{marginLeft : "520px", color : "white"}}>TO-DO-LIST</h1> 
            </nav>
            <h1>this is the login page</h1>
            </>
        );
    }
}