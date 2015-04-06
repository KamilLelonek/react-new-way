import React from "react";

export default class NoDataComponent extends React.Component {
  render() {
    return(
      <div className="card-panel light-blue ">
        <span className="white-text">There are no offer requests made so far.</span>
      </div>
    )
  }
}
