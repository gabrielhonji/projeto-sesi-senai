// Gabriel / Test
import { Box, SafeAreaView, Image, ScrollView } from '@gluestack-ui/themed';
import { View, Text, ImageBackground } from 'react-native'
import LinearGradient from "react-native-linear-gradient"



import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';
import corredor from "../../../src/img/corredor.png"


export default function AtletaScreen({ }) {
  return (
    <SafeAreaView bg={'#fff'} h={'100%'}>
      <ScrollView>
        <View style={{ backgroundColor: "#ee2d32", height: 100, width: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>Tipos de Atletas</Text>
        </View>
        <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: "column",padding:10,marginTop:20,gap:20,}}>
          <View style={{flexDirection:"row",gap:10,}}>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5,}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
          </View>
          <View style={{flexDirection:"row",gap:10,}}>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5,}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
          </View>
          <View style={{flexDirection:"row",gap:10,}}>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
            <ImageBackground source={corredor} style={{width:190,height:280, justifyContent:"flex-end",borderRadius:30,padding:5,}}>
            <View style={{width: "100%",height:90, gap:4,}}>
            <Text style={{color:"#fff",fontSize:22, fontWeight:"700"}}>Atletismo</Text>
            <Text style={{color:"#fff"}}>Vero explicabo quaerat velit molesti</Text>
            <View style={{flex:1, flexDirection:"row", gap:10,}}>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corrida</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7",width:53, height:14, borderRadius:25,alignItems:"center",}}>
                <Text>Corri</Text>
              </View>
            </View>
          </View>
           </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}