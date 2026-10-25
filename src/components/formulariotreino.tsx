import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

interface FormularioTreinoProps {
  onAdicionar: (nome: string, series: string, repeticoes: string) => void;
}

export default function FormularioTreino({ onAdicionar }: FormularioTreinoProps) {
  const [nome, setNome] = useState('');
  const [series, setSeries] = useState('');
  const [repeticoes, setRepeticoes] = useState('');

  const handleAdicionar = () => {
    if (nome.trim() === '' || series.trim() === '' || repeticoes.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    onAdicionar(nome, series, repeticoes);
    
    setNome('');
    setSeries('');
    setRepeticoes('');
  };

  return (
    <View style={styles.caixa}>
      <Text style={styles.rotulo}>Nome do Exercício:</Text>
      <TextInput
        style={styles.campoTexto}
        value={nome}
        onChangeText={setNome}
       
      />
      
      <Text style={styles.rotulo}>Quantidade de Séries:</Text>
      <TextInput
        style={styles.campoTexto}
        value={series}
        onChangeText={setSeries}
        keyboardType="numeric"
    
      />
      
      <Text style={styles.rotulo}>Quantidade de Repetições:</Text>
      <TextInput
        style={styles.campoTexto}
        value={repeticoes}
        onChangeText={setRepeticoes}
        keyboardType="numeric"
  
      />
      
      <TouchableOpacity style={styles.botaoSalvar} onPress={handleAdicionar}>
        <Text style={styles.textoBotao}>Salvar Exercicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  caixa: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  rotulo: {
    color: 'white', 
    marginBottom: 4,
  },
  campoTexto: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    marginBottom: 10,
    color: 'white', 
  },
  botaoSalvar: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  }
});