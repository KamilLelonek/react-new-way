import React from "react";

import Category from "../models/category"

class CategoryComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header">
          <i className="mdi-action-shopping-basket"></i>
          CategoryComponent
        </div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </div>
    )
  }
}

CategoryComponent.propTypes = { category: React.PropTypes.instanceOf(Category) };

export default CategoryComponent;
