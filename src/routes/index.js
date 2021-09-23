import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

function Routes(){
  return(
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/singup">
      <SignUp/>
    </Route>
  </Switch>
  )
}
export default Routes;
