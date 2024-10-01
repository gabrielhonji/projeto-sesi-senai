// Gabriel / Test
import { Text, Box, SafeAreaView, Image, ImageBackground, HStack } from '@gluestack-ui/themed';
import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';
import imagemFundo from '../../../src/img/imagemFundo-nutricao-removebg-preview.png'
import imagemCorpo from '../../../src/img/imageNutri-.png'
import imagemFood1 from '../../../src/img/image__2_-removebg-preview.png'
import imagemNut from '../../../src/img/image__5_-removebg-preview.png'
import imagemNut2 from '../../../src/img/image__6_-removebg-preview.png'
import { ScrollView } from 'react-native-gesture-handler';
export default function NutricaoScreen({ }) {
  return (
    <SafeAreaView flex={1}>
      <ScrollView>
     
     <ImageBackground alignItems='center' w={420} h={500} source={imagemFundo}>
        <Text marginTop={80} color={'red'} fontWeight={'$extrabold'} fontSize={46}>NUTRIÇÃO</Text>
     </ImageBackground>

     <Box alignItems='center' w={'100%'} h={5000} bg={'red'}>
      <Box alignItems='center' w={'90%'}>
     <Text marginTop={30} color={'white'} fontWeight={'$extrabold'} fontSize={19}>QUAIS SÃO AS PRINCIPAIS ATIVIDADES DE UM NUTRICIONISTA HOJE:</Text>
     
     <Box>
     <Text marginTop={30} color={'white'} fontWeight={'$extrabold'} fontSize={16}>
     Desvenda os mistérios do seu corpo: 
     </Text>
     <Text mb={5} marginTop={0} color={'white'} fontWeight={'bold'} fontSize={13}>
     Através de uma avaliação completa, o nutricionista entende suas necessidades nutricionais e cria um plano alimentar personalizado.
     </Text>

     <Image w={350} h={270} source={imagemCorpo}/>
     
     </Box>
     <Box>
     <Text marginTop={30} color={'white'} fontWeight={'$extrabold'} fontSize={16}>
     Cozinha a saúde:
     </Text>
     <Text mb={8} marginTop={0} color={'white'} fontWeight={'bold'} fontSize={13}>
     Ele elabora cardápios deliciosos e nutritivos, te ensinando a preparar refeições que te fazem bem.
     </Text>
     <Image w={340} h={260} source={imagemFood1}/>
     </Box>
     <Box>
     <Text marginTop={30} color={'white'} fontWeight={'$extrabold'} fontSize={16}>
     É o seu personal trainer da alimentação:
     </Text>
     <Text mb={8} marginTop={0} color={'white'} fontWeight={'bold'} fontSize={13}>
     Te acompanha de perto, te motiva e te ajuda a alcançar seus objetivos, seja perder peso, ganhar massa muscular ou simplesmente ter mais energia.
     </Text>
     <Image w={350} h={270} source={imagemNut}/>
     </Box>
     <Box>
     <Text marginTop={30} color={'white'} fontWeight={'$extrabold'} fontSize={16}>
     Inova a alimentação
     </Text>
     <Text mb={8} marginTop={0} color={'white'} fontWeight={'bold'} fontSize={13}>
     Desenvolve novos alimentos e bebidas, sempre pensando na sua saúde e bem-estar.
     </Text>
     <Image w={350} h={270} source={imagemNut2}/>
     </Box>
     
     
      </Box>
     </Box>
    
      </ScrollView>
     
    </SafeAreaView>
  );
}