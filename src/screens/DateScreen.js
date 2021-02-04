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



  let inputProps={
    id: '001',
    mensajes:[
      {id: '1',user: 'Admin',msg: 'Buenas tardes a todos, bienvenidos... Conocen las reglas, sean honestos, abiertos y respetuosos, les recuerdo que este es un grupo privado.',date: '01/02/2021 17:19',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-splitshire-1702.jpg',},
      {id: '2',user: 'Aguss',msg: 'Hola Admin gracias por este espacio que nos das, soy Agustin tengo 30 años me encanta viajar y conocer cosas nuevas',date: '01/02/2021 19:03',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-marcelo-chagas-3149036.jpg',},
      {id: '3',user: 'Mike Bloom',msg: 'Hey todos! soy Miguel ojala podamos conocernos, trabajo en inversiones y ventas.',date: '01/02/2021 20:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-yogendra-singh-1760900.jpg',},
      {id: '4',user: 'Jezz',msg: 'Hola chicos! creo que somos muy poquitos jeje soy Jezz y amo la fotografía.',date: '02/02/2021 18:02',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Mujeres/pexels-marcelo-chagas-1808284.jpg',},
      {id: '5',user: 'Isra B',msg: 'Hola Jezz, soy Isra, tambien me gusta la fotografía quizá podriamos colaborar algun día',date: '02/02/2021 18:12',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-wesner-rodrigues-1892876.jpg',},
      {id: '6',user: 'Yosh Black',msg: 'Jajajaja tranquilo amigo dejala respirar...',date: '02/02/2021 23:39',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-yogendra-singh-1356272.jpg',},
      {id: '7',user: 'Lore Gil',msg: 'Agus, café o cerveza?',date: '03/02/2021 8:14',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Mujeres/pexels-marcelo-chagas-1808283.jpg',},
      {id: '8',user: 'Abiix',msg: 'Libre el viernes?',date: '03/02/2021 10:15',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Mujeres/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '9',user: 'Jimmy K',msg: 'Conozco un buen lugar para tomar un trago, esta abierto al público por todo este tema de la pandemia... Que dices?',date: '03/02/2021 10:38',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-pixabay-220453.jpg',},
      {id: '10',user: 'Gonz',msg: 'Abiix, vamos a cuerna! paso por ti?',date: '03/02/2021 12:31',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-martin-pe%CC%81chy-594610.jpg',},
      {id: '11',user: 'Bruno FG',msg: 'Yo estoy libre Abi, ¿nos escapamos?',date: '03/02/2021 17:55',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Hombres/pexels-lucas-pezeta-1959698.jpg',},
      {id: '12',user: 'Abiix',msg: 'Jeje, tranquilos niños!! hay muchos viernes...',date: '04/02/2021 19:02',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/Mujeres/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '13',user: 'System',msg: 'Abiix y Gonz han iniciado una platica privada',date: '04/02/2021 19:03',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/Sexy/pexels-tim-mossholder-3690735.jpg',},
    ]
 };
      const getListMessage = () => {
    let type = [];
    inputProps.mensajes.map((item) => {

      type.push(

        <View key={item.id} style={styles.viewMessage}>
        <View style={styles.imageMessage}>
            <Avatar rounded
              source={{
                uri: item.pic,
              }}
              size="large"
              />
        </View>
        <View style={styles.textMessage}>
          <View style={styles.messageArea}>
          <Text style={styles.labelNameMessage}>{item.user}</Text>
            <Text style={styles.labelMessage}>{item.msg}</Text>
          </View>
          <View style={styles.messageDate}> 
            <Text style={styles.labelDate}>{item.place} - {item.date}</Text>
          </View>
        </View> 
      </View>

      );
    });
    return type;
  };

return(
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Conoce a tu crush</Text>
      </View>
      <ScrollView >
        <View style={styles.body}>

        
          <View style={styles.viewChat}>
              
              {getListMessage()}

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
    height: '7%',
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

