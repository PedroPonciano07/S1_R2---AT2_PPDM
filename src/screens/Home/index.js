import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/891/891462.png' }}
        style={styles.logo}
      />

      {/* NOME */}
      <Text style={styles.title}>TechStore</Text>

      {/* DESCRIÇÃO */}
      <Text style={styles.subtitle}>
        Os melhores produtos de tecnologia com preços incríveis 🚀
      </Text>

      {/* BOTÕES */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.buttonText}>🛒 Ver Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Contato')}
      >
        <Text style={styles.buttonText}>📞 Fale Conosco</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A84FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  },

  subtitle: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
    marginVertical: 15
  },

  button: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  secondaryButton: {
    backgroundColor: '#1C1C1E'
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A84FF'
  }
});