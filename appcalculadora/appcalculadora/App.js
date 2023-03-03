import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {

  const[num1, setnum1] = useState('');
  const[num2, setnum2] = useState('');

  function soma()
  {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }

  function subtrair()
  {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }

  function multiplicar()
  {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }

  function dividir()
  {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }

  return (<ScrollView>
    <View style={styles.container}>

  <Text style={styles.titulo}> Soma de valores </Text>
  <TextInput style={styles.input} keyboardType='numeric' placeholder='Digite um número' onChangeText={(num1)=>setnum1(num1)}

  />

  <TextInput style={styles.input1} keyboardType='numeric' placeholder='Digite um número'
  onChangeText={(num2)=>setnum2(num2)}/>

<TouchableOpacity style={styles.btn} onPress={soma}> 
<Text style={styles.titulobtn}>
Somar
</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.btn} onPress={subtrair}> 
<Text style={styles.titulobtn}>
Subtrair
</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.btn} onPress={multiplicar}> 
<Text style={styles.titulobtn}>
Multiplicar
</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.btn} onPress={dividir}> 
<Text style={styles.titulobtn}>
Dividir
</Text>
</TouchableOpacity>


    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 12,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    backgroundColor:'#87CEEB',
    borderRadius: 15,
    margin: 35,
    padding: 30,
    fontSize: 30,
  },
  input1:{
    backgroundColor:'#FFD700',
    borderRadius: 15,
    margin: 35,
    padding: 30,
    fontSize: 30,
  },
  btn:{
    alignItems:"center",
    backgroundColor:"#ff8578",
    margin: 35,
    borderRadius: 15,
    padding:15
  },
  titulobtn:{
    fontSize:25,
    color:"#ffffff"
  }

});
