import React from "react";

import CategoryInput             from "./category_input"
import AmountInput               from "./amount_input"
import ProductsInputRemoveButton from "../buttons/product_input_remove_button"
import Product                   from "../../../models/product"

class ProductInput extends React.Component {
  getProduct() {
    let categoryID = this.refs["category"].getID();
    let amount     = this.refs["amount"].getQuantity();
    return new Product(this.props.id, amount, categoryID);
  }

  render() {
    return (
      <div className="row">
        <div className="col s11">
          <CategoryInput ref="category" categories={ this.props.categories } />
          <AmountInput   ref="amount" />
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
