import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Info2({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Principais Goleadores pelo Corinthians</Text>
            <Text style={styles.goleador}>1. Cláudio (305 gols)</Text>
            <Text style={styles.goleador}>2. Rivellino (204 gols)</Text>
            <Text style={styles.goleador}>3. Teleco (194 gols)</Text>
            <Text style={styles.goleador}>4. Marcelinho Carioca (206 gols)</Text>
            <Text style={styles.goleador}>5. Sócrates (172 gols)</Text>
            <Text style={styles.goleador}>6. Ronaldo (170 gols)</Text>
            <Pressable style={styles.botao} onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>Torcida</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Info1")} style={styles.botao}>
                <Text style={styles.textoBotao}>Títulos</Text>
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
    },
    goleador: {
        fontSize: 18,
        marginBottom: 10,
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
