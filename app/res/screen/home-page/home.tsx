//Vitor animation test
import {
  Box,
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SafeAreaView,
  SearchIcon,
  Text,
  View,
} from '@gluestack-ui/themed';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';

import { LogBox } from 'react-native';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();

// Import images
import Advogado from '../../../src/img/advogado.png';
import codeIcon from '../../../src/img/codeIcon.png';
import coinsIcon from '../../../src/img/coinsIcon.png';
import ComissarioIcon from '../../../src/img/comissario/comissario_icon.png';
import DesignerIcon from '../../../src/img/comissario/design.png';
import Construtor from '../../../src/img/construtor.png';
import eletricIcon from '../../../src/img/eletricaIcon.png';
import geoIcon from '../../../src/img/geoIcon.png';
import Nutricao from '../../../src/img/nutricao.png';
import otherIcon from '../../../src/img/otherIcon.png';
import pencilIcon from '../../../src/img/pencilIcon.png';
import serverIcon from '../../../src/img/serverIcon.png';
import subjectIcon from '../../../src/img/subjectIcon.png';
import translateIcon from '../../../src/img/translateIcon.png';
import vetor1 from '../../../src/img/vector1.png';
import vetor2 from '../../../src/img/vector2.png';
import vetor3 from '../../../src/img/vector4.png';
import wrenchIcon from '../../../src/img/wrenchIcon.png';

const {width: screenWidth} = Dimensions.get('window');
const cards = [
  {
    id: 1,
    image: require('../../../src/img/atleta.png'),
    title: 'Atleta',
    area: 'Saúde',
    minSal: '1.000',
    maxSal: '1B',
    backgroundColor: '#40189D',
    screen: 'AtletaScreen',
  },
  {
    id: 2,
    image: require('../../../src/img/dev.png'),
    title: 'Administração',
    area: 'Administração',
    minSal: '3.000',
    maxSal: '4.000',
    backgroundColor: '#EEE62D',
    screen: 'AdministracaoScreen',
  },
  {
    id: 3,
    image: require('../../../src/img/construtor.png'),
    title: 'Engenheiro',
    area: 'Engenharia',
    minSal: '2.000',
    maxSal: '3.000',
    backgroundColor: '#FF8450',
    screen: 'NutricaoScreen',
  },
];

export default function Home({navigation}): JSX.Element {
  let {height, width} = Dimensions.get('screen');

  const [showAnimation1, setShowAnimation1] = useState(false);
  const [showAnimation2, setShowAnimation2] = useState(false);
  const [showAnimation3, setShowAnimation3] = useState(false);

  const handleScroll = event => {
    const positionY = event.nativeEvent.contentOffset.y;
    console.log(positionY);
    positionY > 29 ? setShowAnimation1(true) : setShowAnimation1(false);
    positionY > 100 ? setShowAnimation2(true) : setShowAnimation2(false);
    positionY > 250 ? setShowAnimation3(true) : setShowAnimation3(false);
  };

  const MyCarousel = ({data}) => {
    const renderItem = ({item, color}) => (
      <Pressable onPress={() => navigation.navigate(item.screen)}>
        <View
          style={{
            width: 280,
            height: 140,
            backgroundColor: '#fff',
            borderRadius: 25,
            alignSelf: 'center',
            marginRight: 30,
            flexDirection: 'row',
            padding: 30,
            alignItems: 'center',
            gap: 15,
            elevation: 5,
          }}>
          <View
            style={{
              width: 65,
              height: 65,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: item.backgroundColor,
              borderRadius: 10,
            }}>
            <Image
              alt="job-image"
              source={item.image}
              style={{width: 45, height: 45}}
            />
          </View>
          <View style={{flexDirection: 'column', gap: 5}}>
            <Text style={{color: '#212121', fontWeight: '800', fontSize: 20}}>
              {item.title}
            </Text>
            <Text style={{color: '#212121', fontWeight: '600'}}>
              {item.area}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4, gap: 5}}>
              <Image
                alt="coin-icon"
                source={coinsIcon}
                style={{width: 24, height: 24}}
              />
              <Text
                style={{color: '#ee2d32', fontWeight: '800', paddingTop: 3}}>
                R${item.minSal} - R${item.maxSal}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );

    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'stack'}
        layoutCardOffset={'20'}
        autoplay={true}
        autoplayDelay={3000}
        autoplayInterval={5000}
        loop={true}
      />
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView h={'$full'} onScroll={handleScroll} scrollEventThrottle={16}>
        <MotiView
          from={{translateY: -100}}
          animate={{translateY: 0}}
          transition={{duration: 1300, type: 'timing'}}>
          <LinearGradient
            start={{x: 0.0, y: 0.5}}
            end={{x: 2.3, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#ee2d32', '#FF8450']}
            style={{
              width: '100%',
              height: 165,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 40,
            }}>
            <MotiView
              style={styles.welcome}
              from={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2500}}>
              <Text style={{color: '#fff', fontSize: 16}}>
                Em Duvida de qual profissão seguir?
              </Text>
              <Text style={{color: '#fff', fontSize: 26, fontWeight: 'bold'}}>
                Encontre a melhor com base em seus gostos
              </Text>
            </MotiView>
            <MotiView
              from={{translateX: 200}}
              animate={{translateX: 0}}
              transition={{duration: 1300, delay: 200, type: 'timing'}}>
              <Input style={styles.searchbarContainer}>
                <InputSlot pl="$3">
                  <InputIcon as={SearchIcon} size="xl" />
                </InputSlot>
                <InputField
                  placeholder="Procure trabalhos aqui ..."
                  placeholderTextColor="#585858"
                />
              </Input>
            </MotiView>
          </LinearGradient>
        </MotiView>
        <View style={styles.jobsContainer}>
          <MotiView
            style={styles.avaiableJobs}
            from={{translateX: -200}}
            animate={{translateX: 0}}
            transition={{duration: 1700, type: 'timing'}}>
            <Image
              alt="icons"
              source={vetor2}
              style={{width: 31, height: 14}}
            />
            <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
              29
            </Text>
            <Text style={{color: '#fff'}}>Trabalhos disponiveis</Text>
            <Image
              source={vetor1}
              alt="Perfil"
              resizeMode="contain"
              style={{height: 70, width: 70, marginLeft: 52, marginTop: 17}}
            />
          </MotiView>
          <MotiView
            style={styles.addedJobs}
            from={{translateX: 200}}
            animate={{translateX: 0}}
            transition={{duration: 1700, type: 'timing'}}>
            <Image
              alt="icons"
              source={vetor2}
              style={{width: 31, height: 14}}
            />
            <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
              3
            </Text>
            <Text style={{color: '#fff'}}>Trabalhos sendo adicionados</Text>
            <Image
              source={vetor3}
              alt="Perfil"
              resizeMode="contain"
              style={{height: 70, width: 70, marginLeft: 65}}
            />
          </MotiView>
        </View>
        <View style={styles.categoryContainer}>
          <MotiView
            from={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2300}}>
            <Text style={{color: '#3d3d3d', fontSize: 18, fontWeight: '600'}}>
              Categorias
            </Text>
          </MotiView>
          <MotiView
            style={styles.cardContainer}
            from={{translateY: 200}}
            animate={{translateY: 0}}
            transition={{type: 'timing', duration: 2500}}>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={eletricIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={pencilIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={geoIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={translateIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </MotiView>
          <MotiView
            style={styles.cardContainer}
            from={{translateY: 200}}
            animate={{translateY: 0}}
            transition={{type: 'timing', duration: 2000}}>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={codeIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={serverIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={wrenchIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable onPress={() => console.log('teste')}>
              <View style={styles.categoryCard}>
                <Image
                  alt="icon"
                  source={otherIcon}
                  style={{width: 30, height: 30}}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </MotiView>
        </View>
        <View style={styles.recommendedJobs}>
          <MotiView
            from={{translateY: 40}}
            animate={{translateY: showAnimation1 ? 0 : 40}}>
            <Text
              style={{
                color: '#3D3D3D',
                fontSize: 18,
                fontWeight: '600',
                marginRight: 100,
              }}>
              Trabalhos Recomendados
            </Text>
          </MotiView>
          <MotiView
            style={styles.recommendedCardContainer}
            from={{translateY: 60}}
            animate={{translateY: showAnimation2 ? 10 : 60}}>
            <Text style={{color: 'transparent'}}>a</Text>
            <MyCarousel data={cards} />
          </MotiView>
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 34,
            alignItems: 'center',
          }}>
          <MotiView
            from={{translateX: -200}}
            animate={{translateX: showAnimation3 ? 0 : -200}}>
            <Text
              style={{
                color: '#3D3D3D',
                fontSize: 18,
                fontWeight: '600',
                marginLeft: 15,
              }}>
              Novos trabalhos
            </Text>
          </MotiView>
          <MotiView
            from={{translateX: 200}}
            animate={{translateX: showAnimation3 ? 0 : 200}}>
            <Button
              size="md"
              variant="link"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              style={{}}>
              <ButtonText style={{color: '#ee2d32'}}>Mais</ButtonText>
            </Button>
          </MotiView>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('DesignScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#50ffa5',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={DesignerIcon}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Designer</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Designer
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$ 2.800 - R$ 7.100
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('ComissarioScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#5099ff',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={ComissarioIcon}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Comissário de Bordo</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Comissário de Bordo
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$ 3.600 - R$ 15.350
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Inglês
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('NutricaoScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#61FF78',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Nutricao}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Saúde</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Nutrição
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.000 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Biologia
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('DireitoScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#F9F909',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Advogado}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Direito</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Advogado
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$2.500 - R$3.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Língua Portuguesa
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('EngenhariaScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#FF8450',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Construtor}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Engenharia</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Engenheiro
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.500 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('DatabaseScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#FF8450',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Construtor}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>DBA</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  DBA
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.500 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('PublicidadeScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#FF8450',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Construtor}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Publicidade e Propaganda</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Publicidade e Propaganda
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.500 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('PedreiroScreen')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#FF8450',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Construtor}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Pedreiro</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Pedreiro
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.500 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View style={styles.newJobContainer}>
          <Pressable onPress={() => navigation.navigate('JornalistaPage')}>
            <View style={{flexDirection: 'row', gap: 25}}>
              <View
                style={{
                  backgroundColor: '#FF8450',
                  width: 55,
                  height: 55,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  alt="icon"
                  source={Construtor}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{flexDirection: 'column', gap: 5}}>
                <Text>Jornalista</Text>
                <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
                  Jornalista
                </Text>
                <View style={{flexDirection: 'column', marginTop: 10, gap: 10}}>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={coinsIcon}
                      style={{width: 24, height: 24}}
                    />
                    <Text style={{color: '#000', fontWeight: '500'}}>
                      R$1.500 - R$2.000
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', gap: 18}}>
                    <Image
                      alt="icon"
                      source={subjectIcon}
                      style={{width: 22, height: 22}}
                    />
                    <Text
                      style={{color: '#000', fontWeight: '500', fontSize: 18}}>
                      Matemática
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <Box
          h={'100%'}
          padding={'12%'}
          flexDirection="row"
          columnGap={20}
          rowGap={20}
          flexWrap="wrap">
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('AdministracaoScreen')}>
            <Text>Administracao</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('AtletaScreen')}>
            <Text>Atleta</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('CabeleireiroScreen')}>
            <Text>Cabeleireiro</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('DatabaseScreen')}>
            <Text>Database</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('DesignScreen')}>
            <Text>Design</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('DireitoScreen')}>
            <Text>Direito</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('NutricaoScreen')}>
            <Text>Nutrição</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('PedreiroScreen')}>
            <Text>Pedreiro</Text>
          </Button>
          <Button
            alignItems="center"
            justifyContent="center"
            bg="$amber300"
            w={'46%'}
            h={100}
            onPress={() => navigation.navigate('GeologoScreen')}>
            <Text>Geólogo</Text>
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBF6FF',
  },
  header: {
    backgroundColor: '#ee2d32',
    width: '100%',
    height: 165,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
  },
  welcome: {},
  imageContainer: {},
  profileImage: {
    width: 52,
    height: 52,
    marginTop: 5,
  },
  searchbarContainer: {
    position: 'absolute',
    top: 100,
    left: -298,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    width: 320,
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  jobsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
    gap: 25,
  },
  avaiableJobs: {
    backgroundColor: 'blue',
    width: 150,
    height: 200,
    borderRadius: 25,
    justifyContent: 'flex-start',
    padding: 25,
    gap: 2,
  },
  addedJobs: {
    backgroundColor: '#ee2d32',
    width: 150,
    height: 200,
    borderRadius: 25,
    justifyContent: 'flex-start',
    padding: 25,
    gap: 2,
  },
  categoryContainer: {
    width: 320,
    height: 210,
    alignSelf: 'center',
    marginTop: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  categoryCard: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    borderColor: '#E4E0EC',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendedJobs: {
    height: 196,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  recommendedCardContainer: {},
  recommendedCards: {
    flexDirection: 'row',
    height: 110,
    width: 280,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 35,
    padding: 20,
    marginRight: 45,
  },
  newJobContainer: {
    flexDirection: 'col',
    backgroundColor: '#fff',
    padding: 25,
  },
});
