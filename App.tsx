import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard/FlatCard';
import ElevatedCards from './components/ElevatedCards/ElevatedCard';
import FancyCards from './components/FancyCards/FancyCards';
import ActionCard from './components/ActionCard/ActionCard';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
