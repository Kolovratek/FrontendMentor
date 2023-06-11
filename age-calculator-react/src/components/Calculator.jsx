import React, { useState } from "react";
import { Input, Label, FormGroup, Form, Row, Col } from "reactstrap";
import { ReactComponent as ArrowIcon } from "../icon-arrow.svg";
import "./Calculator.css";

function Calculator() {
  const [focusedInput, setFocusedInput] = useState(null);
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [age, setAge] = useState({ days: "--", months: "--", years: "--" });
  const [validError, setValidError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const handleInputFocus = (name) => {
    setFocusedInput(name);
  };

  const calculator = (dayValue, monthValue, yearValue) => {
    setValidError(
      dayValue > 31 || monthValue > 12 || yearValue > 2023 ? true : false
    );

    setEmptyError(
      dayValue === "" || monthValue === "" || yearValue === "" ? true : false
    );

    if (!validError && !emptyError) {
      const currentDate = new Date();
      const birthDate = new Date(yearValue, monthValue - 1, dayValue);

      const ageInMilliseconds = currentDate - birthDate;
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const tmpDays = Math.floor(ageInMilliseconds / millisecondsPerDay);
      const Years = Math.floor(tmpDays / 365.25);
      const Months = Math.floor((tmpDays - Years * 365.25) / 30.44);
      const Days = Math.round(tmpDays - Years * 365.25 - Months * 30.44);
      setAge({ days: Days, months: Months, years: Years });
    }
  };

  return (
    <Form>
      <Row className="form-row">
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              {(emptyError || validError) && (
                <Label
                  for="day"
                  className="inputs-text"
                  style={{ color: "red" }}
                >
                  DAY
                </Label>
              )}
              {!emptyError && !validError && (
                <Label for="day" className="inputs-text">
                  DAY
                </Label>
              )}
            </Row>
            <Row>
              {(emptyError || validError) && (
                <React.Fragment>
                  <Input
                    id="day"
                    type="text"
                    name="day"
                    placeholder="DD"
                    style={{ borderColor: "red" }}
                    value={dayValue}
                    onChange={(e) => setDayValue(e.target.value)}
                    onClick={() => handleInputFocus("day")}
                  />
                  {emptyError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      This field is required
                    </p>
                  )}
                  {validError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      Must be a valid Day
                    </p>
                  )}
                </React.Fragment>
              )}
              {!emptyError && !validError && (
                <Input
                  id="day"
                  type="text"
                  name="day"
                  placeholder="DD"
                  className={focusedInput === "day" ? "focused" : ""}
                  value={dayValue}
                  onChange={(e) => setDayValue(e.target.value)}
                  onClick={() => handleInputFocus("day")}
                />
              )}
            </Row>
          </FormGroup>
        </Col>
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              {(emptyError || validError) && (
                <Label
                  for="month"
                  className="inputs-text"
                  style={{ color: "red" }}
                >
                  MONTH
                </Label>
              )}
              {!emptyError && !validError && (
                <Label for="month" className="inputs-text">
                  MONTH
                </Label>
              )}
            </Row>
            <Row>
              {(emptyError || validError) && (
                <React.Fragment>
                  <Input
                    id="month"
                    type="text"
                    name="month"
                    placeholder="MM"
                    style={{ borderColor: "red" }}
                    value={monthValue}
                    onChange={(e) => setMonthValue(e.target.value)}
                    onClick={() => handleInputFocus("month")}
                  />
                  {emptyError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      This field is required
                    </p>
                  )}
                  {validError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      Must be a valid Day
                    </p>
                  )}
                </React.Fragment>
              )}
              {!emptyError && !validError && (
                <Input
                  id="month"
                  type="text"
                  name="month"
                  placeholder="MM"
                  className={focusedInput === "month" ? "focused" : ""}
                  value={monthValue}
                  onChange={(e) => setMonthValue(e.target.value)}
                  onClick={() => handleInputFocus("month")}
                />
              )}
            </Row>
          </FormGroup>
        </Col>
        <Col className="border">
          <FormGroup className="form-inputs">
            <Row>
              {(emptyError || validError) && (
                <Label
                  for="year"
                  className="inputs-text"
                  style={{ color: "red" }}
                >
                  YEAR
                </Label>
              )}
              {!emptyError && !validError && (
                <Label for="year" className="inputs-text">
                  YEAR
                </Label>
              )}
            </Row>
            <Row>
              {(emptyError || validError) && (
                <React.Fragment>
                  <Input
                    id="year"
                    type="text"
                    name="year"
                    placeholder="YY"
                    style={{ borderColor: "red" }}
                    value={yearValue}
                    onChange={(e) => setYearValue(e.target.value)}
                    onClick={() => handleInputFocus("year")}
                  />
                  {emptyError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      This field is required
                    </p>
                  )}
                  {validError && (
                    <p style={{ color: "red", margin: 0, fontSize: 10 }}>
                      Must be a valid Day
                    </p>
                  )}
                </React.Fragment>
              )}
              {!emptyError && !validError && (
                <Input
                  id="year"
                  type="text"
                  name="year"
                  placeholder="YY"
                  className={focusedInput === "year" ? "focused" : ""}
                  value={yearValue}
                  onChange={(e) => setYearValue(e.target.value)}
                  onClick={() => handleInputFocus("year")}
                />
              )}
            </Row>
          </FormGroup>
        </Col>
      </Row>
      <div className="flex hr-arrow">
        <hr />
        <button
          className="icon"
          onClick={(event) => {
            event.preventDefault();
            calculator(dayValue, monthValue, yearValue);
          }}
        >
          <ArrowIcon className="arrow" alt="Šípka" />
        </button>
      </div>
      <div>
        <Row className="flex-80">
          <div className="number">{age.years}</div>
          <div className="text">years</div>
        </Row>
        <Row className="flex-80">
          <div className="number">{age.months}</div>
          <div className="text">months</div>
        </Row>
        <Row className="flex-80">
          <div className="number">{age.days}</div>
          <div className="text">days</div>
        </Row>
      </div>
    </Form>
  );
}

export default Calculator;
