/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
// var pokegoScan = require('pokego-scanner');
// import pokegoScan from 'pokego-scanner';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class mapsAttempt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 39.749632,
            longitude: -105.000363,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0201,
          }}
        >
        <MapView.Marker
    //coordinate={marker.latlng}
    coordinate={{longitude:-105.000363, latitude:39.749632 }}
    //title={marker.title}
    title={"title"}
    //description={marker.description}
    description={"description"}
  />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
});

AppRegistry.registerComponent('mapsAttempt', () => mapsAttempt);
