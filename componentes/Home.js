import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function Home(props) {
    return (


            <SafeAreaView style={estilo.safeContainer}>
                <Text style={estilo.titulo}>Os melhores jogos</Text>
                <Text style={estilo.texto}>Ranking dos melhores jogos já feitos!</Text>

                <View>
                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('Tl')}>
                        <Text style={estilo.textButton}>The Last of Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('Ghost')}>
                        <Text style={estilo.textButton}>Ghost Of Tsushima</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
    },
    safeContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,  
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#d32f2f',  
        marginBottom: 20,  
    },
    texto: {
        fontSize: 18,
        color: '#black',  
        textAlign: 'center',  
        marginBottom: 30,
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: '#388e3c',  
        borderRadius: 10,
        alignItems: 'center',
        width: 250,  
    },
    textButton: {
        fontSize: 18,
        color: '#fff',  
    },
});
