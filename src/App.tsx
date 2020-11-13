import React from 'react';
import Nav from './components/nav';
import Home from './components/home'
import Projects from './components/projects';
import Contents from './components/projectContents';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/projects/:company" component={Contents}/>
        {/* <Route path="/partners" component={Partners}/> */}
      </Switch>
    </div>
  )
}
export default App;
