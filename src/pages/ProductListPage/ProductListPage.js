import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';
import ProductList from '../../components/Product/ProductList';
import ProductItem from '../../components/Product/ProductItem';

class ProductListPage extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pt-3 pb-3">
            <Link to="/products/add" className="btn btn-info mb-3">Add Product</Link>
            <ProductList>
              {this.showProducts(this.props.products)}
            </ProductList>
          </div>
        </div>
      </div>
    );
  }

  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index + 1}
            onDelete={this.onDelete}
          />
        )
      });
    }
    return result;
  };

  onDelete = (id) => {
    this.props.deleteProduct(id);
  };
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    deleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
