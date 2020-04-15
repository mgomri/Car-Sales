import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className='added-featuress'>
      <h6 className='title'>Added features:</h6>
      {props.car.features.length ? (
        <ol>
          {props.car.features.map(el => (
            <AddedFeature key={el.id} feature={el} 
            removeFeature={props.removeFeature} 
            formatPrice={props.formatPrice}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
