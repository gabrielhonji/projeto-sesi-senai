// Gabriel / Test
import { Text, Button, Box, SafeAreaView } from '@gluestack-ui/themed';
import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';
import {  } from '@gluestack-ui/themed';

export default function JobScreen( { navigation } ) {
  return (
    <SafeAreaView h={'100%'}>
      <Box h={'100%'} padding={'12%'} flexDirection='row' columnGap={20} rowGap={20} flexWrap='wrap'>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('AdministracaoScreen')}>
          <Text>Administracao</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('AtletaScreen')}>
          <Text>Atleta</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('CabeleireiroScreen')}>
          <Text>Cabeleireiro</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('DatabaseScreen')}>
          <Text>Database</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('DesignScreen')}>
          <Text>Design</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('DesignScreen')}>
          <Text>Design</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('NutricaoScreen')}>
          <Text>Nutrição</Text>
        </Button>
        <Button alignItems='center' justifyContent='center' bg='$amber300' w={'46%'} h={100} onPress={() => navigation.navigate('PedreiroScreen')}>
          <Text>Pedreiro</Text>
        </Button>
      </Box>
    </SafeAreaView>
  );
}