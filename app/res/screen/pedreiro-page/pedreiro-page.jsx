import { Text, Box, SafeAreaView, HStack, Image, Pressable } from '@gluestack-ui/themed';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, ScrollView, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; 

import colher from '../../../src/img/pedreiro/colherdepedreiro.png';
import prumo from '../../../src/img/pedreiro/prumo.png';
import nivel from '../../../src/img/pedreiro/nivel.png';
import pa from '../../../src/img/pedreiro/pa.png';

const tools = [
  { name: "Colher de Pedreiro", image: colher },
  { name: "Prumo", image: prumo },
  { name: "Nível", image: nivel },
  { name: "Pá", image: pa },
];

const safetyTips = [
  "Use sempre equipamentos de proteção individual (EPIs).",
  "Mantenha o local de trabalho limpo e organizado.",
  "Verifique as condições climáticas antes de iniciar o trabalho.",
  "Utilize ferramentas adequadas para cada tipo de tarefa."
];

const FAQ = [
  { question: "Qual é a importância de usar EPIs?", answer: "Os EPIs são essenciais para proteger o trabalhador de acidentes." },
  { question: "Quais são as principais habilidades de um pedreiro?", answer: "É importante ter habilidades em leitura de projetos, conhecimento de materiais e técnicas de construção." },
];

const courses = [
  {
    title: "Curso de Pedreiro",
    description: "Aprenda as técnicas de alvenaria, leitura de projetos e uso de ferramentas.",
  },
  {
    title: "Curso de Eletricista",
    description: "Fundamentos de eletricidade, instalação de sistemas elétricos e segurança.",
  },
  {
    title: "Curso de Aprendizagem em Construção Civil",
    description: "Abrange diversos tópicos relacionados à construção civil, incluindo segurança e técnicas de construção.",
  },
  {
    title: "Curso de Reformas e acabamentos",
    description: "Ensina técnicas específicas para realizar reformas e acabamentos em edificações.",
  },
  {
    title: "Matemática Aplicada à Construção",
    description: "Estudo de conceitos matemáticos relevantes para a construção civil.",
  },
  {
    title: "Desenho Técnico",
    description: "Aprendizado sobre leitura e interpretação de projetos e desenhos técnicos.",
  },
];

const CourseCard = ({ course }) => (
  <Box 
    bg='#f9f9f9' 
    p={10} 
    m={2} 
    borderRadius={15} 
    alignItems='center' 
    width='45%' 
    borderColor="#ddd" 
    borderWidth={1}
    style={styles.card}
  >
    <Text textAlign='center' fontWeight='bold' color='#333' fontSize={20} mt={2}>{course.title}</Text>
    <Text textAlign='center' color='#666' style={styles.courseDescription}>{course.description}</Text>
  </Box>
);

export default function PedreiroScreen() {
  const carouselRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const carImages = [
    require('../../../src/img/pedreiro/slider1.jpg'), 
    require('../../../src/img/pedreiro/slider2.jpg'), 
    require('../../../src/img/pedreiro/slider3.jpg'), 
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [carImages.length]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };
  
  const pieData = [
    {
      name: 'Obras Viárias',
      population: 111,
      color: '#00ff00',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Instalações',
      population: 90,
      color: '#0000ff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Construção',
      population: 80,
      color: '#ffff00',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Obras de Artes',
      population: 70,
      color: '#ff00ff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Edificações',
      population: 60,
      color: '#00ffff',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
    {
      name: 'Acabamentos',
      population: 40,
      color: '#ff8000',
      legendFontColor: '#fff',
      legendFontSize: 13,
    },
  ];

  return (
    <SafeAreaView flex={1} bg='#fff'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box bg='red' h={130} justifyContent='center' alignItems='center'> 
          <Text color='#fff' fontWeight='bold' fontSize={35}>Pedreiro</Text>
        </Box>

        <Svg height={89} width={Dimensions.get('screen').width} viewBox='0 0 1440 311.9'>
          <Path fill='red' d="M0,224L80,192C160,160,320,96,480,106.7C640,117,800,203,960,234.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </Svg>

        <Box bg='#fff' w='90%' h={150} p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>O que faz?</Text>
          <Text color='#424242'>Realiza trabalhos de alvenaria, concreto e outros materiais guiando-se por desenhos, esquemas e especificações. Utiliza projetos e instrumentos para construir, reformar ou reparar as construções.</Text>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2} mb={10}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Ferramentas Comuns</Text>
          <HStack flexWrap='wrap'>
            {tools.map(tool => (
              <Box key={tool.name} bg='#f0f0f0' p={5} m={2} borderRadius={10} alignItems='center' width='40%' shadow={1} borderColor="#ddd" borderWidth={1}>
                <Image source={tool.image} alt={tool.name} style={{ width: 60, height: 60 }} />
                <Text textAlign='center' color='black' fontWeight='bold'>{tool.name}</Text>
              </Box>
            ))}
          </HStack>
        </Box>

        <Box bg='#fff' w='100%' p={10} borderRadius={10} shadow={2}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>Dicas de Segurança</Text>
          {safetyTips.map((tip, index) => (
            <Text key={index} color='#424242'>• {tip}</Text>
          ))}
        </Box>

        <Box name="accordion" bg='#fff' w='100%' p={10} borderRadius={10} shadow={2} mb={20}>
          <Text color='black' fontWeight='bold' fontSize={25} mb={10}>FAQ</Text>
          {FAQ.map((item, index) => (
            <View key={index} mb={5}>
              <Pressable 
                onPress={() => toggleAccordion(index)} 
                style={({ pressed }) => [
                  styles.accordionButton, 
                  pressed ? styles.pressed : null
                ]}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Text style={expandedIndex === index ? styles.arrowUp : styles.arrowDown}>▼</Text>
              </Pressable>
              {expandedIndex === index && (
                <Text style={styles.answerText}>{item.answer}</Text>
              )}
            </View>
          ))}
        </Box>
       
        <Box name="secondBlock" bg='red' w={'100%'}>
          <Box style={styles.carouselContainer}>
            <Carousel
              ref={carouselRef}
              data={carImages}
              renderItem={({ item }) => (
                <Image
                  w={'100%'}
                  h={200}
                  source={item} 
                  alt="Carrossel imagem"
                  resizeMode="cover"
                />
              )}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              layout={"default"}
              inactiveSlideScale={0.9} 
              inactiveSlideOpacity={0.7} 
              firstItem={activeIndex}
            />
          </Box>
          
          <Box justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Mercado de trabalho</Text>
          </Box>

          <Box name='Mercado de trabalho' alignItems='center' justifyContent='center'>
            <Text p={15} color='#fff'>
              O mercado de trabalho para pedreiros é promissor, com oportunidades e salários valorizados. A profissão é fundamental para o desenvolvimento do país e é sempre requisitada para obras de diversos tipos. A jornada máxima diária de um pedreiro é de 8 horas, e a máxima semanal é de 44 horas. A lei permite que o trabalhador extrapole o horário contratual em até 2 horas por dia. O mercado de trabalho para os pedreiros é bastante variado. Há oportunidades em empresas de construção, empreiteiras, empresas de renovação e manutenção, e também como autônomos. A demanda por pedreiros é alta, especialmente em áreas onde há muita construção e renovação acontecendo.
            </Text>
          </Box>
          
          <Box name='grafico' justifyContent='center' alignItems='center' mt={10} style={styles.chartContainer}>
            <Text color='white' fontWeight='bold' fontSize={25} m={10}>Áreas de Maior Crescimento na Construção Civil em 2023</Text>
            <View style={styles.pieChartContainer}>
              <PieChart
                data={pieData}
                width={Dimensions.get('window').width - 30} 
                height={230}
                chartConfig={{
                  backgroundColor: "#ffffff",
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                accessor="population" 
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          </Box>

          <Box justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Cursos Relacionados</Text>
          </Box>

          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={10}>
            {courses.map(course => (
              <CourseCard key={course.title} course={course} />
            ))}
          </Box>
          
          <Box name='materias relacionadas' justifyContent='center' alignItems='center' mt={10}>
            <Text color='white' fontWeight='bold' fontSize={30}>Matérias Relacionadas</Text>

            <Text color='white' fontSize={16} p={10}>
              A profissão de pedreiro é essencial na construção civil e requer conhecimentos de diversas disciplinas escolares. Veja abaixo as matérias importantes:
            </Text>
            <Text color='white' fontSize={16} textAlign='left' p={10}>
              • Matemática: Fundamental para realizar cálculos de medidas, áreas e quantidades de materiais.  
            </Text>
            <Text color='white' fontSize={16} textAlign='left' p={10}>
              • Física: Ajuda a entender os princípios de segurança e estabilidade das estruturas.
            </Text>
            <Text color='white' fontSize={16} textAlign='left' p={10}>
              • Química: Importante para conhecer e entender as propriedades dos materiais, como o concreto e sua resistência.
            </Text>
            <Text color='white' fontSize={16} textAlign='left' p={10}>
              • Geografia: Fornece informações sobre o terreno e as condições adequadas para a construção.
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9', 
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  carouselContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10,
    elevation: 10,
    overflow: 'hidden',
  },
  accordionButton: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 5,
    transition: 'background-color 0.3s ease',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressed: {
    backgroundColor: '#e8e8e8',
  },
  questionText: {
    padding: 10,
    width: 270,
    backgroundColor:'#e8e8e8',   
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  answerText: {
    marginBottom: 20,
    color: '#424242',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderLeftWidth: 2,
    borderLeftColor: 'red',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  arrowDown: {
    fontSize: 16,
    color: '#666',
  },
  arrowUp: {
    fontSize: 16,
    color: '#666',
  },
  courseDescription: {
    color: '#555', 
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  
});