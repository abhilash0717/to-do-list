import {Component} from 'react';
import axios from 'axios';

const url = "http://localhost:4000/toDoList/login"
export default class Login extends Component {

    state = {
        details : {name : "", password : ""}, formErrorMessages : {name : "", password : ""},
        formValid : {name : false, password : false, buttonActive : false}, successMessage : "",
        errorMessage : ""
    }

    back = (event) => {
        event.preventDefault();
        window.location = "/";
    }

    handleChange = (event) => {
       let name = event.target.name;
       let value = event.target.value;
       let details = {...this.state.details}
       details[name] = value;
       this.setState({details})
       this.validate(name,value);
    }

    validate = (key,value) => {
        let {formErrorMessages, formValid} = this.state;
        switch(key){
            case "name" :
                if(value === ""){
                    formErrorMessages.name = "Name length should be greater than 0";
                    formValid.name = false
                } else{
                    formErrorMessages.name = "";
                    formValid.name = true
                }
            break;

            case "password" :
                if(value === ""){
                    formErrorMessages.password = "password length should be greater than 0";
                    formValid.password = false
                } else{
                    formErrorMessages.password = "";
                    formValid.password = true
                }
            break;

            default : 
            break;
        }

        formValid.buttonActive = formValid.name && formValid.password;
        this.setState({formErrorMessages, formValid})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.finalSubmit();
    }

    finalSubmit = (event) => {
        axios.post(url, this.state.details)
        .then((response) => {
            this.setState({successMessage : response.data, errorMessage : ""})
            localStorage.setItem("currentUserName", this.state.successMessage)
            window.location = "/loggedin"
        })
        .catch((error) => {
            if(error.response) this.setState({successMessage : "", errorMessage : error.response.data.message})
            else this.setState({successMessage : "", errorMessage : "Please run the server"})
        });
    }
    render(){
        const {details, formErrorMessages, formValid} = this.state
        return(
            <>
             <nav className = "navbar navbar-expand-lg bg-dark">
             <i onClick = {(event) => this.back(event)} className = "fa fa-arrow-left" style = {{color : "white"}}></i>
               <h1 classname = "navbar-brand" style = {{marginLeft : "520px", color : "white"}}>TO-DO-LIST</h1> 
            </nav>
            <form onSubmit = {(event)=>this.handleSubmit(event)} className = "col-4 offset-4" style = {{border : "2px solid black", marginTop:"100px"}}>
                <h1 className = "text-center">Login</h1>
                <br></br>

                <h4>Username : </h4>
                <input name = "name" onChange = {(event)=> this.handleChange(event)} value = {details.name} className = "form-control" type = "text" ></input>
                <span className = "text-danger">{formErrorMessages.name}</span>
               
                <br></br>

                <h4>Password</h4>
                <input name = "password" onChange = {(event)=> this.handleChange(event)} value = {details.password} className = "form-control" type = "password" ></input>
                <span className = "text-danger">{formErrorMessages.password}</span>
               
                <br></br>
                <button disabled = {!formValid.buttonActive} type = "submit" className = "btn btn-outline-secondary btn-lg" style = {{marginLeft : "145px",marginBottom : "10px", width : "30%"}}>Submit</button>
               
                <br></br>
            </form>
            <span>{this.state.successMessage}</span>
            <span>{this.state.errorMessage}</span>
            </>
        );
    }
}