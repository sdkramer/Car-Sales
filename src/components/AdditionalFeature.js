import React from 'react';
import { connect } from 'react-redux';
import { selectFeature } from '../Actions'

const AdditionalFeature = props => {
  // console.log('AF props:', props);
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {props.selectFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  // console.log('AdditionalFeature state:', state);
  
  return state;
}

export default connect(mapStateToProps, { selectFeature: selectFeature })(AdditionalFeature);
