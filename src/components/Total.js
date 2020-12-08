import React from 'react';
import { connect } from  'react-redux';

import { findPriceTotal } from "./../Actions/actions";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    carPrice: state.car.price
  }
}

export default connect(mapStateToProps, { findPriceTotal })(Total);
