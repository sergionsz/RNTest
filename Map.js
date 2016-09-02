import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  map: {
    width: 200,
    height: 200,
  },
});

const latitudeDelta = 0.0222;
const longitudeDelta = 0.0222;

const Map = ({ coords }) =>
(<MapView
  style={styles.map}
  region={{
    latitude: coords.latitude,
    longitude: coords.longitude,
    latitudeDelta,
    longitudeDelta }}
>
  <MapView.Marker
    coordinate={{
      latitude: coords.latitude,
      longitude: coords.longitude }}
  />
</MapView>);
Map.propTypes = {
  coords: React.PropTypes.object,
};

export default Map;
