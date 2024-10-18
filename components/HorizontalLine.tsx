import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#00000080', // color of the line
    borderBottomWidth: 1, // thickness of the line
    marginVertical: 10, // space above and below the line
  },
});

export default HorizontalLine;
