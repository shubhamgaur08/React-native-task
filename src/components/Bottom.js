import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export default function BottomBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="chatbubbles-outline" size={30} color="#f57c00" />
        <Text style={[styles.text, { color: '#f57c00' }]}>Chat</Text>
        <View style={styles.activeIndicator} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="phone-call" size={30} color="gray" />
        <Text style={styles.text}>Call</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="qr-code-scanner" size={30} color="gray" />
        <Text style={styles.text}>Scan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <AntDesign name="hearto" size={30} color="gray" />
        <Text style={styles.text}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <MaterialCommunityIcons name="ticket-percent-outline" size={30} color="gray" />
        <Text style={styles.text}>VIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#fff',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  activeIndicator: {
    width: '100%',
    height: 3,
    backgroundColor: '#f57c00',
    position: 'absolute',
    top: -6, // Adjust position to make the orange indicator above the icon
  },
});
