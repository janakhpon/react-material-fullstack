import React from "react";
import "jquery";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTask } from "../actions/taskActions";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Collapsible, CollapsibleItem, Button } from "react-materialize";

class Taskitem extends React.Component {
  onDeleteClick(id) {
    this.props.deleteTask(id);
  }

  render() {
    const { task, auth } = this.props;
    return ( 
          <div className="col s12 m12 l12">
            <Collapsible className="collapsible" popout>
              <CollapsibleItem
                className="teal lighten-2 collapsible-item"
                header={task.title}
                icon="filter_drama"
                style={{ background: "black" }}
              >
                {task.description} at {task.deadline}
                <div className="section" />
                <hr />
                <div className="row center-align">
                  {task.user === auth.user.id ? (
                    <Button
                      waves
                      onClick={this.onDeleteClick.bind(this, task._id)}
                    >
                      delete
                    </Button>
                  ) : null}

                  <Button waves onClick={this.onClear}>
                    clear
                  </Button>
                </div>
              </CollapsibleItem>
            </Collapsible>
          </div>
    );
  }
}

Taskitem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteTask }
)(Taskitem);
