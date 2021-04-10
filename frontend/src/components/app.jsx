import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPageContainer from './main/main_page_container';

const App = () => (
  <Switch>
    <Route exact path='/main' component={MainPageContainer}></Route>
    <Redirect to='/main' />
  </Switch>
);

export default App;