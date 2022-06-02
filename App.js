import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Álbuns do milênio</Text>
      <ScrollView>
      <StatusBar style="auto" />
      <Text style={estilo.album}>Blurryface</Text>
      <Image style={estilo.img}source={require("./assets/blurryface.jpg")}/>
      <Text style={estilo.album}>Eyes Wide Open</Text>
      <Image style={estilo.img}source={require("./assets/eyeswideopen.jpg")}/>
      <Text style={estilo.album}>Formula of Love</Text>
      <Image style={estilo.img}source={require("./assets/formulaoflove.jpg")}/>
      <Text style={estilo.album}>Scaled & Icy</Text>
      <Image style={estilo.img}source={require("./assets/scalednicy.jpg")}/>

      </ScrollView>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8eces4',
    alignItems: 'center',

  },
  titulo:{
      fontSize:40,
      marginTop:30,
      color:"#023947",
  },
  img:{
    width:300,
    height:300,
    marginTop:2,
    borderRadius:10,
  },
  album:{
    fontSize:20,
    marginTop:40,
    marginBottom:8,
    textAlign:'center',
  }
});
