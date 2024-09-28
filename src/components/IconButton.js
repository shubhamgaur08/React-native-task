import React from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Dimension } from '../constants/Dimension';
import { Colors } from '../constants/Colors';

export default function IconButton(props) {
  const { children, containerStyle, onPress } = props;
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={() => onPress && onPress()}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Dimension.Size_10,
    borderRadius: Dimension.Size_5,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});