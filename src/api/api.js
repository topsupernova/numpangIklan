import React, { Component } from 'react';
import { Platform } from 'react-native';

//const url = "https://randomuser.me/api/?results=";
const url = "https://numpangiklan.com/json/?results=";

export default function fetchIklan(limit) {

  return fetch(url + limit)
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

