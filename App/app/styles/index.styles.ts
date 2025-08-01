import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // fundo preto
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // texto branco
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1a1a1a', // fundo dos inputs
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#00AEEF', // azul vibrante
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    color: '#00AEEF',            // azul
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
