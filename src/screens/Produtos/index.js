import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const produtos = [
  {
    id: 1,
    nome: 'PS5 Pro',
    preco: 100,
    pix: 90,
    img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3'
  },
  {
    id: 2,
    nome: 'PC Gamer DDR5',
    preco: 200,
    pix: 180,
    img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7'
  },
  {
    id: 3,
    nome: 'PC Gamer DDR4',
    preco: 300,
    pix: 270,
    img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c'
  },
  {
    id: 4,
    nome: 'Xbox Series X',
    preco: 250,
    pix: 225,
    img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d'
  },
  {
    id: 5,
    nome: 'Notebook Gamer RTX',
    preco: 400,
    pix: 360,
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302'
  }
];


let quantidades = {};

export default function Produtos() {

  const aumentar = (id) => {
    quantidades[id] = (quantidades[id] || 1) + 1;
    console.log('Quantidade:', quantidades[id]);
  };

  const diminuir = (id) => {
    quantidades[id] = (quantidades[id] || 1) > 1 ? quantidades[id] - 1 : 1;
    console.log('Quantidade:', quantidades[id]);
  };

  const adicionar = (id) => {
    const qtd = quantidades[id] || 1;
    alert(`Você adicionou ${qtd} unidade(s) ao carrinho`);
  };

  return (
    <ScrollView style={styles.container}>
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image source={{ uri: item.img }} style={styles.img} />

          <Text>{item.nome}</Text>
          <Text>Preço: R$ {item.preco}</Text>
          <Text>PIX: R$ {item.pix}</Text>

          {/* CONTROLE DE QUANTIDADE */}
          <View style={styles.qtdContainer}>
            <TouchableOpacity onPress={() => diminuir(item.id)} style={styles.qtdBtn}>
              <Text style={styles.qtdText}>-</Text>
            </TouchableOpacity>

            {/* ⚠️ não atualiza na tela */}
            <Text style={styles.qtdNumero}>
              {quantidades[item.id] || 1}
            </Text>

            <TouchableOpacity onPress={() => aumentar(item.id)} style={styles.qtdBtn}>
              <Text style={styles.qtdText}>+</Text>
            </TouchableOpacity>
          </View>

          <Button 
            title="Adicionar ao carrinho" 
            onPress={() => adicionar(item.id)} 
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },

  card: {
    marginBottom: 20,
    padding: 10,
    alignItems: 'center'
  },

  img: {
    width: 150,
    height: 100,
    marginBottom: 10,
    borderRadius: 10
  },

  qtdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },

  qtdBtn: {
    backgroundColor: '#0A84FF',
    padding: 10,
    borderRadius: 5
  },

  qtdText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  qtdNumero: {
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: 'bold'
  }
});