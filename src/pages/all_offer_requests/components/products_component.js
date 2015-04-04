import React from "react";

import Product          from "../../../models/product";
import ProductComponent from "./product_component";

class ProductsComponent extends React.Component {
  componentWillMount() {
    this.products = this.props.products.map(product => <ProductComponent product={ product } key={ product.id } />)
  }

  render() {
    return(
      <li>
        <ul className="collapsible popout" data-collapsible="accordion">
          { this.products }
        </ul>
      </li>
    )
  }
}

ProductsComponent.propTypes = { products: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Product)) };

export default ProductsComponent;
