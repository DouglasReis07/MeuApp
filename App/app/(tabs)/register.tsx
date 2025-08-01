import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/register.styles';

const Register = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#00AEEF" />
      </TouchableOpacity>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/contratarRegister')}
        >
          <Text style={styles.buttonText}>QUERO CONTRATAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/freelancerRegister')}
        >
          <Text style={styles.buttonText}>SOU FREELANCER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
