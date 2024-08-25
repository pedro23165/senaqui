import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert, Animated } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (results.length > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [results]);

  const performSearch = () => {
    const dummyResults = [
      { id: '1', title: 'Resultado 1' },
      { id: '2', title: 'Resultado 2' },
      { id: '3', title: 'Resultado 3' }
    ];

    const filteredResults = dummyResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  };

  const handleItemClick = (item) => {
    Alert.alert('Item Selecionado', `Você selecionou: ${item.title}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pesquisa..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Pesquisar" onPress={performSearch} color="#1b263b" />
      <Animated.FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemClick(item)}>
            <Animated.View style={[styles.item, { opacity: fadeAnim }]}>
              <Text style={styles.itemText}>{item.title}</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
        style={{ opacity: fadeAnim }}
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
  input: {
    height: 40,
    borderColor: '#415a77', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#1f4068', 
    color: '#e0e1dd', 
  },
  item: {
    padding: 15,
    backgroundColor: '#1f4068', 
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#e0e1dd', 
  },
});

export default SearchScreen;
