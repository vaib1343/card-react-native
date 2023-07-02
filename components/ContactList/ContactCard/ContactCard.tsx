import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ContactCard = (props: {
  imageUrl: string;
  name: string;
  status: string;
  uid: number;
}) => {
  const {imageUrl, name, status} = props;
  return (
    <View style={[styles.card, styles.elevatedCard]}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#434343',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  elevatedCard: {
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#eaeaea',
  },
});

export default ContactCard;
