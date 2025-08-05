import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/pagina.styles';

export default function Pagina() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#00AEEF" />
        </TouchableOpacity>
      </View>

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
