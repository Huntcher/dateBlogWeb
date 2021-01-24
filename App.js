import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'


/*

prueba de versionado

*/


export default function App() {

  const [value, onChangeText] = React.useState();
  const [pass, onChangePass] = React.useState();
//test

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Find Your Real Crush</Text>
      </View>
      <View style={styles.body}>
          <View style={styles.login}>
              <View style={styles.titleView}>
                  <Text style={styles.loginTitle}>Iniciar sesión</Text>
              </View>
              <View style={styles.loginView}>
                  <View style={styles.inputView}>
                      <View style={styles.iconLabel}>
                          <Icon
                            name='account'
                            type='material-community'
                            style={styles.icon}
                          />
                      </View>
                      <View style={styles.inputLabel}>
                          <TextInput style={styles.inputLogin}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                    placeholder={"Nickname"}>
                          </TextInput>
                      </View>
                  </View>
                  <View style={styles.inputView}>
                      <View style={styles.iconLabel}>
                      <Icon
                            name='key'
                            type='material-community'
                            style={styles.icon}
                          />
                      </View>
                      <View style={styles.inputLabel}>
                          <TextInput style={styles.inputLogin}
                                    onChangeText={text => onChangePass(text)}
                                    value={pass}
                                    placeholder={"Password"}
                                    secureTextEntry={true}>
                          </TextInput>
                      </View>
                  </View>
              </View>
              <View style={styles.titleView}>
                <TouchableOpacity style={styles.btnView} onPress={()=>alert("Usuario inválido")}>
                    <Text style={styles.btnLogin}>Ingresar</Text>
                </TouchableOpacity>
              </View>
          </View>
      </View>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>By OsoHorney</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  header:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },
  body:{
    width: '100%',
    height: '80%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center'
  },
  headerTitle:{
    color: '#ffffff',
    fontSize: 30,
  },
  login:{
    width: '60%',
    height: 300,
    backgroundColor:'#CBC7C7',
    borderRadius: 10,
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  loginTitle: {
    color: '#504E4E',
    fontSize: 25,
  },
  btnLogin:{
    color: '#ffffff',
    fontSize: 25,
  },
  titleView:{
    width: '100%',
    height: '25%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  loginView:{
    width: '100%',
    height: '50%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  inputView:{
    width: '100%',
    height:'50%',
    flexDirection:'row',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
  },
  btnView:{
    backgroundColor: '#B61515',
    width: '80%',
    height: '80%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconLabel:{
    width: '15%',
    height:'100%',
    
  },
  inputLabel:{
    width: '85%',
    height:'100%',
  },
  inputLogin:{ 
    width: '90%',
    height: 40, 
    backgroundColor: '#CECBCB', 
    borderWidth: 1, 
    borderRadius: 5,
  },
  icon:{
    fontSize: 69,
    color: 'black'
  }
});
