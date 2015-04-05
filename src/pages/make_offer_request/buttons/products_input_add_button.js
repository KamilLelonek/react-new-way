import React from "react";

class ProductsInputAddButton extends React.Component {
  render() {
    return (
      <a className="waves-effect waves-light btn light-blue accent-2" onClick={ this.props.addProduct }>
        <i className="mdi-content-add left"></i>
         Add new product
      </a>
    );
  }
};

ProductsInputAddButton.propTypes = { addProduct: React.PropTypes.func };

export default ProductsInputAddButton;
