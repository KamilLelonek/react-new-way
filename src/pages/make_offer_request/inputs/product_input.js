import React from "react";

import CategoryInput from "./category_input"
import AmountInput   from "./amount_input"

class ProductInput extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s11">
          <CategoryInput categories={ this.props.categories } />
          <AmountInput />
        </div>
        <div className="col s1">
          <a className="btn-floating btn-large waves-effect waves-light red">
            <i className="mdi-content-remove"></i>
          </a>
        </div>
      </div>
    );
  }
};

ProductInput.propTypes = { categories: React.PropTypes.array };

export default ProductInput;
