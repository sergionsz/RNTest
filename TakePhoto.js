import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Camera from 'react-native-camera';

const backgroundColor = '#fff';
const textColor = '#000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor,
    borderRadius: 5,
    color: textColor,
    padding: 10,
    margin: 40,
  },
});

class TakePhoto extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  /**
   * Removes scene from navigator after executing the router's callback
   */
  sendToHome(data) {
    this.props.route.callback(data);
    this.props.navigator.pop();
  }

  /**
   * Takes a photo and sends the result object to home
   */
  takePicture() {
    this.camera.capture()
    .then((data) => {
      this.sendToHome(data);
    })
    .catch(err => { throw Error(err); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <TouchableHighlight onPress={this.takePicture} >
            <Text style={styles.capture}>
              CAPTURE
            </Text>
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }
}
TakePhoto.propTypes = {
  route: React.PropTypes.object,
  navigator: React.PropTypes.object,
};

export default TakePhoto;
