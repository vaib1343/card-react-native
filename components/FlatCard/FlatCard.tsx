import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    padding: 8,
  },
  cardOne: {
    backgroundColor: '#983838',
  },
  cardTwo: {
    backgroundColor: '#266a22',
  },
  cardThree: {
    backgroundColor: '#23497a',
  },
});

export default FlatCard;
