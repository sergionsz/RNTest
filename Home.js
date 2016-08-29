import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {path: '', currentPosition: ''};
    this._updateData = this._updateData.bind(this);
    this._getPhoto = this._getPhoto.bind(this);
    this._getCurrentPosition = this._getCurrentPosition.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
            this._goTakePhoto();
          }}>
          <Text style={styles.welcome}>Take Photo</Text>
        </TouchableHighlight>
        {this._getPhoto()}
        {this._getPosition()}
      </View>
    )
  }

  _getPosition() {
    if (this.state.currentPosition !== '') {
      return (<View>
        <Text>Latitude: {this.state.currentPosition.coords.latitude}</Text>
        <Text>Longitude: {this.state.currentPosition.coords.longitude}</Text>
      </View>)
    }
  }

  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      location => {
        console.log(location);
        this.setState({currentPosition: location});
      },
      err => this.setState({currentPosition: err}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  _getPhoto() {
    console.log('_getPhoto', this.state.path);
    if(this.state.path !== '') {
      return (<Image source={{uri: this.state.path}} style={styles.photo}/>);
    }
  }

  _goTakePhoto() {
    this.props.navigator.push({
      name: 'TakePhoto',
      callback: this._updateData
    });
  }

  _updateData(data) {
    this.setState(data);
    this._getCurrentPosition();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  photo: {width: 200, height: 200},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
