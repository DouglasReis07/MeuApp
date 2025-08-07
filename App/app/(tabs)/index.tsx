import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/index.styles';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('https://meufreelancer.netlify.app/.netlify/functions/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: senha.trim(),
        }),
      });

      const data = await response.json();

      // Só passa se o backend retornar token
      if (response.status !== 200 || !data?.token) {
        Alert.alert('Erro', 'Email ou senha incorretos.');
        return;
      }

      // Aqui poderia salvar o token, se quiser manter sessão
      // await AsyncStorage.setItem('token', data.token);

      router.push('/pagina');

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Input de Email */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Input de Senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.inputWithIcon}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.eyeButton}>
          <Ionicons
            name={mostrarSenha ? 'eye' : 'eye-off'}
            size={24}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.orText}>Entre com</Text>

      {/* Botões Sociais */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <AntDesign name="google" size={28} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <FontAwesome name="facebook" size={28} color="#4267B2" />
        </TouchableOpacity>
      </View>

      {/* Link de Cadastro */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#fff', fontWeight: 'normal' }}>Não tem conta? </Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
