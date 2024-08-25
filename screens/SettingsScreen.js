import React from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation, setIsLoggedIn }) => {
  const handleLogout = () => {
    Alert.alert(
      'Sair da Conta',
      'Você tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          onPress: () => {
            setIsLoggedIn(false); 
            navigation.navigate('Login'); 
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tela de Configurações</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('About')}>
        <Text style={styles.optionText}>Sobre o Aplicativo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PersonalData')}>
        <Text style={styles.optionText}>Dados Cadastrais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.optionText}>Fale Conosco</Text>
      </TouchableOpacity>

      <View style={styles.spacing} />

      <Button title="Sair da Conta" onPress={handleLogout} color="#e0e1dd" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1b2a', 
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#e0e1dd', 
  },
  option: {
    padding: 15,
    marginVertical: 5,
    width: '80%',
    backgroundColor: '#1b263b',
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#e0e1dd',
  },
  spacing: {
    height: 20,
  },
});

export default SettingsScreen;
