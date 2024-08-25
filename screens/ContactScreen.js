import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ContactScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Fale Conosco</Text>
    <Text style={styles.text}>Para entrar em contato conosco, envie um e-mail para suporte@exemplo.com</Text>
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

export default ContactScreen;
