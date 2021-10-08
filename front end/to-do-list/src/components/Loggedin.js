import { Component } from "react";

export default class Loggedin extends Component {
  state = {
    currentUserName: "",
    values: { message: "", username: "" },
  };

  componentDidMount() {
    this.setState({ currentUserName: localStorage.getItem("currentUserName") });
  }

  logout = () => {
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
    let name = "username"
    let value = this.state.currentUserName;
    let values = {...this.state.values}
    values[name] = value;
    this.setState({ values });
    // console.log(this.state.toDo);
  };
  render() {
    const { values } = this.state;

    return (
      <>
      {JSON.stringify(this.state)}
        <nav className="navbar navbar-expand-lg bg-dark">
          <i
            onClick={(event) => this.back(event)}
            className="fa fa-arrow-left"
            style={{ color: "white", fontSize: "25px" }}
          ></i>
          <h1
            classname="navbar-brand"
            style={{ marginLeft: "520px", color: "white" }}
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
              <tbody>
                <tr>
                  <td style={{ width: "600px" }}>first to-do</td>
                </tr>
                <tr>
                  <td>second to-do</td>
                </tr>
                <tr>
                  <td>third to-do</td>
                </tr>
                <tr>
                  <td>fourth to-do</td>
                </tr>
              </tbody>
            </div>
          </form>

          <br></br>
          <div className="row">
            <div className="col-md-3">
              <h6>3 items left</h6>
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
      </>
    );
  }
}
