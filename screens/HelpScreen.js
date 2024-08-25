import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Ajuda</Text>
    <Text style={styles.text}>
      Se você precisar de ajuda, entre em contato com nosso suporte através do menu "Fale Conosco".
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

export default HelpScreen;
