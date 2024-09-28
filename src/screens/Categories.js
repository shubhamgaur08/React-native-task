import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import CategoryCarousel from '../components/CategoryCarousel';
import category from '../resources/Categories.json';
import TextInput from '../components/TextInput';
import {BundleStrings} from '../constants/Strings';
import {Dimension} from '../constants/Dimension';
import {FontAwesome} from '../constants/Icons';
import IconButton from '../components/IconButton';
import workers from '../resources/Worker.json';
import Image from '../components/Image';
import CategoryModal from '../components/CategoryModal';

let searchExpirationTimeout;

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [workerData, setWorkerData] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    prepareWorkerData();
  }, []);

  function prepareWorkerData(categoryId, searchValue) {
    console.log({categoryId, searchValue});
    const workerRole = category.find(
      e => e?.id == (categoryId ? categoryId : selectedCategory),
    )?.name;
    const workerAccordingToRole = workers.filter(e =>
      searchValue
        ? e?.worker_role == workerRole &&
          e?.worker_name?.toLowerCase()?.includes(searchValue?.toLowerCase())
        : e?.worker_role == workerRole,
    );
    setWorkerData(workerAccordingToRole);
  }

  function handleChangeCategory(selectedCategoryId) {
    console.log( 'selectedCategoryId',selectedCategoryId);
    setSelectedCategory(selectedCategoryId);
    prepareWorkerData(selectedCategoryId);
    if(filterVisible) setFilterVisible(!filterVisible)
  }

  function handleChangeSearch(text) {
    setSearchValue(text);
    if (searchExpirationTimeout) clearTimeout(searchExpirationTimeout);
    searchExpirationTimeout = setTimeout(() => {
      prepareWorkerData(undefined, text);
    }, 500);
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: item.worker_profile_picture}}
          resizeMode={'cover'}
          style={styles.profileImageStyle}
        />
        <Text style={styles.workerNameTextStyle}>{item.worker_name}</Text>
        <View style={styles.flagContainer}>
          <Image
            source={{uri: item.worker_country_flag_image}}
            resizeMode={'cover'}
            style={styles.flagImageStyle}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CategoryCarousel
        data={category}
        activeCategory={selectedCategory}
        handleChangeCategory={handleChangeCategory}
      />
      <View
        style={[styles.rowDirection, {marginHorizontal: Dimension.Size_10}]}>
        <View style={{width: '85%'}}>
          <TextInput
            placeHolder={BundleStrings.search}
            value={searchValue}
            onChangeText={handleChangeSearch}
          />
        </View>
        <IconButton
          containerStyle={{marginLeft: Dimension.Size_10}}
          onPress={() => setFilterVisible(!filterVisible)}>
          <FontAwesome
            name="sliders"
            size={Dimension.Size_25}
            color={Colors.black}
          />
        </IconButton>
      </View>
      <FlatList
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={item => item.worker_id.toString()}
        data={workerData}
        showsVerticalScrollIndicator={false}
      />
      <CategoryModal
        modalVisible={filterVisible}
        setModalVisible={setFilterVisible}
        currentCategory={selectedCategory}
        changeCategory={handleChangeCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    padding: Dimension.Size_10,
    width: '25%',
    alignItems: 'center',
  },
  profileImageStyle: {
    height: Dimension.Size_50,
    width: Dimension.Size_50,
    borderRadius: Dimension.Size_50,

  },
  workerNameTextStyle: {
    marginTop: Dimension.Size_5,
    color: Colors.black,
    fontSize: Dimension.Size_10,
  },
  flagImageStyle: {
    height: Dimension.Size_20,
    width: Dimension.Size_20,
    borderRadius: Dimension.Size_20,
  },
  flagContainer: {
    position: 'absolute',
    right: Dimension.Size_13,
    top: Dimension.Size_10,
  },
});

