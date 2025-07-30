import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // texto branco
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    color: '#fff', // texto branco dentro do input
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#27ae60',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // texto branco no botão
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#fff', // texto branco no link
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
