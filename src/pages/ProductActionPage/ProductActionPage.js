import React from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: 0,
      status: false
    }
  }
  
  componentDidMount() {
    if (!this.isEmpty(this.props.match.params)) {
      let id = this.props.match.params.id;
      this.props.getProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.product) {
      this.setState({
        id: nextProps.product.id,
        name: nextProps.product.name,
        price: nextProps.product.price,
        status: nextProps.product.status
      });
    }
  }
  
  render() {
    const { name, price, status } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pt-3 pb-3">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  className="form-control"
                  type="text"
                  name="price"
                  value={price}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  id="status"
                  className="form-check-input"
                  type="checkbox"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                  checked={status}
                />
                <label htmlFor="status" className="form-check-label">In Stock</label>
              </div>
              <button className="btn btn-danger mr-3" type="button" onClick={this.props.history.goBack}>Back</button>
              <button className="btn btn-primary" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = (e) => {
    e.preventDefault();
    const { id, name, price, status } = this.state;
    if (id) {
      this.props.updateProduct(id, {
        name: name,
        price: price,
        status: status
      });
    } else {
      this.props.addProduct({
        name: name,
        price: price,
        status: status
      });
    }
    this.props.history.push('/products');
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    updateProduct: (id, product) => {
      dispatch(actUpdateProductRequest(id, product));
    },
    getProduct: (id) => {
      dispatch(actGetProductRequest(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
