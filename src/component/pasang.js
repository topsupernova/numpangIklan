import React, { Component } from 'react';
import { StyleSheet, View, Image, Keyboard, Text, ScrollView, TextInput } from 'react-native';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'
import { Button } from 'react-native-elements';

/*import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob';*/

export default class Pasang extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: {
        nama: null,
        email: null,
        telepon: null,
        kota: null,
        judul: null,
        kategori: null,
        deskripsi: null,
        tos: false,
      }
    }
  }

  _mainPress() {
    this.props.navigator.pop();
    return false; 
  }
  _splashPress() {
    this.props.navigator.push({
      name: 'Splash', 
    });
  }

	render() {
    const { fullName, tos, gender } = this.state.form
    console.log('render', this.state.form)
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
	        <View style={styles.textWrapper}>
	        	<Text style={{fontSize:20, fontWeight:'bold'}}>GRATIS Pasang Iklan</Text>
	        </View>

          <ScrollView>
            <GiftedForm
              formName='pasangForm'
              openModal={(route) => {
                this.props.navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
              }}
              clearOnClose={false} // delete the values of the form when unmounted
              defaults={{
                /*
                 username: 'Farid',
                 'gender{M}': true,
                 password: 'abcdefg',
                 country: 'FR',
                 birthday: new Date(((new Date()).getFullYear() - 18)+''),
                 */
              }}

              validators={{
                nama: {
                  title: 'Full name',
                  validate: [{
                    validator: 'isLength',
                    arguments: [1, 23],
                    message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                  }]
                },
                email: {
                  title: 'Email',
                  validate: [{
                    validator: 'isLength',
                    arguments: [6, 255],
                  },{
                    validator: 'isEmail',
                  }]
                },
                kota: {
                  title: 'Kota',
                  validate: [{
                    validator: 'isLength',
                    arguments: [3, 50],
                    message: '{TITLE} minimal {ARGS[0]} dan maksimal {ARGS[1]} karakter'
                  },{
                    validator: 'matches',
                    arguments: /^[a-zA-Z]*$/,
                    message: '{TITLE} hanya berisi alphabet'
                  }]
                },
                telepon: {
                  title: 'Telepon/Whatsapp',
                  validate: [{
                    validator: 'isLength',
                    arguments: [5, 20],
                    message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                  },{
                    validator: 'matches',
                    arguments: /^[0-9]*$/,
                    message: '{TITLE} hanya berisi nomor'
                  }]
                },
                deskripsi: {
                  title: 'Deskripsi Iklan',
                  validate: [{
                    validator: 'isLength',
                    arguments: [0, 2000],
                    message: '{TITLE} minimal {ARGS[0]} dan maksimal {ARGS[1]} karakter'
                  }]
                },
              }}
            >

              <GiftedForm.SeparatorWidget />
              <GiftedForm.TextInputWidget
                name='nama'
                title='Nama'
                placeholder='Nama'
                clearButtonMode='while-editing'
              />

              <GiftedForm.TextInputWidget
                name='email' // mandatory
                title='Email'
                placeholder='example@gmail.com'
                keyboardType='email-address'
              />

              <GiftedForm.TextInputWidget
                name='kota'
                title='Kota'
                placeholder='Kota'
                clearButtonMode='while-editing'
              />

              <GiftedForm.TextInputWidget
                name='telepon'
                title='Telepon'
                placeholder='Telepon/Whatsapp'
                clearButtonMode='while-editing'
                onChangeText={Keyboard.dismiss()}
              />

              <GiftedForm.TextInputWidget
                name='judul'
                title='Judul Iklan'
                placeholder='Judul Iklan'
                clearButtonMode='while-editing'
              />

              <GiftedForm.ModalWidget
                title='Kategori'
                displayValue='kategori'
              >
                <GiftedForm.SeparatorWidget />
                <GiftedForm.SelectWidget name='kategori' title='Kategori' multiple={false}>
                  <GiftedForm.OptionWidget title='Female' value='F'/>
                  <GiftedForm.OptionWidget title='Male' value='M'/>
                </GiftedForm.SelectWidget>
              </GiftedForm.ModalWidget>

              <GiftedForm.ModalWidget
                title='Deskripsi'
                displayValue='deskripsi'
                scrollEnabled={true}
              >
                <GiftedForm.SeparatorWidget/>
                <GiftedForm.TextAreaWidget
                  name='deskripsi'
                  autoFocus={true}
                  placeholder='Deskripsi'
                />
              </GiftedForm.ModalWidget>

              <GiftedForm.SubmitWidget
                title='Submit'
                widgetStyles={{
                  submitButton: {
                    backgroundColor: '#f39c12',
                  }
                }}
                onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                  if (isValid === true) {
                    // prepare object
                    //values.gender = values.gender[0];
                    //values.birthday = moment(values.birthday).format('YYYY-MM-DD');

                    /* Implement the request to your server using values variable
                     ** then you can do:
                     ** postSubmit(); // disable the loader
                     ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
                     ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
                     ** GiftedFormManager.reset('pasangForm'); // clear the states of the form manually. 'pasangForm' is the formName used
                     */
                  }
                }}
              />

              <GiftedForm.HiddenWidget name='tos' value={true} />
            </GiftedForm>

          </ScrollView>

	        <View style={styles.footerWrapper}>
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
    marginTop: 60,
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
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  viewList: {
    position: 'absolute',
    top: 108,
    bottom: 50,
    left: 0,
    right: 0,
  },
});