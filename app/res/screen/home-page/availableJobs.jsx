
import React from "react"
import { Box, Button, ButtonText, Image, Input, InputField, InputIcon, InputSlot, Pressable, SearchIcon, Text, View } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import JobCard from "../../components/JobCard"

//Componentes utilizados
import Nutricao from "../../../src/img/nutricao.png";
//Imagens Utilizadas


//Inicio do código
const AvaialableJobs = ({ navigation }) => (
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
                        <Text style={styles.headerTitle}>Aqui você encontra os principais trabalhos</Text>
                    </View>
                </LinearGradient>
                <View>
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Atleta"} jobArea={"Area de atuação"} jobImage={Nutricao} onPress={() => navigation.navigate("AtletaScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Nutrição"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("NutricaoScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"DataBase"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("DatabaseScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Design"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("DesignScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Administração"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("AdministracaoScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Cabeleireiro"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("CabeleireiroScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Direito"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("DireitoScreen")} />
                    <JobCard subject={"Materia"} minSal={1000} maxSal={2000} jobName={"Pedreiro"} jobArea={"Area"} jobImage={Nutricao} onPress={() => navigation.navigate("PedreiroScreen")} />
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

export default AvaialableJobs


