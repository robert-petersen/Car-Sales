import { ADD_FEATURE, REMOVE_FEATURE, FIND_PRICE_TOTAL } from "./../Actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FEATURE :
      console.log("Before ADD: ", state);
      const newFeature = state.additionalFeatures.filter(feature => feature.id === action.payload);
      return  ({ ...state, car: { ...state.car, features: [ ...state.car.features, newFeature ] } });
    case REMOVE_FEATURE :
      console.log("Before REMOVE: ", state);
      const allFeatures = state.car.features.map((feature) => {
        if( feature.id !== action.payload ) {
          return feature;
        }
      });
      return ({ ...state, car: { ...state.car, features: allFeatures } });
    case FIND_PRICE_TOTAL :
      console.log("Before FINDTOTAL: ", state);
      let total = 0;
      state.car.features.forEach((feature) => {
        total = total + feature.price;
      })
      return ({ ...state, additionalPrice: total });
    default :
      return state;
  }
}