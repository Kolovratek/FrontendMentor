import React, { Fragment } from "react";

function Inputs() {
  return (
    <Fragment>
      <div class="inputs">
        <div>
          <div class="inputs-text">DAY</div>
          <input type="text" name="day" placeholder="DD" />
        </div>
        <div>
          <div class="inputs-text">MONTH</div>
          <input type="text" name="montg" placeholder="MM" />
        </div>
        <div>
          <div class="inputs-text">YEAR</div>
          <input type="text" name="year" placeholder="YY" />
        </div>
      </div>
      <div>
        <hr />
        <div class="icon">
          <img src="assets/images/icon-arrow.svg" alt="Šípka" />
        </div>
      </div>
    </Fragment>
  );
}

export default Inputs;
