// Gabriel / Test
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import StartNavigator from './res/screen/home-page/navigator';
import PedreiroScreen from './res/screen/pedreiro-page/pedreiro-page';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <PedreiroScreen/>
    </GluestackUIProvider>
  );
}
