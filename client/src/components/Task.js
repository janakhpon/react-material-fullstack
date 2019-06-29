import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Taskitem from "./Taskitem";
import Preloader from "./Preloader";
import { getTask } from "../actions/TaskActions";

class Task extends Component {
  componentDidMount() {
    this.props.getTask(this.props.match.params.id);
  }

  render() {
    const { Task, loading } = this.props.Task;
    let TaskContent;

    if (Task === null || loading || Object.keys(Task).length === 0) {
      TaskContent = <Preloader />;
    } else {
      TaskContent = (
        <div>
          <Taskitem Task={Task} />
        </div>
      );
    }

    return (
      <div className="Task">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {TaskContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  getTask: PropTypes.func.isRequired,
  Task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  Task: state.Task
});

export default connect(
  mapStateToProps,
  { getTask }
)(Task);
