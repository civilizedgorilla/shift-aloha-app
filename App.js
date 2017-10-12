import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
  handleOnPress = () => {
    alert('HELLO!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="Say Hello!"
            onPress={this.handleOnPress}
            color='white' />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c95456',
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer:{
    margin: 20
  }
});
