import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, BackAndroid } from 'react-native';

import { Button, Icon, SocialIcon } from 'react-native-elements';
import MyWebView from 'react-native-webview-autoheight';
//import FontAwesome, { Icons } from 'react-native-fontawesome';
import Icons from '../api/FontAwesomeIcons';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';


export default class IklanDetailsView extends Component {
  openWA(phone) {
    Linking.openURL('whatsapp://send?phone=+62'+phone);
  }

  render() {
    const iklan = this.props.iklan;
    const customStyle = "<style>p, div, span {font-size:16px !important;} div {width: 97%;}</style>";
    const gambar = iklan.image + '?rand=' + iklan.pid + new Date().getTime();

    let btnWA = null;
    if(iklan.telepon){
      btnWA = <Button
        buttonStyle={{backgroundColor: '#710b68', borderRadius: 25}}
        title={iklan.telepon} icon={{name: 'phone', size: 22}} onPress={ () => this.openWA(iklan.telepon) } 
      />;
    }

    return (
      <View style={{flex: 1, margin: 0, padding: 0, flexDirection: 'column'}}>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-end', zIndex: 100, height: 40,
          marginRight: -25, padding: 0, position: 'absolute', top: 0, right: -25}}>
          <Button onPress={this._close.bind(this)}
                  icon={{name: 'close', buttonStyle: styles.btnClose, size: 30}}
                  backgroundColor='#FFC108'
                  title=""
          />
        </View>
        <ScrollView>
          <View style={styles.canvas_container}>
            <Image
              resizeMode="contain"
              source={{uri: gambar, cache: 'only-if-cached'}}
              style={styles.canvas}
              indicator={ProgressBar}
            />
          </View>
          <View style={{padding: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: '#710b68'}}>
              {iklan.judul.replace(/&quot;/g, " ").replace(/&ndash;/g, " ").replace(/&amp;/g, "&").replace(/&gt;/g, "").replace(/\//g, "").replace(/&lt/g, "")}
              </Text>
            <Text style={{fontSize: 14, lineHeight: 22, paddingTop: 6, textAlign: 'left', fontFamily: 'FontAwesome', marginBottom: 10}}>
              {Icons.userO}  {iklan.nama}{"\n"}
              {Icons.mapMarker}  {iklan.kota}
            </Text>
            {/*<SocialIcon
              title={iklan.telepon}
              button
              type='facebook'
            />*/}
            {btnWA}
          </View>
          <View style={{padding: 10, margin: 0,}}>
            <MyWebView
              style={{padding: 0, margin: 0}}
              source={{html: customStyle + '<div>' + iklan.isi + '</div>'}}
              startInLoadingState={true}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  _close() {
    this.props.onClose();
    return true;
  }

}

const styles = StyleSheet.create({
  canvas_container: {
    flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#E4E4E4',
    position: 'relative', top: 0, padding: 0, marginBottom: 0
  },
  canvas: {
    width: 360, height: 360, position: 'relative', top: 0, left: 0, bottom: 0, right: 0,
  },
  btnClose: {
    fontSize: 28, color: '#333333', textAlign: 'center',
  },
});