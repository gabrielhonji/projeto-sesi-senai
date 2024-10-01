import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import StartNavigator from './res/screen/home-page/navigator';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StartNavigator/>
    </GluestackUIProvider>
  );
}
