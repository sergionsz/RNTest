import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import Map from './Map';

const backgroundColor = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  },
  photo: {
    width: 200,
    height: 200,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

/**
 * Dispatches the action to update geoposition in the store
 * @param  {function} dispatch function of redux that dispatches actions
 */
function updatePosition(dispatch) {
  navigator.geolocation.getCurrentPosition(
    location => {
      dispatch({
        type: 'UPDATE_POSITION',
        position: location,
      });
    },
    err => { throw Error(err); },
    {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 1000,
    }
  );
}

/**
 * Adds a new scene to navigator to take the photo
 * Then, this dispatches an action to update the photo path in the store
 * @param  {[type]} navigator [description]
 * @param  {[type]} dispatch  [description]
 * @return {[type]}           [description]
 */
function goTakePhoto(navigator, dispatch) {
  navigator.push({
    name: 'TakePhoto',
    callback: (data) => dispatch({
      type: 'UPDATE_PHOTO',
      photoPath: data.path,
    }),
  });
}

const Home = ({ navigator, photo, currentPosition, dispatch }) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        updatePosition(dispatch);
        goTakePhoto(navigator, dispatch);
      }}
    >
      <Text style={styles.welcome}>Take Photo</Text>
    </TouchableHighlight>
    { photo !== '' ?
      <Image source={{ uri: photo }} style={styles.photo} /> :
      null
    }
    { {}.hasOwnProperty.call(currentPosition, 'coords') ?
      (<View>
        <Text>Latitude: {currentPosition.coords.latitude}</Text>
        <Text>Longitude: {currentPosition.coords.longitude}</Text>
        <Map coords={currentPosition.coords} />
      </View>) :
      null
    }
  </View>
  );
Home.propTypes = {
  navigator: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  photo: React.PropTypes.string,
  currentPosition: React.PropTypes.object,
};

/**
 * A function to use with react-redux's connect, this creates an association
 * between props in Home and the state in the store
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function mapStateToProps(state) {
  return {
    photo: state.photoPath,
    currentPosition: state.currentPosition,
  };
}

/**
 * Wrapper component created from react-redux's connect method
 * (See mapStateToProps)
 * @type {[type]}
 */
const HomeWrapper = connect(
  mapStateToProps
)(Home);

export default HomeWrapper;
