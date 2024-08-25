import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, Image, Animated, View } from 'react-native';

const apiUrl = 'http://192.168.100.52:3000/users';

const logo = require('../assets/pngwing.com.png'); 

function LoginScreen({ navigation, setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const fadeAnim = useState(new Animated.Value(0))[0];
  const moveAnim = useState(new Animated.Value(0))[0]; 

  React.useEffect(() => {
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, moveAnim]);

  const handleLogin = async () => {
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        setIsLoggedIn(true);
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente.');
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      const existingUser = users.find(u => u.email === email);

      if (existingUser) {
        Alert.alert('Erro', 'Já existe uma conta com esse e-mail.');
        return;
      }

      const registerResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (registerResponse.ok) {
        Alert.alert('Cadastro realizado com sucesso!', 'Você pode agora fazer login com seu novo usuário.');
        setIsRegistering(false);
      } else {
        Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[
          styles.logo,
          { opacity: fadeAnim, transform: [{ translateX: moveAnim }] } 
        ]}
      />
      <Animated.View style={[styles.form, { opacity: fadeAnim }]}>
        {isRegistering ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirme a Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.spacing} />
            <TouchableOpacity style={styles.button} onPress={() => setIsRegistering(false)}>
              <Text style={styles.buttonText}>Voltar para Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#ccc"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.spacing} />
            <TouchableOpacity style={styles.button} onPress={() => setIsRegistering(true)}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1b2a',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  form: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#1b263b',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: 'rgba(65, 90, 119, 0.5)', 
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#1f4068',
    color: '#e0e1dd',
  },
  spacing: {
    height: 10,
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#1b263b',
    borderColor: 'rgba(65, 90, 119, 0.5)', 
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#e0e1dd',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
