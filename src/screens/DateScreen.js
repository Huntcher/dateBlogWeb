import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';


/*

prueba de versionado

*/

 

const DateScreen = ({ navigation }) => {


    const [value, onChangeText] = React.useState();
    const [pass, onChangePass] = React.useState();

return(
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Conoce a tu crush</Text>
      </View>
      <ScrollView >
        <View style={styles.body}>

        
          <View style={styles.viewChat}>
              <View style={styles.viewMessage}>
                <View style={styles.imageMessage}>
                    <Avatar rounded
                      source={{
                        uri: 'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-elle-hughes-1680172.jpg',
                      }}
                      size="large"
                      />
                </View>
                <View style={styles.textMessage}>
                  <View style={styles.messageArea}>
                  <Text style={styles.labelNameMessage}>Makilove</Text>
                    <Text style={styles.labelMessage}>Hola a todos, soy Makilove... amo los días lluviosos y la fotografía, nos podemos ver?</Text>
                  </View>
                  <View style={styles.messageDate}> 
                    <Text style={styles.labelDate}>CDMX - 12/02/2021 04:13pm</Text>
                  </View>
                </View> 
              </View>

              <View style={styles.viewMessage}>
                <View style={styles.imageMessage}>
                    <Avatar rounded
                      source={{
                        uri: 'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Mujeres/pexels-bran-sodre-1852345.jpg',
                      }}
                      size="large"
                      />
                </View>
                <View style={styles.textMessage}>
                  <View style={styles.messageArea}>
                  <Text style={styles.labelNameMessage}>PrinceLea</Text>
                    <Text style={styles.labelMessage}>Hola a niños!! estoy de visita en CDMX por 3 meses ojala pudiera conocer a mi principe azul</Text>
                  </View>
                  <View style={styles.messageDate}> 
                    <Text style={styles.labelDate}>CDMX - 11/02/2021 08:03am</Text>
                  </View>
                </View> 
              </View>

          </View>
        </View>
      </ScrollView>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>By OsoHorney</Text>
      </View>
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
    backgroundColor: '#D61A1A',
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
  },
  viewChat:{
    width:'100%',
    height: '85%',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10
  },
  viewMessage: {
    width: '80%',
    height: 100,
    backgroundColor: '#CECBCB', 
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
  },
  imageMessage:{
    width: '25%',
    height: '100%',
    alignItems:'center',
    justifyContent: 'center',
  },
  textMessage: {
    width: '75%',
    height: '100%',
    alignItems:'center',
    justifyContent: 'center', 
    flexDirection: 'column',
  },
  messageArea:{
    width: '100%',
    height: '80%',
  },
  messageDate:{
    width: '100%',
    height: '20%',
    alignItems: 'flex-end',
  },
  labelMessage: {
    color: '#686464',
    fontSize: 12,
    margin: 2,
  },
  labelDate: {
    color: '#686464',
    fontSize: 10,
    marginRight: 20

  },labelNameMessage:{
    color: '#686464',
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 3,
  }

});

export default DateScreen;

