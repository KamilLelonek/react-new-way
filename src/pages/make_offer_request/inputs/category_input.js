import React from "react";

class CategoryInput extends React.Component {
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
