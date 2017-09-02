import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LogoBar from './components/LogoBar';
import HomeContent from './components/HomeContent';
import SearchResults from './components/SearchResults';
import WorkshopProfile from './components/WorkshopProfile';

class MechanicFinder extends Component {
  render() {
    return (
      <div>
        <LogoBar />
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/buscar" component={SearchResults} />
          <Route path="/:workshop" component={WorkshopProfile} />
        </Switch>
      </div>
    );
  }
}

export default MechanicFinder;