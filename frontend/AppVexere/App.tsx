import React from 'react';
import {
  useColorScheme
} from 'react-native';

import MyTabs from './src/app';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <MyTabs />;
}

export default App;
