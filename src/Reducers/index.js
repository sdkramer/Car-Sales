import { combineReducers } from 'redux';

import { FEATURE_SELECTED, FEATURE_REMOVED } from "../Actions";

const initialState = {
  additionalPrice: 0,
  car: {
    color: "black",
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

const carReducer = (state = initialState) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures
}
}

const selectedFeatureReducer = (state = initialState, action) => {
  if (action.type === FEATURE_SELECTED) {
    const { price } = action.payload.price;
    // if (!state.car.features.includes(action.payload)) {
      return {
...state, 
car: {
  ...state.car,
  features: [...state.car.features, action.payload]

}
}
    }
    return state;
  };

const removedFeatureReducer = (state = initialState, action) => {
  if (action.type === FEATURE_REMOVED) {
    const { price, id } = action.payload;
    return {
      ...state,
      additionalPrice: (state.additionalPrice -= price),
      car: {
        ...state.car,
        features: state.car.features.filter(feature => feature.id !== id)
      }
    };
  } else {
    return state;
  }
};

 

export default combineReducers({
  car: carReducer,
  selectedFeature: selectedFeatureReducer,
  removedFeature: removedFeatureReducer
});

