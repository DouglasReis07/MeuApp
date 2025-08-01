import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/register.styles';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Setinha no topo */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#00AEEF" />
      </TouchableOpacity>

      {/* Título e botões centralizados */}
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        <TouchableOpacity style={styles.button} onPress={() => alert('Quero contratar')}>
          <Text style={styles.buttonText}>QUERO CONTRATAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => alert('Sou Freelancer')}>
          <Text style={styles.buttonText}>SOU FREELANCER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
