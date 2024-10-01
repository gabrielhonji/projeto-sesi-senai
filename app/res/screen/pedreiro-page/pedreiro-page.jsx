import { Text, Box, SafeAreaView, HStack, Image} from '@gluestack-ui/themed';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, ScrollView, ImageBackground } from 'react-native';
import PedreiroBackground from '../../../src/img/pedreiroBanner.jpg'

const jobs1 = [
  "Ajudante de obras",
  "Azulejista",
];

const jobs2 = [
  "Assoalhador",
  "Gesseiro",
];

const JobBadge = ({ job }) => (
  <Text textAlign='center' color='#fff' fontWeight='bold' borderRadius={10} bg='red' w={140} h={30}>
    {job}
  </Text>
);

export default function PedreiroScreen() {
  return (
    <SafeAreaView flex={1} bg='#fff'>
      <ScrollView>
        
        <Box bg='red' h={130} justifyContent='center' alignItems='center'> 
          <Text color='#fff' fontWeight='bold' fontSize={35}>Pedreiro</Text>
        </Box>

        <Svg height={89} width={Dimensions.get('screen').width} viewBox='0 0 1440 311.9'>
          <Path fill='red' d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </Svg>

        <Box bg='#fff' w='100%' h={320} p={10}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>O que faz?</Text>
          <Text color='#424242'>Realiza trabalhos de alvenaria, concreto e outros materiais guiando-se por desenhos, esquemas e especificações. Utiliza projetos e instrumentos para construir, reformar ou reparar as construções.</Text>
          <Text color='black' fontWeight='bold' fontSize={25} mt={10}>Cargos Relacionados</Text>
          <HStack>
            {jobs1.map(job => <JobBadge key={job} job={job} />)}
          </HStack>
          <HStack>
            {jobs2.map(job => <JobBadge key={job} job={job} />)}
          </HStack>
        </Box>

        <Box bg='#F1F1F1' w={'100%'} h={500}>
          <Box bg='red' w={'100%'} h={50} justifyContent='center' alignItems='center'>
            <Text color='#fff' fontWeight='bold' fontSize={20}>Como se tornar um pedreiro</Text>
          </Box>
          <Image
            w={'100%'}
            h={200}
            source={{
            uri: "https://blog.laredo.com.br/wp-content/uploads/2018/10/235341-redator-entregar-ate-as-12h-do-dia-0609-pedreiro-ou-empreiteira-qual-contratar-para-realizar-uma-obra.jpg",
          }}
          alt="image"
          />

        </Box>

          {/* <HStack borderWidth={2} borderColor='black' borderRadius={10} margin={10} bg='red' p={4}>
          <Image 
            source={PedreiroImage} 
            style={{ width: 140, height: 160 }} 
            resizeMode="cover" 
          />
          <VStack marginLeft={20}>
            <Text fontWeight='bold' color='#fff' fontSize={24}>Sobre a Profissão</Text>
          </VStack>
        </HStack>

        <Box>
          <Text></Text>
        </Box> */}
        
      </ScrollView>
    </SafeAreaView>
  );
}
