import { Route, Switch } from 'react-router';
import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashborad'

function Routes(){

  const [authenticated, setAuthenticated] = useState(false)
  
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("@Doit:token"));
    if(token){
      return setAuthenticated(true)
    }
  }, [authenticated])
  
  return(
  <Switch>
    <Route exact path="/">
      <Home authenticated={authenticated}/>
    </Route>
    <Route  path="/signup">
      <SignUp authenticated={authenticated}/>
    </Route>
     <Route  path="/login">
      <Login authenticated={authenticated}
             setAuthenticated={setAuthenticated}/>
    </Route>
    <Route  path= "/dashboard">
      <Dashboard authenticated={authenticated}/>
    </Route>
  </Switch>
  )
}
export default Routes;
