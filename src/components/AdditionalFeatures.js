import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  console.log('AFs props:', props);
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id}
            buyItem={props.buyItem} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
console.log("AdditionalFeatures state: ", state);
return {
  additionalFeatures: state.car.additionalFeatures
}
}



export default connect(mapStateToProps)(AdditionalFeatures);
