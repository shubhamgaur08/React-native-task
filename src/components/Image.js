import React from 'react';
import { View, Text } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

export default function Image(props) {
  const { source, resizeMode, style } = props;

  return (
    <FastImage
      source={source}
      resizeMode={resizeMode}
      style={style}
      defaultSource={require('../assets/images/one.jpg')}
    />
  );
}