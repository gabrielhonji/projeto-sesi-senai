import React from "react"
import { Center, View, GluestackUIProvider,Image} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { Text,StyleSheet } from "react-native"


interface Props{
    source: any
    title:string,
    subtitle:string,
    filter1:string,
    filter2:string,
}


const Cards = ({title,subtitle,filter1,filter2,source}: Props) => {
    return(
          <View style={{flexDirection:"row",gap:10,}}>
            <View>
              <Image source={source} style={{height:300, width:200, borderRadius:20}} alt="corredor"/>
              <View style={{position:"absolute", top:190, padding:15,}}>
              <Text style={{color:"#fff", fontSize:21, fontWeight:"bold"}}>{title}</Text>
              <Text style={{color:"#fff"}}>{subtitle}</Text>
              <View style={{flexDirection:"row", gap:8, marginTop:7,}}>
              <View style={{backgroundColor:"#C7C7C7", width:54, height:15, borderRadius:30, justifyContent:"center" ,alignItems:"center"}}>
                <Text style={{position:"absolute"}}>{filter1}</Text>
              </View>
              <View style={{backgroundColor:"#C7C7C7", width:54, height:15, borderRadius:30, justifyContent:"center" ,alignItems:"center"}}>
                <Text style={{position:"absolute"}}>{filter2}</Text>
              </View>
              </View>
              </View>
            </View>
          </View>
    )
}

export default Cards;