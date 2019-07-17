import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  render() {
    const { product, index } = this.props;
    let statusName = product.status ? 'In Stock' : 'Sold Out';
    let statusClass = product.status ? 'success' : 'dark';

    return (
      <tr>
        <td>{index}</td>
        <td>{`SP${product.id}`}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge badge-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/products/${product.id}/edit`} className="btn btn-primary mr-3">Edit</Link>
          <button className="btn btn-danger" type="button" onClick={() => this.onDelete(product.id)}>Delete</button>
        </td>
      </tr>
    );
  };

  onDelete = (id) => {
    if (confirm('Are you sure to delete?')) { // eslint-disable-line
      this.props.onDelete(id);
    }
  }
}

export default ProductItem;
