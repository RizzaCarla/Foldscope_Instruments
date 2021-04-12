import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPageContainer from './main/main_page_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <NavBarContainer/>
    <Switch>
      <Route exact path='/main' component={MainPageContainer}></Route>
      <Redirect to='/main' />
    </Switch>
  </div>
);

export default App;