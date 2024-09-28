import React, { useState, useMemo } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Dimension } from '../constants/Dimension';
import { Entypo } from '../constants/Icons';
import { Colors } from '../constants/Colors';
import IconButton from './IconButton';
import Dropdown from './Dropdown';
import category from '../resources/Categories.json';
import { BundleStrings } from '../constants/Strings';

export default function CategoryModal(props) {
  const { modalVisible, setModalVisible, currentCategory, changeCategory } = props;

  // Logging props to ensure they are passed correctly
  // console.log({ modalVisible, setModalVisible, currentCategory, changeCategory });

  // Memoized dropdown data to prevent unnecessary re-renders
  // const dropdownData = useMemo(() => {
  //   console.log({ category });
  //   return category.map(e => ({
  //     label: e.name,
  //     value: e.id,
  //   }));
  // }, []);
  // console.log({ dropdownData });
  // console.log(category);
console.log({currentCategory, changeCategory})
  const dropdownData = category.map(e => ({
    label: e.name,
    value: e.id,
  }));
console.log(dropdownData);
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {/* Close button for modal */}
          <IconButton
            containerStyle={{
              backgroundColor: 'transparent',
              alignSelf: 'flex-end',
            }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Entypo
              name="cross"
              color={Colors.black}
              size={Dimension.Size_15}
            />
          </IconButton>

          {/* Dropdown for selecting category */}
          <View style={{ width: '80%' }}>
            <Dropdown
              data={dropdownData}
              currentValue={currentCategory}
              selectedValue={changeCategory}
              placeholder={BundleStrings.search}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: Dimension.Size_10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
