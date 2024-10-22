import { Text, Box, SafeAreaView, HStack, Image, Pressable } from '@gluestack-ui/themed';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, ScrollView, View } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 
import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

const tools = [
  { name: "Colher de Pedreiro", image: "https://example.com/colher.jpg" },
  { name: "Prumo", image: "https://example.com/plumb.jpg" },
  { name: "Nível", image: "https://example.com/level.jpg" },
  { name: "Pá", image: "https://example.com/shovel.jpg" },
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
    icon: "https://example.com/pedreiro-icon.jpg"
  },
  {
    title: "Curso de Eletricista",
    description: "Fundamentos de eletricidade, instalação de sistemas elétricos e segurança.",
    icon: "https://example.com/electrician-icon.jpg"
  },
  {
    title: "Curso de Aprendizagem em Construção Civil",
    description: "Abrange diversos tópicos relacionados à construção civil, incluindo segurança e técnicas de construção.",
    icon: "https://example.com/construction-icon.jpg"
  },
  {
    title: "Matemática Aplicada à Construção",
    description: "Estudo de conceitos matemáticos relevantes para a construção civil.",
    icon: "https://example.com/math-icon.jpg"
  },
  {
    title: "Desenho Técnico",
    description: "Aprendizado sobre leitura e interpretação de projetos e desenhos técnicos.",
    icon: "https://example.com/technical-drawing-icon.jpg"
  },
  {
    title: "Curso de Reformas e acabamentos",
    description: "Ensina técnicas específicas para realizar reformas e acabamentos em edificações.",
    icon: "https://example.com/technical-drawing-icon.jpg"
  }
];

const CourseCard = ({ course }) => (
  <Box 
    bg='#f0f0f0' 
    p={5} 
    m={2} 
    borderRadius={10} 
    alignItems='center' 
    width='45%' 
    shadow={2} 
    borderColor="#ddd" 
    borderWidth={1}
  >
    <Image source={{ uri: course.icon }} alt={course.title} style={{ width: 50, height: 50 }} />
    <Text textAlign='center' fontWeight='bold' color='black' mt={2}>{course.title}</Text>
    <Text textAlign='center' color='#424242'>{course.description}</Text>
  </Box>
);

export default function PedreiroScreen() {
  const carouselRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null); // Para gerenciar o acordeão
  const carImages = [
    "https://blog.laredo.com.br/wp-content/uploads/2018/10/235341-redator-entregar-ate-as-12h-do-dia-0609-pedreiro-ou-empreiteira-qual-contratar-para-realizar-uma-obra.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alternar a visibilidade
  };

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
                <Image source={{ uri: tool.image }} alt={tool.name} style={{ width: 60, height: 60 }} />
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
       
        <Box name="secondBlock" bg='red' w={'100%'} mb={20}>
          <Box borderColor={'black'} borderWidth={1} height={50} justifyContent='center' alignItems='center'>
            <Text color='#fff' fontWeight='bold' fontSize={18}>
              Cursos relacionados
            </Text>
          </Box>

          {/* Carrossel de imagens */}
          <Carousel
            ref={carouselRef}
            data={carImages}
            renderItem={({ item }) => (
              <Image
                w={'100%'}
                h={200}
                source={{ uri: item }}
                alt="Carrossel imagem"
                resizeMode="cover"
                style={{ borderRadius: 10 }} 
              />
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            layout={"default"}
            inactiveSlideScale={0.9} 
            inactiveSlideOpacity={0.7} 
          />
          
          <Box flexDirection="row" flexWrap="wrap" justifyContent="space-around" p={5}>
            {courses.map(course => (
              <CourseCard key={course.title} course={course} />
            ))}
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});