import React from "react";

import Product          from "../../../models/product";
import ProductComponent from "./product_component";

class ProductsComponent extends React.Component {
  componentWillMount() {
    this.products = this.props.products.map(product => <ProductComponent product={ product } key={ product.id } />)
  }

  render() {
    return(
      <div>
        { this.products }
      </div>
    )
  }
}

ProductsComponent.propTypes = { products: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Product)) };

export default ProductsComponent;
