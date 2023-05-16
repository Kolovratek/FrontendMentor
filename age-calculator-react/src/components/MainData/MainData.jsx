import React from "react";
import { Row } from "reactstrap";
import "./MainData.css";

function MainData() {
  return (
    <div>
      <Row className="flex">
        <div className="number">38</div>
        <div className="text">years</div>
      </Row>
      <Row className="flex">
        <div className="number">3</div>
        <div className="text">months</div>
      </Row>
      <Row className="flex">
        <div className="number">26</div>
        <div className="text">days</div>
      </Row>
    </div>
  );
}

export default MainData;
