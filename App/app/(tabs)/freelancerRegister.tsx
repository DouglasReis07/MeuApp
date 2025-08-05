import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/freelancerRegister.styles';
import { useRouter } from 'expo-router';
import { useUser } from '../context/UserContext';

export default function FreelancerRegister() {
  const router = useRouter();
  const { setUser } = useUser();

  const [form, setForm] = useState({
    nomeCompleto: '',
    email: '',
    password: '',
    celular: '',
    cpf: '',
    rg: '',
    cep: '',
    servicos: ['Carga e Descarga', 'Armação de paletes', 'Contagem de estoque'],
  });

  const handleChange = (field: string, value: string) => {
    if (field === 'cpf') {
      value = value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    if (field === 'celular') {
      value = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }

    if (field === 'cep') {
      value = value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
    }

    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    const camposObrigatorios = [
      { key: 'nomeCompleto', label: 'Nome completo' },
      { key: 'email', label: 'E-mail' },
      { key: 'password', label: 'Senha' },
      { key: 'celular', label: 'Celular' },
      { key: 'cpf', label: 'CPF' },
      { key: 'rg', label: 'RG' },
      { key: 'cep', label: 'CEP' },
    ];

    for (const campo of camposObrigatorios) {
      const valor = form[campo.key as keyof typeof form];
      if (!valor || String(valor).trim() === '') {
        Alert.alert('Campo obrigatório', `Preencha o campo: ${campo.label}`);
        return;
      }
    }

    try {
      const payload = {
        ...form,
        userType: 'freelancer',
      };

      console.log('Enviando dados para o backend:', payload);

      const response = await fetch(
        'https://meufreelancer.netlify.app/.netlify/functions/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      const data = await response.json();

      console.log('Resposta do backend:', data);
      setUser(data);
      router.push('/pagina');

    } catch (error) {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro', 'Não foi possível concluir o cadastro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Freelancer</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleChange('nomeCompleto', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          onChangeText={(value) => handleChange('password', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Celular"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={form.celular}
          onChangeText={(value) => handleChange('celular', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={form.cpf}
          onChangeText={(value) => handleChange('cpf', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="RG"
          placeholderTextColor="#ccc"
          onChangeText={(value) => handleChange('rg', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={form.cep}
          onChangeText={(value) => handleChange('cep', value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
