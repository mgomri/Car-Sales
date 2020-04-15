import React from 'react';


const AddedFeature = props => {
  
  return (
    
    <li className='added-li'>
      <button className="button is-danger" onClick={() => props.removeFeature(props.feature)}>Remove</button>
      <div className='feature-name'>
      <img className='icon is-medium' src={props.feature.icon_url} alt={props.feature.name}/>
      {'  '} {props.feature.name} 
       </div>
      
      {props.formatPrice(props.feature.price)}
    </li>
    
  );
};

export default AddedFeature;
