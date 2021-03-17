import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if(imc < 18.6){
      alert(`Você esta a baixo do peso ${imc.toFixed(2)}`)
    }else if(imc >= 18.6 && imc < 24.9){
      alert(`Peso ideal ${imc.toFixed(2)}`)
    }else if(imc >= 24.9 && imc < 34.9){
      alert(`levimente acima do peso ${imc.toFixed(2)}`)
    }
  }
  return (
    <View style={styled.conteiner}>
      <Text style={styled.titulo}>Calcule o IMC</Text>
      <TextInput style={styled.input} value={peso} onChangeText={(peso) => setPeso(peso)} placeholder="Peso (kg)" placeholderTextColor="#fff" keyboardType="numeric" />
      <TextInput style={styled.input} value={altura} onChangeText={(altura) => setAltura(altura)} placeholder="Altura (cm)" placeholderTextColor="#fff" keyboardType="numeric" />
      <TouchableOpacity style={styled.button} onPress={handleSubmit}>
        <Text style={styled.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styled = StyleSheet.create({
  conteiner: {
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 35,
  },
  input: {
    margin: 15,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    fontSize: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#41acf4'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
})