import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/mensagens.styles';

export default function Mensagens() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagens</Text>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/pagina')}>
          <Ionicons name="home-outline" size={22} color="#00AEEF" />
          <Text style={styles.navText}>Página Inicial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/vagas')}>
          <FontAwesome5 name="briefcase" size={20} color="#00AEEF" />
          <Text style={styles.navText}>Minhas Vagas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mensagens')}>
          <Feather name="message-square" size={22} color="#00AEEF" />
          <Text style={styles.navText}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/perfil')}>
          <Feather name="user" size={22} color="#00AEEF" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
