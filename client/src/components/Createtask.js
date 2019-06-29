import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Taskform from './Taskform';
import { getTasks } from '../actions/taskActions';
import "./Createtask.css";

class Createtask extends React.Component {
  
  componentDidMount() {
    this.props.getTasks();
  }


  render() {


    return (
      <div>
        <Taskform />
        
      </div>
    );
  }
}
Createtask.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task : PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  task: state.task
});
export default connect(
  mapStateToProps,
  { getTasks }
)(Createtask);

