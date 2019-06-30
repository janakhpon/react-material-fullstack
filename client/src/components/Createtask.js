import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Taskform from "./Taskform";
import Taskfeed from './Taskfeed';
import Preloader from "./Preloader";
import { getTasks } from "../actions/taskActions";
import './Createtask.css';

class Createtask extends Component {
  componentDidMount() {
    this.props.getTasks();
    
  }

  render() {
    const { tasks, loading } = this.props.task;
    let postContent;

    if (tasks === null || loading) {
      postContent = <Preloader />;
    } else {
      postContent = <Taskfeed tasks={tasks} />;
      
    }

    return (
      <div className="container">
        <Taskform />
        {postContent}
      </div>
    );
  }
}

Createtask.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  task : state.task
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Createtask);
