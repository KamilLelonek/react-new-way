import React from "react";

class ProductsInputRemoveButton extends React.Component {
  render() {
    return (
      <a className="btn-floating btn-large waves-effect waves-light red" onClick={ this.props.removeProduct }>
        <i className="mdi-content-remove"></i>
      </a>
    );
  }
};

ProductsInputRemoveButton.propTypes = { removeProduct: React.PropTypes.func };

export default ProductsInputRemoveButton;
