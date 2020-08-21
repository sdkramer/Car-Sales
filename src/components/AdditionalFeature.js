import React from 'react';

// import { selectFeature } from '../Actions'

const AdditionalFeature = props => {
  // console.log('AF props:', props);
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {props.buyItem(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;
