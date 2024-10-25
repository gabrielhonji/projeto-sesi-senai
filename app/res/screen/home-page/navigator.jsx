// Gabriel / Test
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Box } from '@gluestack-ui/themed';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import AdministracaoScreen from '../grupo-5/administracao/administracao-page';
<<<<<<< HEAD
//import AtletaScreen from '../atleta-page/atleta-page';
import DatabaseScreen from '../grupo-3/database/database-page';
=======
import AtletaScreen from '../grupo-1/atleta-page/atleta-page';
import DBAPage from '../grupo-3/database/database-page';
>>>>>>> 9f0eae18644b6f9f2ba948bed1a77e89b7d59bf2
import DesignScreen from '../grupo-4/design/design-page';
import DireitoScreen from '../grupo-7/direito/direito-page';
import Home from './home';
import NutricaoScreen from '../grupo-2/nutricao/nutricao-page';
import PedreiroScreen from '../grupo-8/pedreiro/pedreiro-page';
import PublicidadeScreen from '../grupo-3/publicidade/publicidade-page';
// import CabeleireiroScreen from "../cabeleireiro-page/Principal"; PROBLEMA NA BIBLIOTECA RNEUI
import OnBoarding from './onboarding';
import GeologoScreen from '../geologo-page/geologo-page';
import DatabaseScreen from '../grupo-3/database/database-page';
import JornalistaPage from '../jornalista-page/jornalista-page';
import EngenhariaScreen from '../grupo-2/nutricao/engenharia-page';

export default function StartNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoarding" component={OnBoarding}/>
                <Stack.Screen name="Home" component={Home}/>
                {/* Jobs */}
                <Stack.Screen name="AdministracaoScreen" component={AdministracaoScreen} />
                <Stack.Screen name="AtletaScreen" component={AtletaScreen} />
                <Stack.Screen name="DatabaseScreen" component={DatabaseScreen} />
                <Stack.Screen name="DesignScreen" component={DesignScreen} />
                <Stack.Screen name="DireitoScreen" component={DireitoScreen} />
                <Stack.Screen name="NutricaoScreen" component={NutricaoScreen} />
                <Stack.Screen name="PedreiroScreen" component={PedreiroScreen} />
                <Stack.Screen name="GeologoScreen" component={GeologoScreen} />
                <Stack.Screen name="JornalistaPage" component={JornalistaPage} />
                <Stack.Screen name="PublicidadeScreen" component={PublicidadeScreen} />
                <Stack.Screen name="EngenhariaScreen" component={EngenhariaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}