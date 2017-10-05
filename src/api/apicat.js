import React, { Component } from 'react';
import { Platform } from 'react-native';

const urlCat = "https://numpangiklan.com/json/?cats=";

export default function catIklan(limit) {

  return fetch(urlCat + limit)
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