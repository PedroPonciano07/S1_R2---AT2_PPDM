import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contatos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <Text>📞 Telefone: (11) 99999-9999</Text>
      <Text>💬 WhatsApp: (11) 98888-8888</Text>
      <Text>📍 Endereço: Rua Exemplo, 123</Text>
      <Text>🏢 CNPJ: 00.000.000/0001-00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});