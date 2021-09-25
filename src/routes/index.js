import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Routes(){
  return(
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/signup">
      <SignUp/>
    </Route>
     <Route exact path="/login">
      <Login/>
    </Route>
  </Switch>
  )
}
export default Routes;
