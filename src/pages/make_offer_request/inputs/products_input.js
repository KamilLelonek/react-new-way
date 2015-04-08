import React from "react";

import ProductInput           from "./product_input"
import ProductsInputAddButton from "../buttons/products_input_add_button"

class ProductsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productsIDs: [] };
  }

  resetState() {
     this.setState({ productsIDs: [] });
  }

  getProducts() {
    let references = this.refs;
    return Object.keys(references).map(reference_name => references[reference_name].getProduct());
  }

  getNewProductID() {
    return this.state.productsIDs.length;
  }

  addNewProduct() {
    this.setState({ productsIDs: this.state.productsIDs.concat(this.getNewProductID()) });
  }

  removeProduct(id) {
    this.setState({ productsIDs: this.state.productsIDs.remove(productID => productID === id) });
  }

  validate() {
    return new Promise(
             (resolve, reject) => {
               if (this.state.productsIDs.length === 0) {
                 reject("You must add at least one product!");
               } else {
                 resolve();
               }
             }
           );
  }

  render() {
    let products = this.state.productsIDs.map(
      product_id =>
        <ProductInput removeProduct={ this.removeProduct.bind(this) } categories={ this.props.categories } key={ product_id } ref={ product_id } id={ product_id } />
      );

    return (
      <div>
        { products }
        <ProductsInputAddButton addProduct={ this.addNewProduct.bind(this) } />
      </div>
    );
  }
};

ProductsInput.propTypes = { categories: React.PropTypes.array };

export default ProductsInput;
