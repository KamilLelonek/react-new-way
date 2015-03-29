import React from "react";

import Category from "../../../models/category"

class CategoryComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header">
          <i className="mdi-action-shopping-basket"></i>
          CategoryComponent
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <a className="collection-item">Name<span className="badge">{ this.props.category.name }</span></a>
            <a className="collection-item">OZ capacity<span className="badge">{ this.props.category.oz_capacity }</span></a>
          </ul>
        </div>
      </div>
    )
  }
}

CategoryComponent.propTypes = { category: React.PropTypes.instanceOf(Category) };

export default CategoryComponent;
