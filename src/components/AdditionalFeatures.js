import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className='additional-features'>
      <h4 className='title'>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol>
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem}
            formatPrice={props.formatPrice} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
