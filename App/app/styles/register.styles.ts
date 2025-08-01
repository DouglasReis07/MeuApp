import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 40, // distância do topo (ajuste se precisar)
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
  },
  title: {
    color: '#00AEEF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40, // espaço entre título e botões
  },
  button: {
    backgroundColor: '#00AEEF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
