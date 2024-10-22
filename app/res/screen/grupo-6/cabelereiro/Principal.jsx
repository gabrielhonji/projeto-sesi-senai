import React from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input, Button, Image, LinearGradient } from '@rneui/themed'
import { Card, Icon } from '@rneui/themed';
import styles from "./Styles"
// import axios from 'axios';



export default CabeleireiroScreen = ({ navigation }) => {




  //function SobreScreen() {

  return (






    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <SafeAreaView style={styles.container}>

        <ScrollView vertical>



          <Card containerStyle={{
            marginTop: 15,
            borderRadius: 15,

          }}>
            <Card.Title>O que é ser um cabeleireiro?</Card.Title>

            <Card.Divider />

            <Image source={require('../../../src/img/img-cabeleireiro/Cabelereiro/Imagemfigma1.png')} style={styles.imgCards1}>
            </Image>
            <Text style={styles.fonts}>
              O cabeleireiro é o profissional responsá-vel por estudar, compreender, executar e orientar serviços nos cabelos. Ele faz aplicação de químicas e tinturas, buscando resultados ideais de saúde e estética capilar.
            </Text>

          </Card>

          <Card containerStyle={{
            marginTop: 15,
            borderRadius: 15,
          }}>
            <Card.Title>Qual é a importância de um cabeleireiro?</Card.Title>
            <Card.Divider />


            <Image source={require('../../../src/img/img-cabeleireiro/Cabelereiro/Imagemfigma2certo.png')} style={styles.imgCards2}>

            </Image>
            <Text style={styles.fonts}>
              Ele é o profissional responsável por valorizar a imagem de homens e mulheres a partir de cortes, colorações e penteados que valorizam o rosto do cliente, assim, melhorando sua autoestima.
            </Text>


          </Card>

          <Card containerStyle={{
            marginTop: 15,
            borderRadius: 15,
          }}>
            <Card.Title>Como é o mercado de trabalho?</Card.Title>
            <Card.Divider />

            <Image source={require('../../../src/img/img-cabeleireiro/Cabelereiro/Imagemfigma3.png')} style={styles.imgCards3}>
            </Image>
            <Text style={styles.fonts}>
              Quando o assunto é beleza, o cabeleire-iro surge como o profissional mais requisitado de um mercado que comemora perspectivas otimistas para o futuro. O cargo de Cabeleireiro oferece um mercado de trabalho com diversas oportunidades.
            </Text>
          </Card>

          <Card containerStyle={{
            marginTop: 30,
            borderRadius: 15,
            height: 110,
          }}>
            
            <Text style={{fontWeight: "900", color: 'black', fontSize: 16,}}> Matérias relacionadas com cabeleireiro:</Text>
          

            <Image source={require('../../../src/img/img-cabeleireiro/Cabelereiro/quimica.png')} style={styles.imgCards4}>
            </Image>
            <Text style={styles.fontsQuimica}>
              Química
            </Text>
          </Card>

          <Card containerStyle={{
            marginTop: 30,
            borderRadius: 15,
            height: 530,
          }}>
            
            <Text style={{fontWeight: "900", color: 'black', fontSize: 18,}}> Por que química é importante?:</Text>
      
            <Text style={styles.fonts3}>
            A química é fundamental para a profissão de cabeleireiro, pois está presente em quase todos os procedimentos realizados nos salões de beleza.
            </Text>

            <Text style={{fontWeight: "900", color: 'black', fontSize: 18, marginTop: 20,}}>Em quais procedimentos a química está presente?:</Text>

            <Text style={styles.fonts3}>
            Há diversos tipos de procedimentos químicos para cabelo, como escova definitiva, progressiva, inteligente, relaxamento capilar, além de tintura, luzes, descoloração e mechas, entre outros. Como pode ser visto na tabela:
            </Text>

            <Image source={require('../../../src/img/img-cabeleireiro/Cabelereiro/TABELA.png')} style={styles.imgCards5}>
            </Image>
          </Card>




        </ScrollView>
      </SafeAreaView>







    </View>
  );
}










//};
