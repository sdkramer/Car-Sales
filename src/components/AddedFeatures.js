import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';


const AddedFeatures = props => {
  console.log('addfs props', props);
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {/* {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={props.remove}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("addfss state: ", state);
}


export default connect(mapStateToProps)(AddedFeatures);
