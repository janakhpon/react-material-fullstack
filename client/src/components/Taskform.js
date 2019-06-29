import React from "react";
import "jquery";
import M from "materialize-css";
import "materialize-css/dist/js/materialize.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

class Taskform extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      deadline: "",
      errors: {}
    };
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

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newTask = {
      title: this.state.title,
      description: this.state.description,
      deadline: this.state.deadline,
      user: user.id
    };

    this.props.addTask(newTask);
    console.log(newTask);
    this.setState({
      title: "",
      description: "",
      deadline: ""
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
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
                      name="title"
                      data-length="10"
                      value={this.state.title}
                      onChange={this.onChange}
                      error={errors.title}
                    />
                    <label htmlFor="input_text">USER NAME</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">landscape</i>
                    <textarea
                      id="icon_prefix2"
                      name="description"
                      className="materialize-textarea"
                      data-length="120"
                      value={this.state.description}
                      onChange={this.onChange}
                      error={errors.description}
                    />
                    <label htmlFor="icon_prefix2">position</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">face</i>
                    <input
                      id="input_text"
                      type="text"
                      name="deadline"
                      data-length="10"
                      value={this.state.deadline}
                      onChange={this.onChange}
                      error={errors.deadline}
                    />
                    <label htmlFor="input_text">USER NAME</label>
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

        <div className="fixed-action-btn horizontal spin-button">
          <a
            href="/"
            className="waves-effect waves-light btn-floating btn-large red modal-trigger"
            data-target="modal"
          >
            <i className="large material-icons edit-icon">mode_edit</i>
            Modal
          </a>
        </div>
      </div>
    );
  }
}

Taskform.propTypes = {
  addTask: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addTask }
)(Taskform);
