import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Camera from 'react-native-camera';

class TakePhoto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight
            onPress={this.takePicture.bind(this)}>
            <Text style={styles.capture}>
              CAPTURE
            </Text>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this._sendToHome(data);
      })
      .catch(err => console.error(err));
  }

  _sendToHome(data) {
    this.props.route.callback(data);
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default TakePhoto;
