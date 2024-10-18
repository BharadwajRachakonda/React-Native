import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import Scrollable from './components/Scrollable';
import HorizontalLine from './components/HorizontalLine';
import ImageCard from './components/ImageCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <HorizontalLine />
        <Scrollable />
        <HorizontalLine />
        <ImageCard />
        <HorizontalLine />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
