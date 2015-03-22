import React from "react";

import Product from "../models/product";

class ProductInfoComponent extends React.Component {
  render() {
    return(
      <div>
        <p>
          ProductInfoComponent
        </p>
      </div>
    )
  }
}

ProductInfoComponent.propTypes = { product: React.PropTypes.instanceOf(Product) };

export default ProductInfoComponent;
