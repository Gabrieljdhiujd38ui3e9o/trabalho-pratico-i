import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FormularioTreino from './src/components/formulariotreino';
import ItemTreino from './src/components/itemtreino';
import { Treino } from './src/types/treino';

export default function App() {
    const [treinos, setTreinos] = useState<Treino[]>([]);

    const adicionarTreino = (nome: string, series: string, repeticoes: string) => {
        const novoTreino: Treino = {
            id: Date.now().toString(),
            nomeExercicio: nome,
            series: series,
            repeticoes: repeticoes,
            concluido: false,
        };
        setTreinos([...treinos, novoTreino]);
    };

    const alternarStatus = (id: string) => {
        setTreinos(treinos.map(treino =>
            treino.id === id ? { ...treino, concluido: !treino.concluido } : treino
        ));
    };

    const excluirTreino = (id: string) => {
        setTreinos(treinos.filter(treino => treino.id !== id));
    };

    return (
        <SafeAreaView style={styles.tela}>
            <StatusBar style="light" />
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Treinos Xtremme</Text>

                <FormularioTreino onAdicionar={adicionarTreino} />

                <Text style={styles.tituloLista}>Lista de Exercícios</Text>

                <FlatList
                    data={treinos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemTreino
                            treino={item}
                            onAlternarStatus={alternarStatus}
                            onExcluir={excluirTreino}
                        />
                    )}
                    ListEmptyComponent={
                        <Text style={styles.textoVazio}>sem treino cadastrado.</Text>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: 'black',
    },
    conteudo: {
        padding: 15,
        marginTop: 20,
        flex: 1,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'red',
    },
    tituloLista: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
    },
    textoVazio: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        fontStyle: 'italic',
    }
});