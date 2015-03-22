import React from "react";


import Product              from "../models/product";
import CategoryComponent    from "./category_component";
import ProductInfoComponent from "./product_info_component";

class ProductComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header">
          <i className="mdi-maps-local-grocery-store"></i>
          ProductComponent
        </div>
        <div className="collapsible-body">
          <ProductInfoComponent product={ this.props.product }/>
          <CategoryComponent category={ this.props.product.category }/>
        </div>
      </div>
    )
  }
}

ProductComponent.propTypes = { product: React.PropTypes.instanceOf(Product) };

export default ProductComponent;
