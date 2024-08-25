import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Sobre o Aplicativo</Text>
    <Text style={styles.text}>
      Este aplicativo é desenvolvido para fornecer informações sobre as leis de trânsito e suas regulamentações.
    </Text>
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

export default AboutScreen;
