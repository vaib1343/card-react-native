import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContactCard from './ContactCard/ContactCard';

const ContactList = (): JSX.Element => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={true} style={styles.container}>
        {contacts.map(ele => (
          <ContactCard key={ele.uid} {...ele} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  headingText: {
    fontSize: 24,
    fontWeight: '600',
    margin: 8,
    textAlign: 'center',
  },
  container: {
    marginHorizontal: 20,
    display: 'flex',
  },
});

export default ContactList;
