import React from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../styles/freelancerRegister.styles';

export default function FreelancerRegister() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={28} color="#00AEEF" />
      </TouchableOpacity>

      <Text style={styles.title}>Cadastre-se com</Text>

      {/* Botões sociais */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <AntDesign name="google" size={28} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <FontAwesome name="facebook" size={28} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>ou cadastre-se</Text>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Celular"
          keyboardType="phone-pad"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="RG"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          keyboardType="numeric"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Serviços"
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
