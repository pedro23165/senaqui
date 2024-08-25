import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Dúvidas</Text>
    <Text style={styles.text}>Aqui estão algumas perguntas frequentes.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0d1b2a',
  },
  heading: {
    fontSize: 24,
    color: '#e0e1dd',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#e0e1dd',
  },
});

export default QuestionsScreen;
