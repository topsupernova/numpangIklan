import React, { Component } from 'react';
import { StyleSheet, View, Modal, Keyboard, Image, Alert, BackAndroid } from 'react-native';

import { SearchBar, Button } from 'react-native-elements';

/*import {
 AdMobBanner,
 AdMobInterstitial,
 PublisherBanner,
 AdMobRewarded
 } from 'react-native-admob';*/

import Row from './row';
import IklanDetailsView from './detail';

export default class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      iklan: null,
      iklanDetailsVisible: false,
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow (){

  }
  _keyboardDidHide (){

  }
  _splashPress() {
    this.props.navigator.push({
      name: 'Splash',
    });
  }
  _kategoriPress() {
    this.props.navigator.push({
      name: 'Kategori',
    });
  }
  _pasangPress() {
    this.props.navigator.push({
      name: 'Pasang',
    });
  }
  /*_pushNav(nav) {
    this.props.navigator.push({
      name: nav,
    });
  }
  _popNav() {
    this.props.navigator.pop();
    return false;
  }*/

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.leftBt}>
            <Button
              large
              icon={{name: 'menu'}}
              buttonStyle={{marginLeft: -2}}
              backgroundColor='#710b68'
              onPress={ () => this._kategoriPress() }
              title=''
            />
          </View>

          <View>
            <Image
              style={{width:150, height:30}}
              source={require('../images/numpangiklan.png')}
            />
          </View>

          <View style={styles.rightBt}>
            <Button
              large
              icon={{name: 'home'}}
              buttonStyle={{marginRight: -10}}
              backgroundColor='#710b68'
              onPress={ () => this._splashPress() }
              title='' />
          </View>
        </View>

        <View style={styles.textWrapper}>
          <SearchBar
            lightTheme
            placeholder={this.props.src ? this.props.src : 'Cari Iklan'}
            inputStyle={{paddingVertical: 5, color: '#333333',}}
            textInputRef="search"
            onChangeText={Keyboard.dismiss()}
            returnKeyType="go"
            onEndEditing={(e) => this._searchPress(e.nativeEvent.text)}
          />
        </View>

        <Row onIklanSelected={this._onIklanSelected.bind(this)} />

        <Modal animationType={"slide"}
               visible={this.state.iklanDetailsVisible}
               onRequestClose={function() {}}>
          <IklanDetailsView iklan={this.state.iklan} onClose={this._onCloseIklanDetails.bind(this)} />
        </Modal>

        <View style={styles.footerWrapper}>
          <View style={styles.buttonWrap}>
            <Button
              icon={{name: 'create', size: 24}}
              buttonStyle={{backgroundColor: '#710b68', borderRadius: 10, width: 300, height: 120}}
              onPress={ () => this._pasangPress() }
              title='Pasang Iklan'
            />
          </View>

          {/*<View style={styles.adWrap}>
           <AdMobBanner
           bannerSize="fullBanner"
           adUnitID="ca-app-pub-5434544225464970/4757883421"
           testDeviceID="EMULATOR"
           didFailToReceiveAdWithError={this.bannerError}
           />
           </View>*/}
        </View>
      </View>
    );
  }

  _searchPress(event) {
    //Alert.alert("R : " + event);
    this.props.navigator.push({
      name: 'Searchpage',
      passProps: {
        src: event,
      }
    });
  }

  _onIklanSelected(iklan) {
    this.setState({
      iklanDetailsVisible: true,
      iklan: iklan
    })
  }

  _onCloseIklanDetails() {
    this.setState({
      iklanDetailsVisible: false,
      iklan: null
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#710b68',
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  leftBt: {
    position: 'absolute',
    left:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBt: {
    position: 'absolute',
    right:0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textWrapper: {
    marginTop: 50,
    paddingHorizontal: 0,
  },
  textSearch: {
    fontSize: 15,
    padding: 5,
    height: 40,
    borderColor: 'grey',
    borderRadius: 5,
  },
  footerWrapper: {
    flex: 1,
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleFooter: {
    fontSize: 28,
    margin: 10,
    color: '#FFFFFF',
  },
  caption: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  buttonWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height:50,
    backgroundColor: '#710b68',
  },
  adWrap: {
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  }
});
