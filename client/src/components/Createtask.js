import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Createtask.css";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import logo from "../img/favicon.png";
import "./Createtask.css";

class Createtask extends React.Component {
  constructor() {
    super();
    this.state = { name: "", address: "", dname: "", daddress: "", yes: false };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    var dataname = localStorage.getItem("name");
    var dataddress = localStorage.getItem("address");

    if (
      dataname !== null &&
      dataname !== "" &&
      dataddress !== null &&
      dataddress !== ""
    ) {
      this.setState({
        dname: dataname,
        daddress: dataddress,
        yes: true
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const vname = this.state.name;
    const vaddress = this.state.address;

    // Save data to localStorage
    localStorage.setItem("name", vname);
    localStorage.setItem("address", vaddress);

    this.setState({
      name: "",
      address: ""
    });
  }

  onDelete = e => {
    e.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("address");
  };

  onClear = e => {
    e.preventDefault();
    localStorage.clear();
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              {this.state.yes ? (
                <Collapsible className="collapsible" popout>
                  <CollapsibleItem
                    className="teal lighten-2 collapsible-item"
                    header={this.state.dname}
                    icon="filter_drama"
                    style={{ background: "black" }}
                  >
                    {this.state.daddress}
                    <div className="section" />
                    <hr />
                    <div className="row center-align">
                      <Button waves onClick={this.onDelete}>
                        delete
                      </Button>
                      <Button waves onClick={this.onClear}>
                        clear
                      </Button>
                    </div>
                  </CollapsibleItem>
                </Collapsible>
              ) : (
                <p>sorry no data in localStorage</p>
              )}
            </div>
          </div>
        </div>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal"
          className="modal modal-container"
        >
          <div className="modal-content">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">face</i>
                    <input
                      id="input_text"
                      type="text"
                      name="name"
                      data-length="10"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <label for="input_text">USER NAME</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">landscape</i>
                    <textarea
                      id="icon_prefix2"
                      name="address"
                      className="materialize-textarea"
                      data-length="120"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                    <label for="icon_prefix2">ADDRESS</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer black-foot">
            <button
              type="submit"
              onClick={this.onSubmit}
              className="waves-effect waves-blue blue btn-flat text-white"
            >
              <i className="material-icons left">play_for_work</i>
              save
            </button>
            <a
              href="#!"
              className="modal-close waves-effect waves-light red btn-flat  text-white"
            >
              {" "}
              <i className="material-icons left">close</i>close
            </a>
          </div>
        </div>

        <div className="fixed-action-btn horizontal">
          <a
            href="/"
            className="waves-effect waves-light btn-floating btn-large red modal-trigger"
            data-target="modal"
          >
            <i className="large material-icons">mode_edit</i>
            Modal
          </a>
        </div>
      </div>
    );
  }
}

export default Createtask;
