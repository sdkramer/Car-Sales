import React from 'react';
import { connect } from 'react-redux';
import { selectFeature, removeFeature } from "./Actions";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({store, additionalPrice, additionalFeatures, selectFeature, removeFeature }) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

 
  

  const remove = feature => {
    removeFeature(feature);
  }

const buyItem = feature => {
  selectFeature(feature);
}

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures remove={remove}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={store} additionalFeatures={additionalFeatures}/>
        <Total additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { selectFeature, removeFeature })(App);
