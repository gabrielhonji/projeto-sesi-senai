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
  const [data, setData] = useState([]);

  const renderItem = ({item})=>
      
      (

        <SafeAreaView>
             <Box w={'100%'} h={5000} flex={1}>
       <Animatable.Text animation='slideInLeft' style={{color: 'white', fontSize: 19, }}>njdwkljljklwj</Animatable.Text>
    
      <Animatable.Text animation='slideInLeft' style={{color: 'white', fontSize: 19, marginTop:1000 }}>njdwkljljklwj</Animatable.Text>
        
         </Box>
        </SafeAreaView>
        
     
      );
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Box>
     
     <ImageBackground alignItems='center' w={420} h={500} source={imagemFundo}>
        <Text marginTop={80} color={'red'} fontWeight={'$extrabold'} fontSize={46}>NUTRIÇÃO</Text>
     </ImageBackground>

     <Box alignItems='center' w={'100%'} h={5000} bg={'red'}>

     <FlatList
          
                   data={data}
                   renderItem={renderItem}
                   keyExtractor={item => String(item.id)}
                   extraData={data}
                   
                   />
      
  
     
      </Box>
     </Box>
    
      </ScrollView>
     
    </SafeAreaView>
  );
}