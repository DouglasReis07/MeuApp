import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from './styles/freelancer.styles';

export default function Freelancer() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const validarEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!email || !senha) {
      return Alert.alert('Erro', 'Preencha todos os campos.');
    }

    if (!validarEmail(email)) {
      return Alert.alert('Erro', 'E-mail inválido.');
    }

    if (senha.length < 6) {
      return Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#000' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
            Login Freelancer
          </Animated.Text>

          <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY }] }}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
