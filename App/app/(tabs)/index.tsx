import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/home.styles';

export default function Home() {
  const router = useRouter();

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

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Bem-vindo ao FreeHub
      </Animated.Text>

      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/empresa')}
        >
          <Text style={styles.buttonText}>Sou Empresa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/freelancer')}
        >
          <Text style={styles.buttonText}>Sou Freelancer</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
