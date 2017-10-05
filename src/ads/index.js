import React, { Component } from 'react';
import { NativeModules, } from 'react-native';

import AdMobBanner from './ads/RNAdMobBanner';
import AdMobInterstitial from './ads/RNAdMobInterstitial';
import PublisherBanner from './ads/RNPublisherBanner';
import AdMobRewarded from './ads/RNAdMobRewarded';

module.exports = { AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded };
