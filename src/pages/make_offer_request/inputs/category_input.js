import React from "react";

class CategoryInput extends React.Component {
  getID() {
    let $element = $(React.findDOMNode(this));
    let $select  = $element.find("select");
    let value    = $select.val();
    return value;
  }

  componentWillMount() {
    this.categories =
      this.props.categories.map(
        category =>
          <option value={ category.id } key={ category.id }>{ category.name }</option>
      )
  }

  componentDidMount() {
    $(React.findDOMNode(this)).find('select').material_select();
  }

  render() {
    return (
      <div>
        <label>Category</label>
        <select defaultValue="Select category">
          { this.categories }
        </select>
      </div>
    );
  }
};

CategoryInput.propTypes = { categories: React.PropTypes.array };

export default CategoryInput;
