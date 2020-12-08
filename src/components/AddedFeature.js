import React from 'react';
import { connect } from  'react-redux';

import { removeFeature, findPriceTotal } from "./../Actions/actions";

const AddedFeature = props => {
  const handleRemoveClick = () => {
    console.log("feature id: ", props.feature.id);
    props.removeFeature(props.feature.id);
    findPriceTotal();
    console.log("After Remove Click: ", props.car.features);
    console.log("After Remove Click: ", props.feature.name);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={handleRemoveClick}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect( mapStateToProps, { removeFeature, findPriceTotal })(AddedFeature);
