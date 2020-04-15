import React from 'react';
import Total from './Total'


const Header = props => {
  
  return (
    <div className='header box'>
      <div className='im'>
        <img  src={props.car.image} alt={props.car.name} />
      </div>
      <div className='description'>
        <div >
          <h4 className='title'> {props.car.name}</h4>
       </div>
        <div>
        <h4>Base Price: {props.formatPrice(props.car.price)}</h4>
          <h4>Additional price: {props.formatPrice(props.additionalPrice)}</h4>
          <hr/>
        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice} 
        formatPrice={props.formatPrice}/>
        </div>
      </div>  
    </div>
  );
};

export default Header;
