import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Block card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>
              What's new in javascript 21 ES-12
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
              repellat vel distinctio iusto cumque quidem? Modi, odio odit
              adipisci sunt officiis eveniet obcaecati eaque temporibus eius
              omnis mollitia. Quae, quas.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() => {
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                );
              }}>
              <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                );
              }}>
              <Text style={styles.socialLink}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    margin: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    borderRadius: 8,
    backgroundColor: '#434343',
  },
  elevatedCard: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: '#333',
  },
  cardHeader: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f3f3f3',
    textAlign: 'center',
  },
  cardImage: {
    height: 100,
    objectFit: 'cover',
  },
  cardBody: {
    padding: 8,
  },
  cardFooter: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink: {
    fontSize: 16,
    color: '#2f2f2f',
    backgroundColor: '#bbb',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
});

export default ActionCard;
