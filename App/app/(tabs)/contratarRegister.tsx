import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/contratarRegister.styles';

export default function ContratarRegister() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#00AEEF" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput placeholder="Nome completo" placeholderTextColor="#999" style={styles.input} />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#999"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Celular"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="CPF"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput placeholder="RG" placeholderTextColor="#999" style={styles.input} />
        <TextInput
          placeholder="CEP"
          placeholderTextColor="#999"
          style={styles.input}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.registerButton} onPress={() => alert('Cadastro realizado!')}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
