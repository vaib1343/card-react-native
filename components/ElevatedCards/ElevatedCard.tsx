import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ElevatedCards = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>::::</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#adadad',
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    // shadowColor: '#ff0000',
  },
});

export default ElevatedCards;
