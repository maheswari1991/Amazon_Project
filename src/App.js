import React, {useEffect} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Reducer/StateProvider';
import Payment from './Component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  'pk_test_51HZDIqC4DEnnOjjwRgP057uULonq8mnPp9h5oJoCOiGljIU9hZx7ZlU7ESXSSC7HPBpCk2osyVQSTLi9NDx8hFyL00TJzsvAIr'
);

function App() {


  const [{} , dispatch] = useStateValue();

  useEffect(() =>{
//will only rund when the app component loads...
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        console.log('THE USER IS >>>>', authUser);

        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user logout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])

  return (
<Router>
<div className="App">
  <Switch>
    <Route path="/Login">
      <Login />
      </Route>
      <Route exact path="/">
      <Header />

        <Home />
      </Route>

      <Route exact path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>
      <Route exact path="/checkout">
      <Header />

      <Checkout />
      </Route>
    
  </Switch>
    </div>
  
  </Router>
  );
}

export default App;
