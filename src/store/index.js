
import { createStore, combineReducers, applyMiddleware } from 'redux';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

//import category from './categories';
import cart from '../components/cart/cart';

//let reducers = combineReducers({ category, cart });
let reducers = combineReducers ({ cart}); 

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

