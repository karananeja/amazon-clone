import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51JcYMnSAh3BoVrktboNuxj47NHVQ2RrlvR1RS9mZZWZsiqy5l2jw4bxInbPCz3XdWgcozVzlE2OxNHywsvAyRO7L00A4Oo5lHr'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
          <Route path='/checkout'>
            {/* Header */}
            <Header />
            {/* Checkout */}
            <Checkout />
          </Route>
          <Route path='/login'>
            {/* Login */}
            <Login />
          </Route>
          <Route path='/payment'>
            {/* Header */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* Payment */}
          </Route>
          <Route>
            {/* Header */}
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
