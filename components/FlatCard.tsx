import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.flexContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
