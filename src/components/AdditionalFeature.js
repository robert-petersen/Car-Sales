import React from 'react';
import { connect } from  'react-redux';

import { addFeature, findPriceTotal } from "./../Actions/actions";

const AdditionalFeature = props => {
  const handleAddClick = () => {
    console.log("feature id: ", props.feature.id);
    props.addFeature(props.feature.id);
    props.findPriceTotal();
    console.log("After Add Click: ", props.car.features);
    console.log("After Add Click: ", props.feature.name);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={handleAddClick}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
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

export default connect(mapStateToProps, { addFeature, findPriceTotal })(AdditionalFeature);
