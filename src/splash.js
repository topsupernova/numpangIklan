import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, } from 'react-native';

export default class Splash extends Component {
  componentWillMount () {
    const navigator = this.props.navigator;
    setTimeout (() => {
        navigator.replace({
            name: 'Mainpage',
        });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.splashWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={{width:250, height:60}}
            source={require('./images/numpangiklan.png')}
          />
        </View>
        <Text style={styles.powered}>
          Powered by Topix
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#710b68',
  },
  powered: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '200',
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.6
  },
});
