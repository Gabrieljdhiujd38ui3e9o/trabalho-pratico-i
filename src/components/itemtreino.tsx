import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Treino } from '../types/treino';

interface ItemTreinoProps {
    treino: Treino;
    onAlternarStatus: (id: string) => void;
    onExcluir: (id: string) => void;
}

export default function ItemTreino({ treino, onAlternarStatus, onExcluir }: ItemTreinoProps) {
    return (
        <View style={styles.itemLista}>
            <Text style={styles.textoNome}>{treino.nomeExercicio}</Text>
            <Text style={styles.textoDetalhes}>Séries: {treino.series}</Text>
            <Text style={styles.textoDetalhes}>Repetições: {treino.repeticoes}</Text>
            <Text style={styles.textoDetalhes}>
                Estado:{' '}
                <Text style={treino.concluido ? styles.statusConcluido : styles.statusPendente}>
                    {treino.concluido ? 'CONCLUÍDO' : 'PENDENTE'}
                </Text>
            </Text>

            <View style={styles.areaBotoes}>
                <TouchableOpacity
                    style={styles.botaoAcao}
                    onPress={() => onAlternarStatus(treino.id)}
                >
                    <Text style={styles.textoBotaoAcao}>Alterar Estado</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botaoExcluir}
                    onPress={() => onExcluir(treino.id)}
                >
                    <Text style={styles.textoBotaoAcao}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemLista: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'black',
    },
    textoNome: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    textoDetalhes: {
        color: 'white',
        marginTop: 4,
    },
    statusConcluido: {
        color: 'green',
        fontWeight: 'bold',
    },
    statusPendente: {
        color: 'red',
        fontWeight: 'bold',
    },
    areaBotoes: {
        flexDirection: 'row',
        marginTop: 10,
    },
    botaoAcao: {
        backgroundColor: 'green',
        padding: 8,
        marginRight: 10,
    },
    botaoExcluir: {
        backgroundColor: 'red',
        padding: 8,
    },
    textoBotaoAcao: {
        color: 'white',
        fontWeight: 'bold',
    }
});