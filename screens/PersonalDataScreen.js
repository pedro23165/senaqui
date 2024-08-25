import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PersonalDataScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Dados Cadastrais</Text>
    <Text style={styles.text}>Aqui você pode ver e alterar seus dados cadastrais.</Text>
    <Button title="Alterar Dados" onPress={() => navigation.navigate('UpdateData')} />
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
    marginBottom: 20,
  },
});

export default PersonalDataScreen;
