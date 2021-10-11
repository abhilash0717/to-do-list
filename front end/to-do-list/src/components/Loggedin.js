import { Component } from "react";
import axios from "axios";

const url = "http://localhost:4000/toDoList/newToDo/";
const url1 = "http://localhost:4000/toDoList/myTodos/";
export default class Loggedin extends Component {
  state = {
    currentUserName: "",
    values: { message: "" },
    successMessage: "",
    errorMessage: "",
    todos: [],
    len : 0
  };

  componentDidMount() {
    this.setState({ currentUserName: localStorage.getItem("currentUserName") });
    this.allToDos();
  }

  done = (todo) => {
    this.setState({len : this.state.len - 1})
    console.log(todo)

  };
  allToDos = () => {
    axios
      .get(url1.concat(localStorage.getItem("currentUserName")))
      .then((response) => {
        this.setState({ todos: response.data, len : response.data.length });
      })
      .catch((error) => {});
  };

  logout = () => {
    localStorage.clear();
    window.location = "/logout";
  };

  back = (event) => {
    event.preventDefault();
    window.location = "/login";
  };

  inputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let values = { ...this.state.values };
    values[name] = value;
    this.setState({ values });
  };

  sendData = (e) => {
    e.preventDefault();
    axios
      .post(url.concat(this.state.currentUserName), this.state.values)
      .then((response) => {
        this.setState({ successMessage: response.data, errorMessage: "" });
        this.allToDos();
      })
      .catch((error) => {
        if (error.response)
          this.setState({
            successMessage: "",
            errorMessage: error.response.data.message,
          });
        else
          this.setState({
            successMessage: "",
            errorMessage: "Error! Try again later",
          });
      });
  };

  render() {
    const { values, todos, len } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <i
            onClick={(event) => this.back(event)}
            className="fa fa-arrow-left"
            style={{ color: "white", fontSize: "25px" }}
          ></i>
          <h1
            classname="navbar-brand"
            style={{ marginLeft: "500px", color: "white" }}
          >
            TO-DO-LIST
          </h1>
          {/* <button style = {{marginLeft : "500px"}} onClick = {() =>this.logout()}>Logout</button> */}
          <i
            onClick={() => this.logout()}
            style={{
              color: "white",
              fontSize: "25px",
              marginLeft: "550px",
            }}
            class="fa fa-sign-out"
            aria-hidden="true"
          ></i>
        </nav>

        <form
          className="col-5 offset-4"
          style={{ border: "2px solid black", marginTop: "20px" }}
        >
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-8">
              <h5>Create a new to-do</h5>
            </div>

            <div className="col-md-4">
              <h6 className="text-right">
                welcome, {this.state.currentUserName}
              </h6>
            </div>
          </div>

          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-10">
              <input
                name="message"
                value={values.message}
                onChange={(event) => this.inputChange(event)}
                className="form-control"
                type="text"
                placeholder="write your to-do here"
              ></input>
            </div>

            <div className="col-md-2">
              <button
                onClick={(e) => this.sendData(e)}
                style={{ marginRight: "40px" }}
                className="btn btn-outline-secondary"
              >
                Add
              </button>
            </div>
          </div>
          <h5 style={{ marginTop: "20px" }}>All to-do's</h5>
          <form style={{ border: "1px solid black" }}>
            <div className="table table-striped" style={{ marginTop: "10px" }}>
              {todos.length > 0 ? (
                <tbody>
                  {todos.map((todo) => {
                    return (
                      <tr>
                        <td style={{ width: "600px" }}>
                          <div id="done">
                            {todo}{" "}
                            <img
                              onClick={() => this.done(todo)}
                              width="5%"
                              src="https://cdn-icons.flaticon.com/png/512/3161/premium/3161410.png?token=exp=1633951739~hmac=67460bb14f33760d1474c06ea9ad51e6"
                            ></img>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <h4 className="text-center">No to-do found to display</h4>
              )}
            </div>
          </form>

          <br></br>
          <div className="row">
            <div className="col-md-3">
              <h6>{len} items left </h6>
            </div>
            <div className="col-md-2">
              <h6>ALL</h6>
            </div>
            <div className="col-md-2">
              <h6>Active</h6>
            </div>
            <div className="col-md-2">
              <h6>Completed</h6>
            </div>
            <div className="col-md-3">
              <h6>
                <i class="fa fa-trash" aria-hidden="true"></i>completed
              </h6>
            </div>
          </div>
          <br></br>
        </form>
        <p>{this.state.successMessage}</p>
        <p>{this.state.errorMessage}</p>
      </>
    );
  }
}
