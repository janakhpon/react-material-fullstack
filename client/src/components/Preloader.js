import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import {
  Row, Col, ProgressBar
} from "react-materialize";
import "./Preloader.css";

class Preloader extends React.Component {
  render() {
    return (
      <div className="card-preload">
        <center>
          <Row>
            <Col s={12}>
              <ProgressBar />
            </Col>
            <Col s={11}>
              <ProgressBar />
            </Col>
            <Col s={10}>
              <ProgressBar />
            </Col>
          </Row>
        </center>
      </div>
    );
  }
}

export default Preloader;
