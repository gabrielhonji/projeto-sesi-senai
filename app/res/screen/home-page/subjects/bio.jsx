
import React from "react"
import { Box, Button, ButtonText, Image, Input, InputField, InputIcon, InputSlot, Pressable, SearchIcon, Text, View } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import JobCard from "../../../components/JobCard"

//Componentes utilizados
import Nutricao from "../../../../src/img/nutricao.png";
//Imagens Utilizadas


//Inicio do código
const BIOScreen = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <LinearGradient start={{ x: 0.0, y: 0.5 }} end={{ x: 2.3, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={['#ee2d32', '#FF8450']}
                    style={{
                        width: "100%",
                        height: 165,
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        flexDirection: "row",
                        justifyContent: "center",
                        padding: 40,
                    }}>
                    <View>
                        <Text style={styles.headerTitle}>Se você gosta de Biologia recomendamos os seguintes</Text>
                    </View>
                </LinearGradient>
                <View>
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Economista"} jobArea={"Area de atuação"} jobImage={Nutricao} onPress={() => navigation.navigate("EconomistaScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Engenharia"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("EngenhariaScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Publicidade"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("PublicidadeScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Comissario"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("ComissarioScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Jornalista"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("JornalistaPage")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Medico"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("MedicinaScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Geologo"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("GeologoScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Arquiteto"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("ArquiteturaScreen")} />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
});

export default BIOScreen


