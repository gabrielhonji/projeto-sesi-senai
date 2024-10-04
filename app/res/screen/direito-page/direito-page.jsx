// Gabriel / Test
import { Text, Box, SafeAreaView, Image, View, StyleSheet, ImageBackground, ScrollView, FlatList } from '@gluestack-ui/themed';
import LogoSesiBranca from '../../../src/img/sesi-senai-logo-branca.png';
import imagemFundo from '../../../src/img/iconeadvogado.png'
import iconeFundo from '../../../src/img/tabelaadvogado.png'
import tabelaFundo2 from '../../../src/img/tabela2advogado.png'


export default function DireitoScreen({ }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={30}>DIREITO</Text>
        </Box>
        <Box borderRadius={15} margin={10} w={'95%'} bg='red' justifyContent='center' alignItems='center' style={{ display: 'flex', flexDirection: 'row', gap: 30, paddingVertical: 20 }}>
          <Image ml={24} source={imagemFundo} />
          <FlatList w={'60%'}
          data={[
            { key: 'Sobre o curso!' },
            { key: 'Matérias Relacionadas!' },
            { key: 'Vocabulário Técnico!' },
            { key: 'Grafico' },
          ]}
          renderItem={({ item }) => {
            return (
              <Box style={{ marginBottom: 10 }}>
                <Text color='white'>{`\u2022 ${item.key}`}</Text>
              </Box>
            );
          }}
        />
        </Box>
        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={18}>Sobre o Curso</Text>
        </Box>
        <Text textAlign='center'>O objetivo do curso de Direito é formar profissionais capacitados para atuar na área jurídica,
          proporcionando uma base teórica sólida e desenvolvendo habilidades práticas essenciais para a resolução de conflitos e aplicação de normas. Além de promover a ética profissional e o pensamento crítico, o curso visa preparar os alunos para defender direitos e garantias fundamentais,
          incentivando uma atuação cidadã e o engajamento social. Também busca estimular a pesquisa e a inovação para enfrentar os desafios jurídicos contemporâneos, formando não apenas advogados, mas cidadãos conscientes e comprometidos com a justiça.
        </Text>
        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={18}>Matérias Relacionadas!</Text>
        </Box>
        <Text textAlign='center'>
          História: Ajuda a entender a evolução das leis e sistemas jurídicos ao longo do tempo.
          Geografia: Relaciona-se com a análise de territórios, legislação ambiental e direitos humanos.
          Filosofia: Aborda questões éticas e morais que são fundamentais para o Direito.
          Sociologia: Estuda as relações sociais e como as leis impactam a sociedade.
          Língua Portuguesa: Essencial para a interpretação de textos legais e a redação de documentos.</Text>
        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={18}>Vocabulario Técnico</Text>
        </Box>
        <Text textAlign='center'>
          1. Ação: Pedido judicial para a resolução de um litígio.
          2. Advogado: Profissional habilitado para representar clientes em questões legais.
          3. Apelação: Recurso para revisar uma decisão judicial em instâncias superiores.
          4. Citação: Ato de notificar alguém sobre um processo judicial em que está envolvido.
          5. Código: Conjunto de normas jurídicas organizadas sobre um tema específico (ex: Código Civil).
          6. Contratos: Acordos entre partes que geram obrigações e direitos.
          7. Demanda: Pedido formal de abertura de um processo judicial.
          8. Direitos Humanos: Direitos universais garantidos a todos os indivíduos.
          9. Jurídico: Relativo ao Direito e à prática legal.
          10. Litígios: Conflitos ou disputas levadas ao Judiciário.
          11. Petição: Documento apresentado ao juiz solicitando uma decisão ou ação judicial.
          12. Sentença: Decisão final proferida por um juiz em um processo.
          13. Transação: Acordo entre as partes para resolver um conflito sem decisão judicial.
          14. Tutela: Proteção judicial concedida a uma pessoa incapaz ou vulnerável.
          15. Usucapião: Aquisição de propriedade pela posse prolongada e contínua de um bem.
          16. Deferimento: Aprovação de um pedido ou solicitação pelo juiz.
          17. Indivíduo: Pessoa física que pode ser sujeito de direitos.
          18. Cláusula: Disposição contida em um contrato que estabelece direitos e obrigações.
          19. Dano Moral: Prejuízo que afeta a esfera psicológica ou emocional da pessoa.
          20. Responsabilidade Civil: Obrigação de reparar danos causados a outrem.</Text>
        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={18}>PodCast</Text>
        </Box>
        <Box w={'100%'} h={150}></Box>

        <Box borderRadius={5} margin={10} w={'95%'} h={100} bg='red' justifyContent='center' alignItems='center'>
          <Text color='white' fontWeight='bold' fontSize={18}>Gráfico</Text>
        </Box>
        <Image marginBottom={40} alignSelf='center' w={400} h={300} source={iconeFundo} />

        <Image alignSelf='center' w={300} h={300} source={tabelaFundo2} />





      </ScrollView>
    </SafeAreaView>
  );
}