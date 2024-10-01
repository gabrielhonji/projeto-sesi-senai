import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DBAInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>O que é um DBA?</Text>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-gratis/supervisor-na-inspeccao-de-rotina-do-servidor_482257-91220.jpg?ga=GA1.1.1518691510.1725365578&semt=ais_hybrid' }}
          style={styles.topImage}
        />
        <Text style={styles.cardText}>
          Um DBA (Database Administrator) é um profissional responsável pelo gerenciamento, manutenção e segurança dos bancos de dados de uma organização. Eles garantem que os dados estejam disponíveis, seguros e funcionem corretamente, além de otimizar o desempenho dos sistemas de banco de dados.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Responsabilidades de um DBA</Text>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-premium/ilustracao-gerada-profissional-feminina-de-ti-olhando-para-tablet-entre-racks-de-servidores-em-centro-de-dados_1088754-16310.jpg?ga=GA1.1.1518691510.1725365578&semt=ais_hybrid' }} // Substitua com a URL da imagem desejada
          style={styles.bottomImage}
        />
        <Text style={styles.cardText}>
          As principais responsabilidades de um DBA estão:
          {'\n'}- Instalação, configuração e gerenciamento de DB
          {'\n'}- Monitoramento e manutenção
          {'\n'}- Backup e recuperação de dados
          {'\n'}- Implementação de políticas de segurança
          {'\n'}- Resolução de problemas
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Habilidades Necessárias:</Text>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-premium/arranjamento-manual-de-blocos-de-madeira-com-icones-de-estrategia-de-negocios-vitais-subindo-como-degraus-simbolizando-crescimento-e-planejamento_1080238-2680.jpg?ga=GA1.1.1518691510.1725365578&semt=ais_hybrid' }}
          style={styles.topImage}
        />
        <Text style={styles.cardText}>
          {'\n'}- Instalação, configuração e gerenciamento de DB
          {'\n'}- Conhecimento em SQL
          {'\n'}- Lidar com sistema de gerenciamento (DBMS)
          {'\n'}- Habilidades de resolução de problemas
          {'\n'}- Boa comunicação
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Como é o mercado?</Text>
        <Image
          source={{ uri: 'https://img.freepik.com/vetores-gratis/pessoas-de-negocios-segurando-os-icones-de-estrategia_53876-43062.jpg?ga=GA1.1.1518691510.1725365578&semt=ais_hybrid' }}
          style={styles.topImage}
        />
        <Text style={styles.cardText}>
          Por conta do avanço da tecnologia e da necessidade de programas de sistemas de banco de dados, como o MySQL, o mercado está ampliado, e a oferta e alta.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Matérias relacionadas com DBA:</Text>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-gratis/homem-usando-um-tablet-para-trabalhar-e-se-conectar-com-outras-pessoas_23-2149369110.jpg?ga=GA1.1.1518691510.1725365578&semt=ais_hybrid' }}
          style={styles.topImage}
        />
        <Text style={styles.cardText}>
          {'\n'}- Matematica e Lógica
          {'\n'}- Informática e Programação
          {'\n'}- Sistemas de Informação e Gestão de Dados
          {'\n'}- Segurança da Informação
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  topImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  bottomImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DBAInfo;