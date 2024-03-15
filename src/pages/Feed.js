import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function Feed(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Principais Jogadores do Corinthians</Text>
            <View style={styles.row}>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/ronaldo.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Ronaldo</Text>
                </View>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/socrates.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Sócrates</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/marcelinho.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Marcelinho Carioca</Text>
                </View>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/rivelino.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Rivellino</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/carlos.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Carlos Tevez</Text>
                </View>
                <View style={styles.jogadorContainer}>
                    <Image
                        source={require('../pages/img/neto.jpg')}
                        style={styles.imagemJogador}
                    />
                    <Text style={styles.nomeJogador}>Neto</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    jogadorContainer: {
        alignItems: 'center',
    },
    imagemJogador: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    nomeJogador: {
        fontSize: 18,
        marginTop: 10,
    },
});
 