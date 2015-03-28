import React from "react";

import ProductInput           from "./product_input"
import ProductsInputAddButton from "./products_input_add_button"

class ProductsInput extends React.Component {
  resetState() {
    console.log(this + " resetState");
  }

  getNewProduct() {
    return <ProductInput removeProduct={ this.removeProduct.bind(this) } categories={ this.props.categories } key={ Math.random() } id={ Math.random() } />;
  }

  addNewProduct() {
    this.setState({ products: this.state.products.concat(this.getNewProduct()) });
  }

  removeProduct(id) {
    this.setState({ products: this.state.products.remove(product => product.props.id === id) });
  }

  componentWillMount() {
    this.setState({ products: [this.getNewProduct()] });
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
