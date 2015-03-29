import React from "react";

import Product from "../../../models/product";

class ProductInfoComponent extends React.Component {
  render() {
    return(
      <div>
        <ul className="collection">
          <a className="collection-item">Quantity<span className="badge">{ this.props.product.quantity }</span></a>
        </ul>
      </div>
    )
  }
}

ProductInfoComponent.propTypes = { product: React.PropTypes.instanceOf(Product) };

export default ProductInfoComponent;
