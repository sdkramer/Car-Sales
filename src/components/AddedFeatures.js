import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';


const AddedFeatures = props => {
  console.log('addfs props', props);
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("addfss state: ", state);
  return {
    car: state.car.car,
    features: state.car.car.features
  }
}


export default connect(mapStateToProps)(AddedFeatures);
