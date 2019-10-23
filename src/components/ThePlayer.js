/*Example of React Native Video*/
import React, {Component} from 'react';
//Import React
import {Platform, StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';
import {setWidth, setheight} from '../config/styles/metrics';
class ThePlayer extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Orientation.lockToLandscape();
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
          source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          onBack={() => null}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    width: setWidth(1),
  },
});
export default ThePlayer;
