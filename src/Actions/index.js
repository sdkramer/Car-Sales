export const selectFeature = (feature) => {
  return {
    type: 'FEATURE_SELECTED',
    payload: feature
  };
};

export const removeFeature = (feature) => {
  return {
    type: 'FEATURE_REMOVED',
    payload: feature
  };
};

