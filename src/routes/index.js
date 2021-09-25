import { Route, Switch } from 'react-router';
import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashborad'

function Routes(){

  const [autenticated, setAutenticated] = useState(false)
  
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("@Doit:token"));
    if(token){
      return setAutenticated(true)
    }
  }, [autenticated])
  
  return(
  <Switch>
    <Route exact path="/">
      <Home autenticated={autenticated}/>
    </Route>
    <Route exact path="/signup">
      <SignUp autenticated={autenticated}/>
    </Route>
     <Route exact path="/login">
      <Login autenticated={autenticated}
             setAutenticated={setAutenticated}/>
    </Route>
    <Route exact path= "/dashboard">
      <Dashboard autenticated={autenticated}/>
    </Route>
  </Switch>
  )
}
export default Routes;
