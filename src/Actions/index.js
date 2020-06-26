export const FEATURE_SELECTED = 'FEATURE_SELECTED';

export const selectFeature = (feature) => {
  return {
    type: 'FEATURE_SELECTED',
    payload: feature
  };
};

export const FEATURE_REMOVED = 'FEATURE_REMOVED';

export const removeFeature = (feature) => {
  return {
    type: 'FEATURE_REMOVED',
    payload: feature
  };
};

