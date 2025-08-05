import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '\../styles/perfil.styles';

const menuOptions = [
  'Minhas Avaliações',
  'Configurações',
  'Ajuda',
  'Termos',
  'Sair',
];

const screenWidth = Dimensions.get('window').width;

export default function Perfil() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();
  const drawerAnim = useRef(new Animated.Value(screenWidth)).current;

  const openDrawer = () => {
    setDrawerVisible(true);
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setDrawerVisible(false));
  };

  const toggleDrawer = () => {
    if (drawerVisible) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Barra lateral animada */}
      {drawerVisible && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.overlay}>
            <Animated.View
              style={[
                styles.drawer,
                {
                  transform: [{ translateX: drawerAnim }],
                },
              ]}
            >
              {menuOptions.map((option, index) => (
                <TouchableOpacity key={index} style={styles.drawerItem}>
                  <Text style={styles.drawerText}>{option}</Text>
                  <Feather name="chevron-right" size={20} color="#00AEEF" />
                </TouchableOpacity>
              ))}
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      )}

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/pagina')}>
          <Ionicons name="home-outline" size={24} color="#00AEEF" />
          <Text style={styles.navText}>Página Inicial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/vagas')}>
          <Feather name="briefcase" size={22} color="#00AEEF" />
          <Text style={styles.navText}>Minhas Vagas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/mensagens')}>
          <Feather name="message-square" size={24} color="#00AEEF" />
          <Text style={styles.navText}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/perfil')}>
          <Feather name="user" size={24} color="#00AEEF" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
