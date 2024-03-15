import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Torcida</Text>
            <Image
                source={require('../pages/img/torcida.jpg')}
                style={styles.imagemTorcida}
                resizeMode="contain" // Redimensiona a imagem para caber dentro do componente Image
            />
            <Pressable onPress={() => navigation.navigate('Info1')} style={styles.botao}>
                <Text style={styles.textoBotao}>Títulos</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imagemTorcida: {
        width: '100%', // Define a largura para preencher a largura do container
        height: 300, // Altura desejada para a imagem
        marginBottom: 20,
    },
    botao: {
        padding: 20,
        width: 200,
        height: 40,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
