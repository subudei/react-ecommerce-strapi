import React from "react";
import "./mainSection.styles.css";

import { withRouter } from "react-router-dom";
import Boxing10 from "../../assets/boxing.jpg";

function MainSection({ history }) {
  return (
    <div className="main__section__container">
      <div className="main__section__middle">
        <div className="main__section__image">
          <img src={Boxing10} alt="studio bag" className="ms__img" />
        </div>
        <div className="main__section__description">
          <h2>Sport bla bla bla</h2>
          <button onClick={() => history.push("/product/1")}>BAG</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);
