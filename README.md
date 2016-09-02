React Native Test
=================

Description
-----------

This is a test of [React-Native](https://facebook.github.io/react-native/) that uses:
- [react-native-camera](https://github.com/lelandrichardson/react-native-maps)
- [react-native-camera](https://github.com/lwansbrough/react-native-camera)
- [Redux](http://redux.js.org/)

The app shows a text that, when touched, goes to a scene to take a photo. After taken, it shows the result, the position coordinates and a map with such position.

At this time, this test runs in Android only.

Installation
------------

You need a connected device or AVD. To run, execute:

```
npm install
npm run android
```

Tests
-----

To run tests, move the file .babelrc from RNTest/test to RNTest/. Make sure you move it back after finishing testing (see [issue in Github](https://github.com/mjohnston/react-native-webpack-server/issues/63)).
