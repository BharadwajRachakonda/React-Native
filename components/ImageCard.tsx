import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>ImageCard</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          height={100}
          width={100}
          style={{borderRadius: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default ImageCard;
