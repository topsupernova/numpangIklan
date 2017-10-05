import React, { Component } from 'react';
import { Platform } from 'react-native';

const url = "https://numpangiklan.com/json/?kat=";

export default function fetchIklans(idx, limit) {

  return fetch(url + idx + '&limit=' + limit)
    .then(res => {
      return res.json();
    })
    .then(json => {
      return json.results;
    })
    .catch(error => {
      console.error(error);
    });

}