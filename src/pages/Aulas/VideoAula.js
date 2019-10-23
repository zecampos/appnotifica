import React, {Component} from 'react';

import {View, Text} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
export default class VideoAulas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: '',
      link: '',
    };
  }
  componentDidMount() {
    let aula = this.props.navigation.getParam('aula');
    this.setState({titulo: aula.titulo, link: aula.link});
  }
  componentWillUnmount() {
    Orientation.lockToPortrait();
  }
  render() {
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#000'}]}>
        <VideoPlayer
          source={{uri: this.state.link}}
          onBack={() => this.props.navigation.goBack()}
          onEnterFullscreen={() => Orientation.lockToLandscape()}
          onExitFullscreen={() => Orientation.lockToPortrait()}
          style={{paddingVertical: 15}}
          title={this.state.titulo}
        />
      </SafeAreaView>
    );
  }
}
