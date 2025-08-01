import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/index.styles';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Container do input de email com ícone */}
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

      {/* Container do input de senha com ícone e botão olho */}
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

      <TouchableOpacity style={styles.loginButton} onPress={() => alert('Login não implementado')}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Entre com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <AntDesign name="google" size={28} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <FontAwesome name="facebook" size={28} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ color: '#fff', fontWeight: 'normal' }}>Não tem conta? </Text>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
