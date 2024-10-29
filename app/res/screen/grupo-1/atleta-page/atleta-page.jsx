// Gabriel / Test
import { Box, SafeAreaView, Image } from '@gluestack-ui/themed';
import { View, Text, ImageBackground, ScrollView,Pressable } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Cards from './component/card';



import corredor from "../../../../src/img/corredor.png";
import academia from "../../../../src/img/academia.png"
import tenista from "../../../../src/img/Tenista.png";
import futebol from "../../../../src/img/Futebol.png";
import basquete from "../../../../src/img/Basquete.png";
import crossFit from "../../../../src/img/CrossFit.png";


export default function AtletaScreen({ navigation }) {
  return (
    <SafeAreaView bg={'#fff'} h={'100%'}>
      <ScrollView>
        <View style={{ backgroundColor: "#ee2d32", height: 100, width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>Tipos de Atletas</Text>
        </View>
        <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "column", padding: 10, marginTop: 10, gap: 20, }}>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Pressable onPress={() => navigation.navigate("CiclismoScreen")}>
              <Cards title='Atletismo' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={corredor} />
            </Pressable>
            <Cards title='Musculação' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={academia} />
          </View>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Cards title='Tenista' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={tenista} />
            <Cards title='Futebolista' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={futebol} />
          </View>
          <View style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}>
            <Cards title='Basqueteiro' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={basquete} />
            <Cards title='Crossfiteiro' subtitle='Lorem ipsum dolor sit amet consectetur' filter1='Corrida' filter2='CrossFit' source={crossFit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}