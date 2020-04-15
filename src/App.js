import React from 'react';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';


import { connect } from 'react-redux';
import { addFeature } from './actions/actions';
import { removeFeature } from './actions/actions';

const App = (props) => {
 

  const removeFeature = item => {
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  const formatPrice = price =>{
    let priceString = price.toString();
    let Length = priceString.length;
    
    if(Length > 3){
      return '$' + priceString.slice(0, Length-3) + ',' + priceString.slice(Length-3, Length)
    }
    else if(priceString === '0'){
      return priceString;
    }
    else return ('$' + priceString);

  }

  return (
    <div className="App">
      
        <Header 
        car={props.state.car} 
        additionalPrice={props.state.additionalPrice}
        formatPrice={formatPrice} />
     

   <div className='features'>
      <div className='box additional'>
          <AdditionalFeatures 
          additionalFeatures={props.state.additionalFeatures} 
          buyItem={buyItem} 
          formatPrice={formatPrice} /> 
      </div>
      <div className='box added'> 
          <AddedFeatures 
          car={props.state.car} 
          removeFeature={removeFeature}
          formatPrice={formatPrice} />
     </div>
     </div>
       
      </div>
    
  );
};

const mapStateToProps = state => {
  return{
    state: state
  }
}
export default connect(mapStateToProps, {addFeature, removeFeature} )(App);
