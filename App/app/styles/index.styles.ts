import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    flex: 1,
    height: 50,
    color: '#fff',
    paddingLeft: 10,
  },
  inputIcon: {
    marginLeft: 5,
  },
  eyeButton: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#00AEEF',
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
    color: '#00AEEF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  orText: {
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 15,
    width: '100%',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 10,
    width: '100%',
  },
  socialButtonGoogle: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonFacebook: {
    backgroundColor: '#fff',
    width: 50,
    height: 51,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
