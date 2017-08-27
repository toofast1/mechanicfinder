import React, { Component } from 'react';

import LogoBar from './components/LogoBar';
import SearchBox from './components/SearchBox';

class MechanicFinder extends Component {
  render() {
    return (
      <div>
        <LogoBar />
        <SearchBox />
      </div>
    );
  }
}

export default MechanicFinder;