import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Tl() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>The Last Of Us</Text>
      <Text style={styles.text}>
      The Last of Us Part I é um jogo de ação e sobrevivência desenvolvido pela Naughty Dog e lançado originalmente em 2013 para PlayStation 3, com remasterizações posteriores para PS4 e um remake para PS5 e PC..
      </Text>

      <Image source={require('../assets/capa tl.jpg')} style={styles.img} />

      <View>
      
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
    color: 'Black',
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
