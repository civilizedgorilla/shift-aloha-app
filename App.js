import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let img = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/41q1QAln%2BQL._AC_UL320_SR248,320_.jpg'
    }

    return (
      <Image source={img} style={{width: 300, height: 300}} />
    );
  }
}
