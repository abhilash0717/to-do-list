import {Component} from 'react';

export default class HomePage extends Component{

    nextPage = (event) => {
        event.preventDefault();
        window.location = "/login";
    }

    render(){
        return(            
            <>
            <nav className = "navbar navbar-expand-lg bg-dark">
               <h1 classname = "navbar-brand" style = {{marginLeft : "520px", color : "white"}}>TO-DO-LIST</h1> 
            </nav>
                <form className = "col-4 offset-4" style = {{border : "2px solid black", marginTop:"160px"}}>
                    <h1 className = "text-center">Home</h1>
                    <button onClick = {(event) => this.nextPage(event)} className = "btn btn-outline-secondary btn-lg" style = {{marginLeft : "145px",marginBottom : "10px", marginTop : "30px", width : "30%"}}><b>Login</b></button>
                </form>
            </>
        );
    }
}