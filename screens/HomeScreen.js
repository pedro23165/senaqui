import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Easing } from 'react-native';

// Dados fictícios com apenas os títulos dos capítulos, seções e artigos do CTB
const ctbContent = {
  'Capítulo I - Das Disposições Preliminares': {
    'Seção I - Das Disposições Gerais': [
      'Art. 1º',
      'Art. 2º',
      'Art. 3º',
    ],
  },
  'Capítulo II - Da Circulação e Condutores': {
    'Seção I - Das Regras Gerais de Circulação': [
      'Art. 4º',
      'Art. 5º',
      'Art. 6º',
    ],
    'Seção II - Das Infrações e Penalidades': [
      'Art. 7º',
      'Art. 8º',
      'Art. 9º',
    ],
  },
  'Capítulo III - Da Fiscalização e Penalidades': {
    'Seção I - Da Fiscalização': [
      'Art. 10',
      'Art. 11',
      'Art. 12',
    ],
    'Seção II - Das Penalidades': [
      'Art. 13',
      'Art. 14',
      'Art. 15',
    ],
  },
};

const HomeScreen = ({ navigation }) => {
  const [animation] = useState(new Animated.Value(0));

  const animateItems = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateItems();
  }, []);

  const renderArticle = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ArticleDetail', { title: item })}
    >
      <Animated.View style={[styles.item, { opacity: animation, transform: [{ translateY: animation }] }]}>
        <Text style={styles.itemText}>{item}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  const renderSection = ({ item }) => (
    <View>
      <Text style={styles.section}>{item.section}</Text>
      <FlatList
        data={item.articles}
        keyExtractor={(item) => item}
        renderItem={renderArticle}
      />
    </View>
  );

  const renderChapter = ({ item }) => (
    <View>
      <Text style={styles.chapter}>{item.chapter}</Text>
      <FlatList
        data={item.sections}
        keyExtractor={(item) => item.section}
        renderItem={renderSection}
      />
    </View>
  );

  // Formata os dados para o FlatList
  const formattedData = Object.entries(ctbContent).map(([chapter, sections]) => ({
    chapter,
    sections: Object.entries(sections).map(([section, articles]) => ({
      section,
      articles,
    })),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tela Inicial</Text>
      <FlatList
        data={formattedData}
        keyExtractor={(item) => item.chapter}
        renderItem={renderChapter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d1b2a',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#e0e1dd',
    textAlign: 'center',
  },
  chapter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e1dd',
    marginVertical: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e1dd',
    marginVertical: 5,
  },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#e0e1dd',
  },
});

export default HomeScreen;
