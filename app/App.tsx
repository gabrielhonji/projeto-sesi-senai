// Gabriel / Test
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import StartNavigator from './res/screen/home-page/navigator';
import AdministracaoScreen from './res/screen/administracao-page/administracao-page';
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StartNavigator/>
      <AdministracaoScreen/>
    </GluestackUIProvider>
  );
}