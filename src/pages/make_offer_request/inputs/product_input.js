import React from "react";

import CategoryInput             from "./category_input"
import AmountInput               from "./amount_input"
import ProductsInputRemoveButton from "./product_input_remove_button"

class ProductInput extends React.Component {
  resetState() {
    console.log(this + " resetState");
  }

  render() {
    return (
      <div className="row">
        <div className="col s11">
          <CategoryInput categories={ this.props.categories } />
          <AmountInput />
        </div>
        <div className="col s1">
          <ProductsInputRemoveButton removeProduct={ this.props.removeProduct.bind(this, this.props.id) } />
        </div>
      </div>
    );
  }
};

ProductInput.propTypes = { categories: React.PropTypes.array };
ProductInput.propTypes = { removeProduct: React.PropTypes.func };
ProductInput.propTypes = { id: React.PropTypes.number };

export default ProductInput;
