import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Users from './view/user';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Open up App.js to start working on your app 2!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Users />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
