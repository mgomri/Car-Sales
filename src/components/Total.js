import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Price: {props.formatPrice(props.car.price + props.additionalPrice)}</h4>
    </div>
  );
};

export default Total;
