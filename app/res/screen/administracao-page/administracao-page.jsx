// Gabriel / Test
import { Text, Box, SafeAreaView, Image } from '@gluestack-ui/themed';
import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';

export default function AdministracaoScreen({ }) {
  return (
    <SafeAreaView bg={'#EE3135'} h={'100%'}>
      <Box w={'100%'} h={'50%'} justifyContent='center' alignItems='center'>
        <Text>Administração</Text>
        <Image w={'80%'} resizeMode='contain' alt='Logo do SESI/SENAI' source={LogoSesiBranca} />
      </Box>
    </SafeAreaView>
  );
}