import React, { Component } from 'react';
import { AppRegistry, NetInfo, Navigator, BackAndroid, View, Text, StyleSheet, } from 'react-native';

import Splash from './src/splash';
import Mainpage from './src/component/mainpage';
import Pasang from './src/component/pasang';
import Kategori from './src/component/kategori';
import Katlist from './src/component/katlist';
import Searchpage from './src/component/searchpage';

export default class numpangIklan extends Component {
  constructor(props) {
    super(props)
    this.navigator = null;

    this.handleBack = (() => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
        this.navigator.pop();
        return true; //avoid closing the app
      }
      return false; //close the app
    }).bind(this) //don't forget bind this, you will remenber anyway.

    this.state = {
      isConnected: null,
    };
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);

    NetInfo.isConnected.addEventListener(
      'change',
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({isConnected}); }
    );
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);

    NetInfo.isConnected.removeEventListener(
      'change',
      this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

  renderScene ( route, navigator ) {
    const routeName = route.name;

    if (routeName === 'Splash') {
      return (
        <Splash navigator={navigator}/>
      );
    }
    if (routeName === 'Mainpage') {
      return (
        <Mainpage navigator={navigator}/>
      );
    }
    if (routeName === 'Pasang') {
      return (
        <Pasang navigator={navigator}/>
      );
    }
    if (routeName === 'Kategori') {
      return (
        <Kategori navigator={navigator}/>
      );
    }
    if (routeName === 'Katlist') {
      return (
        <Katlist navigator={navigator} rowId={route.rowId} {...route.passProps} />
      );
    }
    if (routeName === 'Searchpage') {
      return (
        <Searchpage navigator={navigator} rowId={route.rowId} {...route.passProps} />
      );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  render () {
    if(this.state.isConnected) {
      return (
        <Navigator
          initialRoute={{name: 'Splash'}}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          ref={navigator => {this.navigator = navigator}}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Tidak ada koneksi internet!</Text>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#710b68',
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    opacity: 0.6,
  },
});

AppRegistry.registerComponent('numpangIklan', () => numpangIklan);
