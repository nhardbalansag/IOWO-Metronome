/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
