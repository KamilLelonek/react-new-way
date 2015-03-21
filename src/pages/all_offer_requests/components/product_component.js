import React from "react";

import Product from "../models/product";

class ProductComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header"><i className="mdi-image-filter-drama"></i>ProductComponent</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </div>
    )
  }
}

ProductComponent.propTypes = { products: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Product)) };

export default ProductComponent;
