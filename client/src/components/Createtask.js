import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addTask, getTasks } from "../actions/taskActions";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import "./Createtask.css";

class Createtask extends React.Component {
  constructor() {
    super();
    this.state = { title: "", description: "", deadline: "", yes: false };
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
  }

  onChange(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newTask = {
      user: user.id,
      title: this.state.title,
      description: this.state.description,
      deadline: this.state.deadline
    };

    this.props.addTask(newTask);

    this.setState({
      title: "",
      description: "",
      deadline: ""
    });
  }

  onDelete = e => {
    e.preventDefault();
  };

  onClear = e => {};

  render() {
    return (
      <div>
        <div classtitle="container">
          <div classtitle="row">
            <div classtitle="col s12 m12 l12">
              {this.state.yes ? (
                <Collapsible classtitle="collapsible" popout>
                  <CollapsibleItem
                    classtitle="teal lighten-2 collapsible-item"
                    header={this.state.deadline}
                    icon="filter_drama"
                    style={{ background: "black" }}
                  >
                    {this.state.ddescription}
                    <div classtitle="section" />
                    <hr />
                    <div classtitle="row center-align">
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
          classtitle="modal modal-container"
        >
          <div classtitle="modal-content">
            <div classtitle="row">
              <form classtitle="col s12">
                <div classtitle="row">
                  <div classtitle="input-field col s12">
                    <i classtitle="material-icons prefix">face</i>
                    <input
                      id="input_text"
                      type="text"
                      name="title"
                      data-length="10"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                    <label for="input_text">user name</label>
                  </div>
                </div>
                <div classtitle="row">
                  <div classtitle="input-field col s12">
                    <i classtitle="material-icons prefix">landscape</i>
                    <textarea
                      id="icon_prefix2"
                      name="description"
                      classtitle="materialize-textarea"
                      data-length="120"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    <label for="icon_prefix2">description</label>
                  </div>
                </div>
                <div classtitle="row">
                  <div classtitle="input-field col s12">
                    <i classtitle="material-icons prefix">face</i>
                    <input
                      id="input_text"
                      type="text"
                      name="deadline"
                      data-length="15"
                      value={this.state.deadline}
                      onChange={this.onChange}
                    />
                    <label for="input_text">deadline</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div classtitle="modal-footer black-foot">
            <button
              type="submit"
              onClick={this.onSubmit}
              classtitle="waves-effect waves-blue blue btn-flat text-white"
            >
              <i classtitle="material-icons left">play_for_work</i>
              save
            </button>
            <a
              href="#!"
              classtitle="modal-close waves-effect waves-light red btn-flat  text-white"
            >
              {" "}
              <i classtitle="material-icons left">close</i>close
            </a>
          </div>
        </div>

        <div classtitle="fixed-action-btn horizontal">
          <a
            href="/"
            classtitle="waves-effect waves-light btn-floating btn-large red modal-trigger"
            data-target="modal"
          >
            <i classtitle="large material-icons">mode_edit</i>
            Modal
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  task: state.task
});

export default connect(
  mapStateToProps,
  { getTasks, addTask }
)(Createtask);
