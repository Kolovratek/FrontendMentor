import React from "react";
import { ReactComponent as IconSuccess } from "../assets/icon-success.svg";
import "./SuccessSubscribe.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";

function SuccessSubscribe() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("value");

  return (
    <div className="main">
      <div className="small-card">
        <div className="small-card-div">
          <IconSuccess className="icon" />
          <h1 className="small-h1">
            Thanks for <br /> subscribing!
          </h1>
          <p>
            A confirmation email has been sent to <br />{" "}
            <strong>{email}. </strong>
            Please open it and click <br /> the button inside to confirm your
            subscription.{" "}
          </p>
          <Button className="button-2">
            <Link to="/" className="home-link">
              Dissmiss message
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SuccessSubscribe;
