import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending place</Text>
      <View style={styles.container}>
        <View style={[styles.fancyCard, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardHeading}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at
              dolor vero maiores sequi perspiciatis saepe nihil numquam porro
              consequatur vitae alias recusandae, ea hic ducimus iusto quisquam,
              cumque soluta!
            </Text>
            <Text style={styles.cardFooter}>12 mins aways</Text>
          </View>
        </View>
      </View>
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
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  fancyCard: {
    margin: 16,
    borderRadius: 8,
    width: 350,
  },
  cardElevated: {
    backgroundColor: '#cfd3f6',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    objectFit: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
    flex: 1,
    flexGrow: 1,
  },
  cardHeading: {
    color: '#2a2a2a',
    fontSize: 22,
    fontWeight: '500',
  },
  cardLabel: {
    fontSize: 14,
    color: '#2a2a2a',
    marginTop: 6,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 4,
    color: '#2a2a2a',
    fontWeight: '400',
  },
  cardFooter: {
    marginTop: 12,
    color: '#2a2a2a',
  },
});
export default FancyCards;
