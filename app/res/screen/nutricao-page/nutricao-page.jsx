// Gabriel / Test
import { Text, Box, SafeAreaView, Image, ImageBackground, HStack, FlatList } from '@gluestack-ui/themed';
import React, {useEffect, useState} from "react";
import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';
import imagemFundo from '../../../src/img/imagemFundo-nutricao-removebg-preview.png'
import imagemCorpo from '../../../src/img/imageNutri-.png'
import imagemFood1 from '../../../src/img/image__2_-removebg-preview.png'
import imagemNut from '../../../src/img/image__5_-removebg-preview.png'
import imagemNut2 from '../../../src/img/image__6_-removebg-preview.png'
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
export default function NutricaoScreen({ }) {

 
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Box>
     
     <ImageBackground alignItems='center' w={420} h={500} source={imagemFundo}>
        <Text marginTop={80} color={'red'} fontWeight={'$extrabold'} fontSize={46}>NUTRIÇÃO</Text>
     </ImageBackground>

     <Box alignItems='center'  w={'100%'} h={5000} bg={'red'}>

  
     <Animatable.Text animation='slideInLeft' style={{width: '90%', color: 'white', fontSize: 23, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
      Quais são as principais Atividades de um Nutricionista Hoje?
    </Animatable.Text>
    
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 19, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', marginTop: 25 }}>
     Desvenda os mistérios do seu corpo: 
     </Animatable.Text>
     <Animatable.Text animation='slideInRight' style={{width: '90%', color: 'white', fontSize: 19, fontWeight: '500', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'flex-start', marginTop: 5 }}>
     Através de uma avaliação completa, o nutricionista entende suas necessidades nutricionais e cria um plano alimentar personalizado
     </Animatable.Text>
     
      </Box>
     </Box>
    
      </ScrollView>
     
    </SafeAreaView>
  );
}