import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Principais Notícias do Corinthians</Text>
            <Text style={styles.noticia}>
                Corinthians contrata novo técnico para a temporada.
            </Text>
            <Text style={styles.noticia}>
                Jogador destaque do Corinthians se recupera de lesão.
            </Text>
            <Text style={styles.noticia}>
                Corinthians anuncia novos reforços para o elenco.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    noticia: {
        fontSize: 18,
        marginBottom: 10,
    },
});
