import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  Platform,
} from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { Dimension } from '../constants/Dimension';
import { Ionicons } from '../constants/Icons';

export default function TextInput(props) {
  const { value, onChangeText, keyboardType, placeHolder, containerStyle } = props;
  return (
    <View
      style={[
        styles.container,
        styles.rowDirection,
        { justifyContent: 'space-between' },
        containerStyle,
      ]}
    >
      <View style={[styles.rowDirection]}>
        <Ionicons
          name="search-outline"
          size={Dimension.Size_20}
          color={Colors.black}
          style={{ marginHorizontal: Dimension.Size_5 }}
        />
        <RNTextInput
          placeholder={placeHolder}
          placeholderTextColor={Colors.black}
          value={value}
          onChangeText={text => onChangeText && onChangeText(text)}
          keyboardType={keyboardType}
          style={styles.textInputContainer}
        />
      </View>
      <Ionicons
        name="mic-outline"
        color={Colors.black}
        size={Dimension.Size_20}
        style={{ paddingRight: Dimension.Size_5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    marginVertical: Dimension.Size_10,
    paddingVertical: Platform.OS === 'ios' ? Dimension.Size_10 : 0,
    borderRadius: Dimension.Size_5,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    color: Colors.black,
    maxWidth: '90%',
  },
});