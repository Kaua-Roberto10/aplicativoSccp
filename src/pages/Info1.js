import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Principais Títulos do Corinthians</Text>
            <Text style={styles.tituloNoticia}>Campeonato Brasileiro:</Text>
            <Text style={styles.noticia}>- 7 vezes (1990, 1998, 1999, 2005, 2011, 2015, 2017)</Text>
            <Text style={styles.tituloNoticia}>Copa do Brasil:</Text>
            <Text style={styles.noticia}>- 3 vezes (1995, 2002, 2009)</Text>
            <Text style={styles.tituloNoticia}>Copa Libertadores da América:</Text>
            <Text style={styles.noticia}>- 1 vez (2012)</Text>
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Torcida</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Info2")} style={styles.botao}>
                <Text style={styles.textoBotao}>Goleadores</Text>
            </Pressable>
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
        alignItens: 'center',
    },
    tituloNoticia: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    noticia: {
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 5,
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
    },
});
