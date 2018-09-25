import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // This is generally used while logging in a user
    this.props.history.push('/products');
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>Product Details - {id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
