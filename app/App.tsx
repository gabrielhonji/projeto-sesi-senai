// Gabriel / Test
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';





import StartNavigator from './res/screen/home-page/navigator';

// import Cabeleireiro from './res/screen/cabeleireiro-page/Principal';
// import { Image } from "@rneui/base";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Principal from './res/screen/cabeleireiro-page/Principal';

// import CiclismoScreen from './res/screen/atleta-page/Ciclismo';
// import AtletaScreen from './res/screen/atleta-page/atleta-page';



// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator screenOptions={{
//         headerBackground: () => (
//           <Image
//             style={{ width: '100%', height: '100%' }}
//             source={(require('./src/img/img-cabeleireiro/Cabelereiro/apenasDEGRADE.png'))}
//           />
//         )
//       }} initialRouteName="Principal">


//         <Stack.Screen options={{

//           title: 'Cabeleireiro',
//           headerTitleAlign: 'center',
//           headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white',
        
//         }} name="Cabeleireiro" component={Principal} />

//         {/* <Stack.Screen options={{

//             title: 'INDEFINIDO',
//             headerTitleAlign: 'center',
//             headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white',
//         }} name="Secundaria" component={Secundaria} /> */}




//       </Stack.Navigator>
//     </NavigationContainer>

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StartNavigator/>
    </GluestackUIProvider>

  );
}
