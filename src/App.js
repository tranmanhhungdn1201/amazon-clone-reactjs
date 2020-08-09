import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import MainPage from './features/pages/Main';
import Checkout from './features/pages/Checkout';
import Header from './components/Headers';
import Login from './features/pages/Login';
import { auth } from './firebase';
import { useStateValue } from './features/StateProvider';

function App() {
  const [ {basket, user}, dispatch ] = useStateValue();

  useEffect(() => {
    const unsubscrise = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }

      return () => {
        unsubscrise();
      }
    })
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" component={Login}>
          </Route>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
