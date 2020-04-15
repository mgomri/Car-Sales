import React from 'react';

const AdditionalFeature = props => {
  return (
    
    <li className='additional-li'>
      <button className="button  is-success" onClick={() => props.buyItem(props.feature)}>Add</button>
      <div className='feature-name'>
         <img className='icon is-medium' src={props.feature.icon_url} alt={props.feature.name}/>
         {' '}{props.feature.name} 
      </div>
      + {props.formatPrice(props.feature.price)}  
     
    </li>
    
  );
};

export default AdditionalFeature;
