import React, { Component } from "react";
import PropTypes from "prop-types";
import Taskitem from "./Taskitem";

class TaskFeed extends Component {
  render() {
    const {tasks } = this.props;

    return tasks.map(task => <Taskitem key={task._id} task={task} />);
  }
}

TaskFeed.propTypes = {
  Tasks: PropTypes.array.isRequired
};

export default TaskFeed;
