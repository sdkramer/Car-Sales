import React from 'react';
import { connect } from 'react-redux';
import { selectFeature } from '../Actions';

// import { selectFeature } from '../Actions'

const AdditionalFeature = props => {
  console.log('AF props:', props);
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {props.buyItem(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log("AF state: ", state);
  return {

  }
};

const mapDispatchToProps = { selectFeature };


export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
