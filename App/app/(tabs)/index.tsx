import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/index.styles';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => alert('Login não implementado')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#fff', fontWeight: 'normal' }}>Não tem conta? </Text>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
