import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Keyboard, Alert, ScrollView, TouchableHighlight } from 'react-native';

import { Button } from 'react-native-elements';

/*import {
 AdMobBanner,
 AdMobInterstitial,
 PublisherBanner,
 AdMobRewarded
 } from 'react-native-admob';*/

export default class Kategori extends Component {
  _mainPress() {
    this.props.navigator.pop();
    return false;
  }
  _splashPress() {
    this.props.navigator.push({
      name: 'Splash',
    })
  }
  _pasangPress() {
    this.props.navigator.push({
      name: 'Pasang',
    });
  }

  render() {
    return (
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<View style={styles.leftBt}>
						<Button
							large
							icon={{name: 'chevron-left', size: 40}}
							buttonStyle={{marginLeft: -5}}
							backgroundColor='#710b68'
							onPress={ () => this._mainPress() }
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

        <View style={{marginTop: 70, marginBottom: 70,}}>
          <ScrollView style={styles.rowWrapper}>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(16)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Alat Musik</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(5)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Buku</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(4)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>CD & DVD</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(2)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Elektronik</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(3)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Fashion</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(8)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Flora & Fauna</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(7)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Furniture</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(1)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Handphone & Aksesoris</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(21)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Informasi</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(6)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Internet</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(14)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Jasa</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(25)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Kamera & Aksesoris</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(11)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Komputer</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(12)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Lowongan</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(13)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Mesin</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(20)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Olahraga</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(9)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Otomotif</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(17)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Perabot Rumah Tangga</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(19)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Perhiasan</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(10)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Properti</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(24)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Rupa-rupa</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(15)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Seni & Antik</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(23)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Tour & Travel</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={80} underlayColor={"#FFFFFF"} onPress={() => this._onCatSelected(22)} style={{margin: 5}}>
              <View style={{padding: 5}}><Text style={styles.textRow}>Wirausaha</Text><View style={styles.separator}/></View>
            </TouchableHighlight>
          </ScrollView>
        </View>

				{/*<Rowcat onCatSelected={this._onCatSelected.bind(this)} />*/}

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
					 <AdMobInterstitial
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

  _onCatSelected(cats) {
    /*Alert.alert(
      "Selected ID : " + cats.id,
    )*/
    this.props.navigator.replace({
      name: 'Katlist',
      passProps: {
        rowId: cats,
        //rowId: cats.id,
        //rowMod: cats.val,
      }
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
    padding: 10,
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
  },
  textRow: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
});