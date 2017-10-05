import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Splash from './splash';

export default class numpangIklan extends Component {
  render() {
    return (      
      <Splash/>
    );
  }
}

AppRegistry.registerComponent('numpangIklan', () => numpangIklan);
