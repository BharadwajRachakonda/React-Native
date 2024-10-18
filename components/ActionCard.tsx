import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <TouchableOpacity
        onPress={() => openWebsite('https://reactnative.dev')}
        style={styles.container}>
        <Text style={styles.blackText}>React Native</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    marginHorizontal: 100,
    borderRadius: 10,
  },
  blackText: {
    color: 'black',
  },
});
