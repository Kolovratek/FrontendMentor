import React, { useState } from "react";
import { Input, Label, FormGroup, Form, Row, Col } from "reactstrap";
import "./Inputs.css";

function Inputs() {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (name) => {
    setFocusedInput(name);
  };

  const calculator = () => {};

  return (
    <Form>
      <Row className="form-row">
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              <Label for="day" className="inputs-text">
                DAY
              </Label>
            </Row>
            <Row>
              <Input
                id="day"
                type="text"
                name="day"
                placeholder="DD"
                className={focusedInput === "day" ? "focused" : ""}
                onClick={() => handleInputFocus("day")}
              />
            </Row>
          </FormGroup>
        </Col>
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              <Label for="month" className="inputs-text">
                MONTH
              </Label>
            </Row>
            <Row>
              <Input
                id="month"
                type="text"
                name="month"
                placeholder="MM"
                className={focusedInput === "month" ? "focused" : ""}
                onClick={() => handleInputFocus("month")}
              />
            </Row>
          </FormGroup>
        </Col>
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              <Label for="year" className="inputs-text">
                YEAR
              </Label>
            </Row>
            <Row>
              <Input
                id="year"
                type="text"
                name="year"
                placeholder="YY"
                className={focusedInput === "year" ? "focused" : ""}
                onClick={() => handleInputFocus("year")}
              />
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <div className="hr-img">
        <hr />
        <button className="icon" onSubmit={calculator}>
          <img src="../../icon-arrow.svg" alt="Šípka" />
        </button>
      </div>
    </Form>
  );
}

export default Inputs;
