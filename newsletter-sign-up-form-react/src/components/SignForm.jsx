import React, { useState, useEffect, Fragment } from "react";
import { Input, Label, Row, Col, Button } from "reactstrap";
import { ReactComponent as IconList } from "../assets/icon-list.svg";
import { ReactComponent as Illustration } from "../assets/illustration-sign-up-desktop.svg";
import { Link } from "react-router-dom";

import "./SignForm.css";

function SignForm() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@gmail\.com$/;
      const isValidEmail = emailRegex.test(email);
      setIsValid(isValidEmail);
    };

    validateEmail();
  }, [email]);

  return (
    <div className="main">
      <div className="card">
        <div className="card-div">
          <Row className="row">
            <Col className="col-1">
              <div>
                <h1 className="first-h1">Stay updated!</h1>
              </div>
              <div className="center">
                <p className="description">
                  Join 60,000+ product managers receiving monthly
                  <br />
                  updates on:
                </p>
              </div>
              <div>
                <ul>
                  <li className="li-gap">
                    <IconList />
                    Product discovery and building what matters
                  </li>
                  <li className="li-gap">
                    <IconList />
                    Measuring to ensure updates are a success
                  </li>
                  <li className="li-gap">
                    <IconList />
                    And much more!
                  </li>
                </ul>
              </div>
              <div>
                {isValid && (
                  <Fragment>
                    <Row>
                      <Label className="label">Email address</Label>
                    </Row>
                    <Input
                      type="text"
                      placeholder="email@company.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="button">
                      <Link
                        to={`/success?value=${email}`}
                        className="success-link"
                      >
                        Subscribe to monthly newsletter
                      </Link>
                    </Button>
                  </Fragment>
                )}
                {!isValid && (
                  <Fragment>
                    <Row className="flex">
                      <Label className="label">Email address</Label>
                      <Label className="label bad-label">
                        Valid email required
                      </Label>
                    </Row>
                    <Input
                      type="text"
                      placeholder="email@company.com"
                      className="input bad-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="button disabled" disabled>
                      Subscribe to monthly newsletter
                    </Button>
                  </Fragment>
                )}
              </div>
            </Col>
            <Col className="col-2">
              <Illustration />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
