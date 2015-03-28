import React from "react";

import ProductInput           from "./product_input"
import ProductsInputAddButton from "./products_input_add_button"

class ProductsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  resetState() {
     this.setState({ products: [] });
  }

  getNewProduct() {
    let product_id = Math.random();
    return <ProductInput removeProduct={ this.removeProduct.bind(this) } categories={ this.props.categories } key={ product_id } id={ product_id } />;
  }

  addNewProduct() {
    this.setState({ products: this.state.products.concat(this.getNewProduct()) });
  }

  removeProduct(id) {
    this.setState({ products: this.state.products.remove(product => product.props.id === id) });
  }

  render() {
    return (
      <div>
        { this.state.products }
        <ProductsInputAddButton addProduct={ this.addNewProduct.bind(this) } />
      </div>
    );
  }
};

ProductsInput.propTypes = { categories: React.PropTypes.array };

export default ProductsInput;
