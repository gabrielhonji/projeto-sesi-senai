// Gabriel / Test
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Box } from '@gluestack-ui/themed';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import JobScreen from './job-screen';

import DesignScreen from '../design-page/design-page';
import NutricaoScreen from '../nutricao-page/nutricao-page';
import CabeleireiroScreen from '../cabeleireiro-page/cabeleireiro-page';
import DatabaseScreen from '../database-page/database-page';
import DireitoScreen from '../direito-page/direito-page';
import AdministracaoScreen from '../administracao-page/administracao-page';
import PedreiroScreen from '../pedreiro-page/pedreiro-page';
import AtletaScreen from '../atleta-page/atleta-page';
import Home from "../home-page/home";
import OnBoarding from './onboarding';
export default function StartNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoarding" component={OnBoarding}/>
                <Stack.Screen name="Home" component={Home}/>
                {/* JobScreen */}
                <Stack.Screen name="AdministracaoScreen" component={AdministracaoScreen} />
                <Stack.Screen name="AtletaScreen" component={AtletaScreen} />
                <Stack.Screen name="CabeleireiroScreen" component={CabeleireiroScreen} />
                <Stack.Screen name="DatabaseScreen" component={DatabaseScreen} />
                <Stack.Screen name="DesignScreen" component={DesignScreen} />
                <Stack.Screen name="DireitoScreen" component={DireitoScreen} />
                <Stack.Screen name="NutricaoScreen" component={NutricaoScreen} />
                <Stack.Screen name="PedreiroScreen" component={PedreiroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}