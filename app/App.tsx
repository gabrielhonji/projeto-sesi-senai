// Gabriel / Test
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import StartNavigator from './res/screen/home-page/navigator';
// import CiclismoScreen from './res/screen/atleta-page/Ciclismo';
// import AtletaScreen from './res/screen/atleta-page/atleta-page';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StartNavigator/>
    </GluestackUIProvider>
  );
}
