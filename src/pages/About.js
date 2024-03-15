import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre o Corinthians</Text>
            <View style={styles.imagemContainer}>
                <Image
                    source={require('../pages/img/corinthians.png')}
                    style={styles.imagemCorinthians}
                />
            </View>
            <Text style={styles.informacoes}>
                O Sport Club Corinthians Paulista é um clube multiesportivo brasileiro sediado na cidade de São Paulo. 
                Fundado como uma equipe de futebol em setembro de 1910 por um grupo de operários do bairro Bom Retiro, 
                o clube se tornou um dos mais bem-sucedidos e populares do Brasil e do mundo.
            </Text>
        </View>
    )
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
        textAlign: 'center', // Centraliza o texto
    },
    imagemContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imagemCorinthians: {
        width: 200,
        height: 200,
    },
    informacoes: {
        fontSize: 16,
        textAlign: 'justify',
    },
})
