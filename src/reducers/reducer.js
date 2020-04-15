import { ADD_FEATURE } from '../actions/actions';
import { REMOVE_FEATURE } from '../actions/actions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, icon_url:'https://image.flaticon.com/icons/svg/638/638465.svg' },
      { id: 2, name: 'Racing detail package', price: 1500, icon_url:'https://image.flaticon.com/icons/svg/62/62499.svg' },
      { id: 3, name: 'Premium sound system', price: 500, icon_url:'https://image.flaticon.com/icons/svg/84/84922.svg' },
      { id: 4, name: 'Rear spoiler', price: 250, icon_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVVwiS1-rXoviLvtCZZE5np2586khnIWQzFeexNZJ2C1Ylj66v&usqp=CAU' }
    ]
  };

  export const reducer = (state = initialState, action) => {
      
      switch(action.type){
          
        case ADD_FEATURE :
            return {
                    ...state, 
                    additionalPrice: state.additionalPrice + action.payload.price,
                    car : {
                        ...state.car, 
                        features: [...state.car.features, action.payload]
                    },
                    additionalFeatures: state.additionalFeatures.filter(el => el !== action.payload)
            }

          case REMOVE_FEATURE:
            return {
              ...state,
              additionalPrice: state.additionalPrice - action.payload.price,
              car: {
                ...state.car, 
                features: state.car.features.filter (el => el !== action.payload)
              },
              additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default:
            return state;
      }
  }