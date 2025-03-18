import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Ghost() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ghost Of Tsushima</Text>
      <Text style={styles.text}>
      O jogo se passa no ano 1274, durante a invasão mongol à ilha de Tsushima, no Japão feudal. O protagonista, Jin Sakai, é um samurai que sobrevive ao ataque inicial e precisa libertar sua terra do domínio inimigo.

        Para derrotar os mongóis, Jin precisa abandonar o código de honra dos samurais e adotar métodos furtivos e impiedosos, tornando-se o temido "Fantasma de Tsushima". O jogo explora o conflito interno de Jin entre honra e sobrevivência, além do impacto de suas ações na cultura samurai.
      </Text>
      <View>
      <Image source={require('../assets/ghost.jpeg')} style={styles.img} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  img: {
    width: 350,   
    height: 350,  
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginVertical: 20,  
  },
});
