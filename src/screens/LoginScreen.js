import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

/*

prueba de versionado

*/



const LoginScreen = ({ navigation }) => {

    const [value, onChangeText] = React.useState();
    const [pass, onChangePass] = React.useState();
    const image = { uri: "https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/Sexy/pexels-alleksana-4474754+(1).jpg" };



const logUser =() => {
    console.log("USUARIO"+ value+" /  PASS"+pass);
    if(value == null){
        alert("Usuario inválido");
        return;
    }
    if(pass == null){
        alert("Contraseña inválida");
        return;
    }
    if (value == pass){ // correcto
        navigation.navigate("DateScreen");
    }
    else{
        alert("Usuario o contraseña incorrectas");
    }

}

return(
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>¡Encuentra a tu Crush!</Text>
      </View>
      
      <ImageBackground source={image} style={styles.image}>
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
                                    placeholderTextColor = "#8E8B8B"
                                    placeholder={" Nickname"}>
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
                                    placeholderTextColor = "#8E8B8B"
                                    placeholder={" Password"}
                                    secureTextEntry={true}>
                          </TextInput>
                      </View>
                  </View>
              </View>
              <View style={styles.titleView}>
                <TouchableOpacity style={styles.btnView} onPress={()=>logUser()}>
                    <Text style={styles.btnLogin}>Ingresar</Text>
                </TouchableOpacity>
              </View>
          </View>
          </View>
          </ImageBackground>
      
      <View style={styles.header}>
          <Text style={styles.headerTitle}>By AdminCrush</Text>
      </View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: '#DC341B',
    flexDirection: 'column',

  },
  header:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#DC341B',
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
    backgroundColor:'#EFECEC',
    borderRadius: 10,
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
    opacity: .9,
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
    backgroundColor: '#DC341B',
    width: '90%',
    height: '80%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconLabel:{
    width: '10%',
    height:'100%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    
  },
  inputLabel:{
    width: '90%',
    height:'100%',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
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

export default LoginScreen;

