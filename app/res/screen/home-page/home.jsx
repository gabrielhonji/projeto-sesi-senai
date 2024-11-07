//Vitor animation test
import { Box, Button, ButtonText, Image, Input, InputField, InputIcon, InputSlot, Pressable, SafeAreaView, SearchIcon, Text, View } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel from 'react-native-snap-carousel';
import { MotiView } from "moti";

import { LogBox } from 'react-native';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();

// Import images
import Advogado from "../../../src/img/advogado.png";
import coinsIcon from "../../../src/img/coinsIcon.png";
import Construtor from "../../../src/img/construtor.png";
import Nutricao from "../../../src/img/nutricao.png";
import vetor1 from "../../../src/img/vector1.png";
import vetor2 from "../../../src/img/vector2.png";
import vetor3 from "../../../src/img/vector4.png";

//Import Components
import JobCard from "../../components/JobCard";

const { width: screenWidth } = Dimensions.get('window');
const cards = [
    {
        id: 1,
        image: require("../../../src/img/atleta.png"),
        title: "Atleta",
        area: "Saúde",
        minSal: "1.000",
        maxSal: "1B",
        backgroundColor: "#40189D",
        screen: "AtletaScreen",
    },
    {
        id: 2,
        image: require("../../../src/img/dev.png"),
        title: "Administração",
        area: "Administração",
        minSal: "3.000",
        maxSal: "4.000",
        backgroundColor: "#EEE62D",
        screen: "AdministracaoScreen",
    },
    {
        id: 3,
        image: require("../../../src/img/construtor.png"),
        title: "Engenheiro",
        area: "Engenharia",
        minSal: "2.000",
        maxSal: "3.000",
        backgroundColor: "#FF8450",
        screen: "NutricaoScreen",
    }
]


export default function Home({ navigation }) {
    let { height, width } = Dimensions.get('screen');

    const [showAnimation1, setShowAnimation1] = useState(false)
    const [showAnimation2, setShowAnimation2] = useState(false)
    const [showAnimation3, setShowAnimation3] = useState(false)


    const handleScroll = (event) => {
        const positionY = event.nativeEvent.contentOffset.y;
        // console.log(positionY)
        positionY > 29 ? setShowAnimation1(true) : setShowAnimation1(false)
        positionY > 100 ? setShowAnimation2(true) : setShowAnimation2(false)
        positionY > 250 ? setShowAnimation3(true) : setShowAnimation3(false)
    };

    const MyCarousel = ({ data }) => {
        const renderItem = ({ item, color, }) => (
            <Pressable onPress={() => navigation.navigate(item.screen)}>
                <View style={{ width: 280, height: 140, backgroundColor: "#fff", borderRadius: 25, alignSelf: "center", marginRight: 30, flexDirection: "row", padding: 30, alignItems: "center", gap: 15, elevation: 5, }}>
                    <View style={{ width: 65, height: 65, justifyContent: "center", alignItems: "center", backgroundColor: item.backgroundColor, borderRadius: 10, }}>
                        <Image alt='job-image' source={item.image} style={{ width: 45, height: 45, }} />
                    </View>
                    <View style={{ flexDirection: "column", gap: 5 }}>
                        <Text style={{ color: "#212121", fontWeight: "800", fontSize: 20, }}>{item.title}</Text>
                        <Text style={{ color: "#212121", fontWeight: "600" }}>{item.area}</Text>
                        <View style={{ flexDirection: "row", marginTop: 4, gap: 5 }}>
                            <Image alt='coin-icon' source={coinsIcon} style={{ width: 24, height: 24, }} />
                            <Text style={{ color: "#ee2d32", fontWeight: "800", paddingTop: 3 }}>R${item.minSal} - R${item.maxSal}</Text>
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
                layoutCardOffset={`20`}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={5000}
                loop={true}
            />
        );
    };

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView h={"$full"} onScroll={handleScroll} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <MotiView
                    from={{ translateY: -100 }}
                    animate={{ translateY: 0 }}
                    transition={{ duration: 1300, type: "timing" }}>
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
                        <MotiView style={styles.welcome}
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2500 }}>
                            <Text style={{ color: "#fff", fontSize: 16, }}>Em Duvida de qual profissão seguir?</Text>
                            <Text style={{ color: "#fff", fontSize: 26, fontWeight: "bold" }}>Encontre a melhor com base em seus gostos</Text>
                        </MotiView>
                        <MotiView
                            from={{ translateX: 200 }}
                            animate={{ translateX: 0 }}
                            transition={{ duration: 1300, delay: 200, type: 'timing' }}>
                            <Input style={styles.searchbarContainer}>
                                <InputSlot pl="$3">
                                    <InputIcon as={SearchIcon} size="xl" />
                                </InputSlot>
                                <InputField placeholder="Procure trabalhos aqui ..." placeholderTextColor='#585858' />
                            </Input>
                        </MotiView>
                    </LinearGradient>
                </MotiView>
                <View style={styles.jobsContainer}>
                    <Pressable onPress={() => navigation.navigate("AvailableJobs")}>
                        <MotiView style={styles.avaiableJobs}
                            from={{ translateX: -200 }}
                            animate={{ translateX: 0 }}
                            transition={{ duration: 1700, type: "timing" }}>
                            <Image alt='icons' source={vetor2} style={{ width: 31, height: 14, }} />
                            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>8</Text>
                            <Text style={{ color: "#fff" }}>Trabalhos disponiveis</Text>
                            <Image source={vetor1} alt="Perfil" resizeMode="contain" style={{ height: 70, width: 70, marginLeft: 52, marginTop: 17, }} />
                        </MotiView>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("JobsBeingAdded")}>
                        <MotiView style={styles.addedJobs}
                            from={{ translateX: 200 }}
                            animate={{ translateX: 0 }}
                            transition={{ duration: 1700, type: "timing" }}>
                            <Image alt='icons' source={vetor2} style={{ width: 31, height: 14, }} />
                            <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>8</Text>
                            <Text style={{ color: "#fff" }}>Trabalhos sendo adicionados</Text>
                            <Image source={vetor3} alt="Perfil" resizeMode="contain" style={{ height: 70, width: 70, marginLeft: 65, }} />
                        </MotiView>
                    </Pressable>
                </View>
                <View style={styles.categoryContainer}>
                    <MotiView
                        from={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2300 }}>
                        <Text style={{ color: "#3d3d3d", fontSize: 18, fontWeight: "600" }}>Categorias</Text>
                    </MotiView>
                    <MotiView style={styles.cardContainer}
                        from={{ translateY: 200 }}
                        animate={{ translateY: 0 }}
                        transition={{ type: "timing", duration: 2500 }}>
                        <Pressable onPress={() => navigation.navigate("LPScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>L.P</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("MATScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>MAT</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("BIOScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>BIO</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("GEOScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>GEO</Text>
                            </View>
                        </Pressable>
                    </MotiView>
                    <MotiView style={styles.cardContainer}
                        from={{ translateY: 200 }}
                        animate={{ translateY: 0 }}
                        transition={{ type: "timing", duration: 2000 }}>
                        <Pressable onPress={() => navigation.navigate("FISScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>FIS</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("QUIScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>QUI</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("INGScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>ING</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("HISScreen")}>
                            <View style={styles.categoryCard}>
                                <Text style={{ color: "#ee2d32", fontSize: 22, fontWeight: "bold" }}>HIS</Text>
                            </View>
                        </Pressable>
                    </MotiView>
                </View>
                <View style={styles.recommendedJobs}>
                    <MotiView
                        from={{ translateY: 40 }}
                        animate={{ translateY: showAnimation1 ? 0 : 40 }}>
                        <Text style={{ color: "#3D3D3D", fontSize: 18, fontWeight: "600", marginRight: 100, }}>Trabalhos Recomendados</Text>
                    </MotiView>
                    <MotiView style={styles.recommendedCardContainer}
                        from={{ translateY: 60 }}
                        animate={{ translateY: showAnimation2 ? 10 : 60 }}>
                        <Text style={{ color: "transparent" }}>a</Text>
                        <MyCarousel data={cards} />
                    </MotiView>
                </View>
                <View style={{ marginTop: 24, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 34, alignItems: "center" }}>
                    <MotiView from={{ translateX: -200 }}
                        animate={{ translateX: showAnimation3 ? 0 : -200 }}>
                        <Text style={{ color: "#3D3D3D", fontSize: 18, fontWeight: "600", marginLeft: 15, }}>Novos trabalhos</Text>
                    </MotiView>
                    <MotiView from={{ translateX: 200 }}
                        animate={{ translateX: showAnimation3 ? 0 : 200 }}>
                        <Button
                            size="md"
                            variant="link"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            style={{}}
                        >
                            <ButtonText style={{ color: "#ee2d32" }}>Mais</ButtonText>
                        </Button>
                    </MotiView>
                </View>
                <JobCard subject={"Biologia"} minSal={1000} maxSal={2001} jobName={"Nutrição"} jobArea={"Saúde"} jobImage={Nutricao} onPress={() => navigation.navigate("NutricaoScreen")} bgColor={"#61ff78"} />
                <JobCard subject={"Lingua Portuguesa"} minSal={1000} maxSal={2000} jobName={"Advogado"} jobArea={"Direito"} jobImage={Advogado} onPress={() => navigation.navigate("DireitoScreen")} bgColor={"#f9f909"} />
                <JobCard subject={"Matemática"} minSal={1000} maxSal={2000} jobName={"Engenheiro"} jobArea={"Construção"} jobImage={Construtor} onPress={() => navigation.navigate("EngenhariaScreen")} bgColor={"#FF8450"} />
                <JobCard subject={"Matemática"} minSal={1000} maxSal={2000} jobName={"DBA"} jobArea={"Tecnologia"} jobImage={Nutricao} onPress={() => navigation.navigate("DatabaseScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Publicidade e Propaganda"} jobArea={"Marketing"} jobImage={Nutricao} onPress={() => navigation.navigate("PublicidadeScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Design"} jobArea={"Marketing"} jobImage={Nutricao} onPress={() => navigation.navigate("DesignScreen")} bgColor={"#"} />
                <JobCard subject={"Matemática"} minSal={1000} maxSal={2000} jobName={"Pedreiro"} jobArea={"Construção"} jobImage={Nutricao} onPress={() => navigation.navigate("PedreiroScreen")} bgColor={"#"} />
                <JobCard subject={"Lingua Portuguesa"} minSal={1000} maxSal={2000} jobName={"Jornalista"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("JornalistaPage")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Administracao"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("AdministracaoScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Atleta"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("AtletaScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Cabeleireiro"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("CabeleireiroScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Geologo"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("GeologoScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Comissário"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("ComissarioScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Economista"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("NutricaoScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Arquiteto"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("ArquiteturaScreen")} bgColor={"#"} />
                <JobCard subject={"Matéria"} minSal={1000} maxSal={2000} jobName={"Medicina"} jobArea={"área onde trabalha"} jobImage={Nutricao} onPress={() => navigation.navigate("MedicinaScreen")} bgColor={"#"} />
            </ScrollView>
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FBF6FF"
    },
    header: {
        backgroundColor: "#ee2d32",
        width: "100%",
        height: 165,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 40,
    },
    welcome: {
    },
    imageContainer: {
    },
    profileImage: {
        width: 52,
        height: 52,
        marginTop: 5,
    },
    searchbarContainer: {
        position: "absolute",
        top: 100, left: -298, right: 0, bottom: 0,
        borderRadius: 30,
        width: 320,
        height: 60,
        alignSelf: "center",
        backgroundColor: "#fff",
    },
    jobsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 60,
        gap: 25,
    },
    avaiableJobs: {
        backgroundColor: "blue",
        width: 150,
        height: 200,
        borderRadius: 25,
        justifyContent: "flex-start",
        padding: 25,
        gap: 2,
    },
    addedJobs: {
        backgroundColor: "#ee2d32",
        width: 150,
        height: 200,
        borderRadius: 25,
        justifyContent: "flex-start",
        padding: 25,
        gap: 2,
    },
    categoryContainer: {
        width: 320,
        height: 210,
        alignSelf: "center",
        marginTop: 30,
    },
    cardContainer: {
        flexDirection: "row",
        gap: 15,
        marginTop: 20,
    },
    categoryCard: {
        backgroundColor: "#fff",
        width: 70,
        height: 70,
        borderColor: "#E4E0EC",
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    recommendedJobs: {
        height: 196,
        width: "100%",
        alignItems: "center",
        marginTop: 25,
    },
    recommendedCardContainer: {
    },
    recommendedCards: {
        flexDirection: "row",
        height: 110,
        width: 280,
        borderRadius: 25,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems: "center",
        gap: 35,
        padding: 20,
        marginRight: 45,

    },
    newJobContainer: {
        flexDirection: "col",
        backgroundColor: "#fff",
        padding: 25,
    },
});
