import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Image from './Image';
import { Dimension } from '../constants/Dimension';
import { Colors } from '../constants/Colors';


export default function CategoryCarousel(props) {
  const { data, activeCategory, handleChangeCategory } = props;

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => handleChangeCategory(item.id)}
        style={[
          styles.itemContainer,
          { borderWidth: activeCategory === item.id ? 1 : 0, borderColor: '#2acaea' },
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Dimension.Size_5,
    backgroundColor: Colors.grey,
  },
  imageStyle: {
    height: Dimension.Size_60,
    width: Dimension.Size_60,
    borderRadius: Dimension.Size_60,
  },
  textStyle: {
    fontSize: Dimension.Size_10,
    color: Colors.black,
    marginTop: Dimension.Size_5,
  },
  itemContainer: {
    paddingHorizontal: Dimension.Size_10,
    alignItems: 'center',
    paddingVertical: Dimension.Size_10,
    borderRadius: Dimension.Size_5,
  },
});