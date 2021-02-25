import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
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

      {id: '1',user: 'Admin',receiver: 'Todos',msg: 'Buenos días a todos, bienvenidos... Conocen las reglas, sean honestos, abiertos y respetuosos, les recuerdo que este es un grupo privado que responde al evento #FindYourRealCrush032021, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior. Diviertanse y que encuentren a su crush!!!',date: '1 Mar',hour: '8:19',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '2',user: 'Aguss',receiver: 'Todos',msg: 'Hola Admin gracias por este espacio que nos das, soy Agustin tengo 30 años me encanta viajar y conocer cosas nuevas',date: '1 Mar',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '3',user: 'Mike Bloom',receiver: 'Todos',msg: 'Hey todos! soy Miguel ojala podamos conocernos, trabajo en inversiones y ventas.',date: '1 Mar',hour: '20:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '4',user: 'Jezz',receiver: 'Todos',msg: 'Hola chicos! creo que somos muy poquitos jeje soy Jezz y amo la fotografía.',date: '2 Mar',hour: '18:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '5',user: 'Isra B',receiver: 'Jezz',msg: 'Hola Jezz, soy Isra, tambien me gusta la fotografía quizá podriamos colaborar algun día',date: '2 Mar',hour: '18:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '6',user: 'Yosh Black',receiver: 'Isra B',msg: 'Jajajaja tranquilo amigo dejala respirar...',date: '2 Mar',hour: '23:39',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg', type: 1},
      {id: '7',user: 'Lore Gil',receiver: 'Aguss',msg: 'Agus, café o cerveza?',date: '3 Mar',hour: '8:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg', type: 1},
      {id: '8',user: 'Abiix',receiver: 'Todos',msg: 'Libre el viernes?',date: '3 Mar',hour: '10:15',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '9',user: 'Jimmy K',receiver: 'Abiix',msg: 'Conozco un buen lugar para tomar un trago, esta abierto al público por todo este tema de la pandemia... Que dices?',date: '3 Mar',hour: '10:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '10',user: 'Gonz',receiver: 'Abiix',msg: 'Abiix, vamos a cuerna! paso por ti?',date: '3 Mar',hour: '12:31',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '11',user: 'Bruno FG',receiver: 'Abiix',msg: 'Yo estoy libre Abi, ¿nos escapamos?',date: '3 Mar',hour: '17:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '12',user: 'Abiix',receiver: 'Todos',msg: 'Jeje, tranquilos niños!! hay muchos viernes...',date: '4 Mar',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '13',user: 'Sistema',receiver: 'Todos',msg: 'Abiix y Gonz han iniciado una platica privada',date: '4 Mar',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '14',user: 'VickyLu',receiver: 'Sistema',msg: 'Wiiii, parejita y yo tan sola 😢',date: '5 Mar',hour: '11:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 1},
      {id: '15',user: 'Bruno FG',receiver: 'VickyLu',msg: 'Eso puede cambiar Vicky, cuantos años tienes?',date: '5 Mar',hour: '12:16',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '16',user: 'VickyLu',receiver: 'Bruno FG',msg: '23 🥰 soy muy bebe',date: '5 Mar',hour: '13:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg', type: 1},
      {id: '17',user: 'Bruno FG',receiver: 'VickyLu',msg: 'Tus ojos son hermosos! 🌹🌹🌹🌹',date: '5 Mar',hour: '14:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '18',user: 'Sistema',receiver: 'Todos',msg: 'VickyLu y Bruno FG han iniciado una platica privada',date: '5 Mar',hour: '14:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '19',user: 'Aguss',receiver: 'Lore Gil',msg: 'Lore!!! definitivamente cerveza, puedo invitarte una?',date: '5 Mar',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg', type: 1},
      {id: '20',user: 'Its a date!',receiver: 'Todos',msg: 'Abiix y Gonz comenzaron una cita en persona!!!',date: '5 Mar',hour: '16:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '21',user: 'Sistema',receiver: 'Todos',msg: 'Lore Gil y Aguss han iniciado una platica privada',date: '5 Mar',hour: '18:42',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '22',user: 'Mar ella',receiver: 'Todos',msg: '😍 Hola niños!',date: '6 Mar',hour: '9:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '23',user: 'Poncho Green',receiver: 'Mar ella',msg: 'Hola niña... 🌹 ',date: '6 Mar',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '24',user: 'RichieJ',receiver: 'Mar ella',msg: 'Mar, adoro tu cabello te ves muy bella en esa foto, dame la oportunidad de conocerte...',date: '6 Mar',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '25',user: 'SandyL',receiver: 'Todos',msg: 'Hola a todos! algun fotografo? amo las fotos',date: '6 Mar',hour: '17:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '26',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y Poncho Green han iniciado una platica privada',date: '6 Mar',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '27',user: 'RichieJ',receiver: 'Mar ella',msg: 'Mar ella, hola! podemos hablar?',date: '6 Mar',hour: '20:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '28',user: 'RichieJ',receiver: 'SandyL',msg: 'Sandy, me encantaria hacerte una sesión de fotos! ',date: '6 Mar',hour: '20:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '29',user: 'SandyL',receiver: 'RichieJ',msg: 'Jajaja como no te pelaron ya vienes conmigo 😢',date: '7 Mar',hour: '9:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '30',user: 'RichieJ',receiver: 'SandyL',msg: 'No esta lista para mi; la pregunta es... tu lo estas?',date: '7 Mar',hour: '10:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '31',user: 'SandyL',receiver: 'RichieJ',msg: 'Jajajaja 😏',date: '7 Mar',hour: '11:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '32',user: 'Sistema',receiver: 'Todos',msg: 'SandyL y RichieJ han iniciado una platica privada',date: '7 Mar',hour: '11:05',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '33',user: 'VickyLu',receiver: 'Todos',msg: 'Hola bebes! como les va en esto del 👩‍❤️‍💋‍👨?',date: '7 Mar',hour: '18:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '34',user: 'Abiix',receiver: 'VickyLu',msg: 'Nada mal jejeje... ',date: '7 Mar',hour: '18:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '35',user: 'Paco Flip',receiver: 'VickyLu',msg: 'Todo mal 💔',date: '7 Mar',hour: '20:19',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '36',user: 'Abiix',receiver: 'Paco Flip',msg: 'Auuuch!!! noooo!!!!',date: '7 Mar',hour: '20:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '37',user: 'Sistema',receiver: 'Todos',msg: 'Abiix y Paco Flip han iniciado una platica privada',date: '7 Mar',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '38',user: 'Yosh Black',receiver: 'Todos',msg: 'Alguien vio el SB? o solo el medio tiempo? jejeje',date: '7 Mar',hour: '22:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '39',user: 'Jimmy K',receiver: 'Yosh Black',msg: 'Jajajaja siempre pasa... 🏈 Afortunadamente me fue bien en el fantasy',date: '7 Mar',hour: '22:16',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '40',user: 'Lesly Reyna',receiver: 'Jimmy K',msg: 'Vaya!!! hasta que salen los niños rudos jejeje ',date: '7 Mar',hour: '22:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg', type: 1},
      {id: '41',user: 'Sistema',receiver: 'Todos',msg: 'Lesly Reyna y Jimmy K han iniciado una platica privada',date: '7 Mar',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '42',user: 'Sistema',receiver: 'Todos',msg: 'Lesly Reyna y Yosh Black han iniciado una platica privada',date: '7 Mar',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '43',user: 'Rey Sosa',receiver: 'Todos',msg: 'Chicas lindas, el siguiente fin de semana estaré en CDMX de trabajo por el sur',date: '8 Mar',hour: '10:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '44',user: 'VickyLu',receiver: 'Rey Sosa',msg: 'Paso... jejeje',date: '8 Mar',hour: '12:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '45',user: 'Abiix',receiver: 'Rey Sosa',msg: 'Que haras el sabado Rey? necesitas una guia de turistas?',date: '8 Mar',hour: '14:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '46',user: 'Sistema',receiver: 'Todos',msg: 'Abiix y Rey Sosa han iniciado una platica privada',date: '8 Mar',hour: '16:28',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '47',user: 'Ari Lux',receiver: 'VickyLu',msg: 'Bien mueves vdd Vicky? jejeje',date: '8 Mar',hour: '17:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '48',user: 'VickyLu',receiver: 'Ari Lux',msg: 'Ya se!!! ',date: '8 Mar',hour: '18:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '49',user: 'Rey Sosa',receiver: 'Ari Lux',msg: 'Nada que ver, pero aqui debemos ser directos y muy sinceros, es la base de todo, por cierto que niñas tan lindas nos tocaron este mes! 💃💃💃',date: '8 Mar',hour: '18:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '50',user: 'Barbie12',receiver: 'Rey Sosa',msg: 'Y aun no me veias a mi!',date: '8 Mar',hour: '20:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '51',user: 'Sistema',receiver: 'Todos',msg: 'Barbie 12 y Rey Sosa han iniciado una platica privada',date: '8 Mar',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '52',user: 'Isra B',receiver: 'Todos',msg: 'Alguien para salir a cenar?',date: '9 Mar',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '53',user: 'VickyLu',receiver: 'Isra B',msg: '🦗🦗🦗',date: '9 Mar',hour: '15:49',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg', type: 1},
      {id: '54',user: 'Its a date!',receiver: 'Todos',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '9 Mar',hour: '16:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '55',user: 'Lozano',receiver: 'VickyLu',msg: 'Jajajajaja eres una burlona Vicky!!! ',date: '9 Mar',hour: '17:10',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-elle-hughes-1680172.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '56',user: 'Sistema',receiver: 'Todos',msg: 'VickyLu y Lozano han inixiado una platica privada',date: '9 Mar',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '57',user: 'Alex Fragon',receiver: 'Todos',msg: 'Alguna chica para hacer plática constructiva?',date: '10 Mar',hour: '10:10',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '58',user: 'Jezz',receiver: 'Alex Fragon',msg: 'De que te gustaría hablar Alex?',date: '10 Mar',hour: '12:49',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg', type: 1},
      {id: '59',user: 'Alex Fragon',receiver: 'Jezz',msg: 'Historia, arqueología, filosofia, música, cultura... quiza compartir vivencias, ideologías...',date: '10 Mar',hour: '12:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '60',user: 'Sistema',receiver: 'Todos',msg: 'Jezz y Alez Fragon han inixiado una platica privada',date: '10 Mar',hour: '13:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '61',user: 'Its a date!',receiver: 'Todos',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '10 Mar',hour: '16:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '62',user: 'Yola',receiver: 'Todos',msg: 'Hey!!! soy un poco nueva en esto... Pero me agrada que todos son super respetuosos y amigables',date: '10 Mar',hour: '23:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '63',user: 'Yosh Black',receiver: 'Yola',msg: 'Bienvenida, te vas a divertir mucho!',date: '11 Mar',hour: '10:41',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '64',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Yosh Blak han iniciado na platica privada',date: '11 Mar',hour: '14:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '65',user: 'Its a date!',receiver: 'Todos',msg: 'Lesly Reyna y Jimmy K comenzaron una cita personal!!!',date: '11 Mar',hour: '18:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '66',user: 'Mike Bloom',receiver: 'Todos',msg: 'Hola, no se apagen!!!',date: '12 Mar',hour: '20:31',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '67',user: 'Ari Lux',receiver: 'Mike Bloom',msg: 'Aqui seguimos!!!! 🍻🍻',date: '12 Mar',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg', type: 1},
      {id: '68',user: 'Sistema',receiver: 'Todos',msg: 'Ari Lux y Mike Bloom han iniciado una platica privada',date: '12 Mar',hour: '22:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '69',user: 'Its a date!',receiver: 'Todos',msg: 'Abiix y Rey Sosa comenzaron una cita en persona!!!',date: '13 Mar',hour: '17:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '70',user: 'On Fire',receiver: 'Todos',msg: 'Abiix esta on fire!!!',date: '13 Mar',hour: '17:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '71',user: 'VickyLu',receiver: 'Todos',msg: 'Ya listos para San Valentin??? 😍😍😍',date: '13 Mar',hour: '19:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '72',user: 'Juliiz',receiver: 'VickyLu',msg: 'Ya ni me digas... 😭😭😭😭',date: '13 Mar',hour: '20:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '73',user: 'Bruno FG',receiver: 'VickyLu',msg: 'Esto no acaba hasta que se acaba!!!',date: '13 Mar',hour: '20:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '74',user: 'Jimmy K',receiver: 'Todos',msg: 'Quien será mi valentin? jejejeje',date: '13 Mar',hour: '20:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '75',user: 'Sistema',receiver: 'Todos',msg: 'Juliiz y Bruno FG han iniciado una platica privada',date: '13 Mar',hour: '20:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '76',user: 'Sistema',receiver: 'Todos',msg: 'Jezz y Jimmy K han iniciado una platica privada',date: '13 Mar',hour: '20:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '77',user: 'VickyLu',receiver: 'Todos',msg: 'Chicas, ponganse lindas, niños... sorprendanos!!!',date: '14 Mar',hour: '12:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '78',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Poncho Green comenzaron una cita en persona!!!',date: '14 Mar',hour: '14:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '79',user: 'Its a date!',receiver: 'Todos',msg: 'Vicky Lu y Lozano comenzaron una cita en persona!!!',date: '14 Mar',hour: '16:25',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '80',user: 'Its a date!',receiver: 'Todos',msg: 'Abiix y Paco Flip comenzaron una cita en persona!!!',date: '14 Mar',hour: '17:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '81',user: 'On Fire',receiver: 'Todos',msg: 'Abiix esta on fire!!!',date: '14 Mar',hour: '18:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '82',user: 'Its a date!',receiver: 'Todos',msg: 'Lore Gil y Aguss comenzaron una cita en persona!!!',date: '14 Mar',hour: '19:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '83',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y Yosh Black comenzaron una cita en persona!!!',date: '14 Mar',hour: '20:18',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '84',user: 'Its a date!',receiver: 'Todos',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '14 Mar',hour: '20:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '85',user: 'Lesly Reyna',receiver: 'Todos',msg: 'Que días!! como les fue??',date: '15 Mar',hour: '12:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '86',user: 'Barbie12',receiver: 'Lesly Reyna',msg: 'Bastante bien amix 🥰',date: '15 Mar',hour: '16:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg', type: 1},
      {id: '87',user: 'RichieJ',receiver: 'Lesly Reyna',msg: 'Bien Lesly, pero estoy seguro que pudimos hacer algo aun mejor',date: '15 Mar',hour: '20:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg', type: 1},
      {id: '88',user: 'Barbie12',receiver: 'RichieJ',msg: 'Que modesto... me gustaría probar...',date: '16 Mar',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '89',user: 'Sistema',receiver: 'Todos',msg: 'Barbie12 y RichieJ han iniciado una platica privada',date: '16 Mar',hour: '14:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '90',user: 'Lore Gil',receiver: 'Barbie12',msg: '😶😶😶 wooooow jejejeje',date: '16 Mar',hour: '17:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '91',user: 'Abiix',receiver: 'Todos',msg: 'Niñas!!! como les va?? 🙋‍♀️🙋‍♀️🙋‍♀️',date: '16 Mar',hour: '19:52',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '92',user: 'Ari Lux',receiver: 'Abiix',msg: 'No tan bien como a ti... eres la reina de este juegoo!! Te admiramos jejeje',date: '17 Mar',hour: '9:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '93',user: 'VickyLu',receiver: 'Abiix',msg: 'Abiix! por fi cuidate mucho... y luego nos pasas la receta para ser como tu en el amoooor 🔮🔮🔮',date: '17 Mar',hour: '19:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '94',user: 'SandyL',receiver: 'Todos',msg: 'Bebes!! hace falta una noche de chicas!! jejejeje',date: '17 Mar',hour: '20:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '95',user: 'RichieJ',receiver: 'SandyL',msg: 'Y a nosotros una noche de chicos... 🍻🍻🍻🍻',date: '18 Mar',hour: '12:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '96',user: 'Gonz',receiver: 'RichieJ',msg: 'Yo me apunto, chela, musica y chicas!! jajaja',date: '18 Mar',hour: '21:52',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '97',user: 'VickyLu',receiver: 'RichieJ',msg: 'Jajajaja quieren una noche de chicos? uhy yo que iba a proponerles algo...',date: '19 Mar',hour: '14:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '98',user: 'RichieJ',receiver: 'VickyLu',msg: 'No se diga mas Vicky... se cancela la noche de chicos...',date: '19 Mar',hour: '16:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '99',user: 'Sistema',receiver: 'Todos',msg: 'Vicky Lu y RichieJ han iniciado una platica privada',date: '19 Mar',hour: '16:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '100',user: 'Rey Sosa',receiver: 'Todos',msg: 'Alguna chica que busque hombres en vez de niños?',date: '20 Mar',hour: '11:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '101',user: 'VickyLu',receiver: 'Rey Sosa',msg: 'Ñooo somos bebes 👧🧒',date: '20 Mar',hour: '16:20',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '102',user: 'Its a date!',receiver: 'Todos',msg: 'Barbie12 y RichieJ comenzaron una cita en persona!!!',date: '21 Mar',hour: '18:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '103',user: 'Mar ella',receiver: 'Rey Sosa',msg: 'Hola Rey, te ves super maduro y fuerte jeje',date: '22 Mar',hour: '11:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '104',user: 'Rey Sosa',receiver: 'Mar ella',msg: 'Hola.. hablemos en privado...',date: '22 Mar',hour: '16:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '105',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y Rey Sosa han iniciado una platica privada',date: '22 Mar',hour: '16:26',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '106',user: 'Jezz',receiver: 'Todos',msg: 'Voy a tener una sesión de fotos.. alguien quisiera ayudarme?',date: '23 Mar',hour: '13:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '107',user: 'Mike Bloom',receiver: 'Jezz',msg: 'Como te ayudo Jezz? 📸 ',date: '23 Mar',hour: '16:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '108',user: 'Sistema',receiver: 'Todos',msg: 'Jezz y Mike Bloom han iniciado una platica privada',date: '23 Mar',hour: '17:00',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '109',user: 'Abiix',receiver: 'Todos',msg: 'Ya me apague mucho... necesito un poco de diversión!!! ',date: '24 Mar',hour: '12:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '110',user: 'RichieJ',receiver: 'Abiix',msg: 'Que clase de diversión Abiix? Como te ayudo?',date: '24 Mar',hour: '17:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '111',user: 'Abiix',receiver: 'RichieJ',msg: 'Pues no se... que se te ocurre? ten un poquito de imaginación',date: '24 Mar',hour: '22:39',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '112',user: 'RichieJ',receiver: 'Abiix',msg: 'Podría escribir aqui mismo nuestro futuro pero no existe una 🖋 que tenga tanta tinta, ni vida que lo soporte...',date: '25 Mar',hour: '8:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '113',user: 'Abiix',receiver: 'RichieJ',msg: '😍🥰😘',date: '25 Mar',hour: '15:57',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '114',user: 'Sistema',receiver: 'Todos',msg: 'Abiix y RichieJ han iniciado una platica privada',date: '25 Mar',hour: '16:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '115',user: 'Juliiz',receiver: 'RichieJ',msg: 'Tenemos un poeta... alguien mas es lindo???',date: '25 Mar',hour: '17:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '116',user: 'Gonz',receiver: 'Juliiz',msg: 'Si tu sonrisa es el mar... con gusto naufragaba en tu mirada...',date: '25 Mar',hour: '18:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg', type: 1},
      {id: '117',user: 'Its a date!',receiver: 'Todos',msg: 'Abiix y RichieJ comenzaron una cita en persona!!!',date: '25 Mar',hour: '20:27',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '118',user: 'On Fire',receiver: 'Todos',msg: 'Abiix esta on fire!!!',date: '25 Mar',hour: '20:28',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '119',user: 'Yosh Black',receiver: 'Abiix',msg: 'Abiix... ya no puedo mas con tu popularidad... falto yo!!!',date: '26 Mar',hour: '11:07',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '120',user: 'Abiix',receiver: 'Yosh Black',msg: 'Callateeee... oki seamos amix... 💓',date: '26 Mar',hour: '12:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '121',user: 'Sistema',receiver: 'Todos',msg: 'Abiix y Yosh Black han iniciado una platica privada',date: '26 Mar',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '122',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Rey Sosa comenzaron una cita en persona!!!',date: '26 Mar',hour: '19:13',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '123',user: 'On Fire',receiver: 'Todos',msg: 'Mar ella esta on fire!!!',date: '26 Mar',hour: '19:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '124',user: 'Aguss',receiver: 'VickyLu',msg: 'Vicky adoro tu mirada!! creo que me enamorare...',date: '27 Mar',hour: '12:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '125',user: 'Its a date!',receiver: 'Todos',msg: 'Abiix y Yosh Black comenzaron una cita en persona!!!',date: '27 Mar',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '126',user: 'On Fire',receiver: 'Todos',msg: 'Abiix esta on fire!!!',date: '27 Mar',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '127',user: 'VickyLu',receiver: 'Aguss',msg: 'Jejejeje... calmaaaa!! me sonrojas 🤗',date: '27 Mar',hour: '20:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg', type: 1},
      {id: '128',user: 'Sistema',receiver: 'Todos',msg: 'Vicky Lu y Aguss han iniciado una platica privada',date: '27 Mar',hour: '20:42',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '129',user: 'Paco Flip',receiver: 'VickyLu',msg: 'Sin miedo a equivocarme, Vicky es la princesa de este cuento... 🤩🌟',date: '27 Mar',hour: '21:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '130',user: 'VickyLu',receiver: 'Paco Flip',msg: 'Yaaa... dejenme en paz!! muero de pena!!!',date: '27 Mar',hour: '22:27',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '131',user: 'Sistema',receiver: 'Todos',msg: 'Vicky Lu y Paco Flip han iniciado una platica privada',date: '27 Mar',hour: '22:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '132',user: 'Abiix',receiver: 'Todos',msg: 'Nooo... termine toda solaaa 😭😭😭😭 a ver que se me ocurre',date: '28 Mar',hour: '14:33',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '133',user: 'Rey Sosa',receiver: 'Abiix',msg: 'Sabes que solo tienes que llamarme y tu tristeza se acaba Abiix',date: '28 Mar',hour: '16:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '134',user: 'Its a date!',receiver: 'Todos',msg: 'Vicky Lu y Paco Flip comenzaron una cita en persona!!!',date: '28 Mar',hour: '18:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '135',user: 'On Fire',receiver: 'Todos',msg: 'Vicky Lu esta on fire!!!',date: '28 Mar',hour: '18:47',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '136',user: 'Admin',receiver: 'Todos',msg: 'Buenas noches a todos, espero que disfrutaran este su evento #FindYourRealCrush032021, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior, en breve se les enviarán sus nuevas contraseñas para el próximo evento #FindYourRealCrush042021...',date: '28 Mar',hour: '23:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '137',user: 'Admin',receiver: 'Todos',msg: 'Buenos días a todos... oficialmente comienza el #FindYourRealCrush042021, ya saben las reglas, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior. Diviertanse y que encuentren a su crush!!!',date: '1 Abr',hour: '8:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '138',user: 'Paco Flip',receiver: 'Todos',msg: 'Hola a todos... espero que todos esten bien, les deseo que tengan lindos días y encuentren lo que estan buscando 😎',date: '1 Abr',hour: '0.528472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '139',user: 'Alma Blim',receiver: 'Paco Flip',msg: 'Muchas gracias Paco... Te deseo lo mismo 😁 soy nueva en esto pero traemos toda la actitud 😍',date: '1 Abr',hour: '0.605555555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '140',user: 'Danniel',receiver: 'Alma Blim',msg: 'Almita! eso es lo principal aqui... tener toda la actitud!!! Platicamos en privado? Me gustaste mucho ❤️',date: '1 Abr',hour: '0.722916666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-andrea-piacquadio-3799790.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg', type: 1},
      {id: '141',user: 'Alma Blim',receiver: 'Danniel',msg: '🥰😘🥰😘🥰😘🥰😘🥰😘🥰😘',date: '1 Abr',hour: '0.7875',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-andrea-piacquadio-3799790.jpg', type: 1},
      {id: '142',user: 'Sistema',receiver: 'Todos',msg: 'Alma Blim y Danniel han iniciado una platica privada',date: '1 Abr',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '143',user: 'Ricardo23',receiver: 'Todos',msg: 'Hola, soy Ricardo, busco una chica para relación seria.. trabajó, estudio, soy buen partido jejeje',date: '2 Abr',hour: '0.466666666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-atef-khaled-1808405.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '144',user: 'Rey Sosa',receiver: 'Ricardo23',msg: 'Jajajaja... Ya manda tu CV Ricardo 🤣',date: '2 Abr',hour: '0.573611111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-atef-khaled-1808405.jpg', type: 1},
      {id: '145',user: 'Gonz',receiver: 'Todos',msg: 'Creo que ya no hay mujeres jajajajaja todos sabiamos que llegaría este momento',date: '2 Abr',hour: '0.729861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '146',user: 'Sussy',receiver: 'Gonz',msg: 'Jajaja Gooonzzz noooo aqui estamos, no pierdas la fe 💔',date: '2 Abr',hour: '0.904861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ricael-sousa-1837158.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '147',user: 'SandyL',receiver: 'Sussy',msg: 'Sussy, eres nueva vdd? No te habia visto nena, amé tu foto te deseo lo mejor por aqui ',date: '3 Abr',hour: '0.383333333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ricael-sousa-1837158.jpg', type: 1},
      {id: '148',user: 'Ari Lux',receiver: 'SandyL',msg: 'Oyeee, creo que si son muchas niñas nuevaas... que no se pierdan las costumbres jejeje',date: '3 Abr',hour: '0.514583333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '149',user: 'VickyLu',receiver: 'Ari Lux',msg: 'Jamaaas!! aqui seguimooos 💪💪💪💪',date: '3 Abr',hour: '0.647222222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '150',user: 'Lesly Reyna',receiver: 'Ari Lux',msg: 'Jejejeje  al pie del cañon amixes jejeje, y fijate que nos fue muy bien pero siempre podemos mejorar jeje',date: '3 Abr',hour: '0.785416666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '151',user: 'Gonz',receiver: 'Todos',msg: 'Eso es todo niñaaas!! esa es la actitud y lo mejor es que todas super guapas y lindas',date: '4 Abr',hour: '0.554861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '152',user: 'VickyLu',receiver: 'Gonz',msg: 'Gonz, creo que te refieres a mi...',date: '4 Abr',hour: '0.777083333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '153',user: 'Gonz',receiver: 'VickyLu',msg: 'Claramente me refiero sobretodo a ti Vicky...',date: '4 Abr',hour: '0.834027777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '154',user: 'Sistema',receiver: 'Todos',msg: 'VickyLu y Gonz han iniciado una platica privada',date: '4 Abr',hour: '20:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '155',user: 'Raul Osornio',receiver: 'Lesly Reyna',msg: 'Hola Lesly, podemos hablar?',date: '5 Abr',hour: '0.329166666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-khaled-reese-702139.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg', type: 1},
      {id: '156',user: 'Sistema',receiver: 'Todos',msg: 'Lesly Reyna y Raul Osornio han iniciado una platica privada',date: '5 Abr',hour: '0.497916666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '157',user: 'Paco Flip',receiver: 'Ari Lux',msg: 'Hola Ari, creo que somos ya viejos en esto y nunca hemos hablado 😨😨😨',date: '5 Abr',hour: '0.633333333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '158',user: 'Ari Lux',receiver: 'Paco Flip',msg: 'Oyeee... es vdd 😭😭😭 ¿Que crees que debamos hacer???',date: '5 Abr',hour: '0.775694444444445',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '159',user: 'Paco Flip',receiver: 'Ari Lux',msg: 'Creo que es muy grave... te parece si te invito a cenar y platicamos mas cómodos?',date: '6 Abr',hour: '0.429861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '160',user: 'Ari Lux',receiver: 'Paco Flip',msg: '🥰❤️🤗🥰❤️🤗🥰❤️🤗',date: '6 Abr',hour: '0.56875',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '161',user: 'Sistema',receiver: 'Todos',msg: 'Ari Lux y Paco Flip han iniciado una platica privada',date: '6 Abr',hour: '0.571527777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '162',user: 'Truckman',receiver: 'Todos',msg: 'Hola mujeres... Tengo un vuelo a Cancun para la última semana de Abril... Alguien quisiera acompañarme? Sin compromiso, todo en buena onda!!',date: '6 Abr',hour: '0.778472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '163',user: 'Cielo W',receiver: 'Truckman',msg: 'Jajajaja, sin compromiso? y que ganas tu? jajajaja',date: '7 Abr',hour: '0.425',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '164',user: 'Truckman',receiver: 'Cielo W',msg: 'Oyee si!!! quizá soné muy mal pero es en buen plan Cielo!! Te platico... tengo una agencia de viajes y viajo mucho para conocer hoteles, lugares, etc.. De hecho he salido con muchas chicas de aqui jejeje',date: '7 Abr',hour: '0.534027777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg', type: 1},
      {id: '165',user: 'Cielo W',receiver: 'Truckman',msg: 'Jajajaja, bueno así cambia un poquito la cosa... ojooo poquitooo 🙄🙄🙄',date: '7 Abr',hour: '0.557638888888889',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '166',user: 'VickyLu',receiver: 'Cielo W',msg: 'Amiix... yo he viajado con Truckman y todo bien jejeje... también se de otras niñas que lo han hecho, creo que Ari, Abix, y Barbie... 👌👌',date: '7 Abr',hour: '0.704166666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg', type: 1},
      {id: '167',user: 'Cielo W',receiver: 'VickyLu',msg: 'Gracias bb 💄👊💄👊💄👊',date: '7 Abr',hour: '0.771527777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '168',user: 'Truckman',receiver: 'Cielo W',msg: 'Ya viste Cielo... No pasa nada jajaja pura buena vibra jejeje',date: '8 Abr',hour: '0.436111111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-cleyton-ewerton-3007323.jpg', type: 1},
      {id: '169',user: 'Truckman',receiver: 'VickyLu',msg: 'Gracias por quemarme jajaja buenooo al menos diste buenas referencias jejeje... Por cierto, tu y yo ya estamos listos para mazatlan en Mayo vdd?',date: '8 Abr',hour: '0.440277777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '170',user: 'Sistema',receiver: 'Todos',msg: 'Cielo W y Truckman han iniciado una platica privada',date: '8 Abr',hour: '0.445833333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '171',user: 'VickyLu',receiver: 'Truckman',msg: '🤫🤫🤫🤫🤫🤫🤫',date: '8 Abr',hour: '0.65625',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '172',user: 'Julian K',receiver: 'Todos',msg: 'Ya será fin de semana... Alguien para salir por un trago, platicar, algo relax???',date: '9 Abr',hour: '0.418055555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-cottonbro-6668802.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '173',user: 'Mar ella',receiver: 'Julian K',msg: 'Hola Julian... Si hace falta una salidita!! Que sugieres? Algo tranqui no?',date: '9 Abr',hour: '0.446527777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-cottonbro-6668802.jpg', type: 1},
      {id: '174',user: 'Gonz',receiver: 'Mar ella',msg: 'Hola Mar, te gustaría saltar en paracaidas? Tengo un salto pendiente para el domingo 🪂🪂🪂',date: '9 Abr',hour: '0.520138888888889',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '175',user: 'Julian K',receiver: 'Mar ella',msg: 'Vamos!! Conozco una terraza bar por el sur de la ciudad, buena música y ambiente relax... tu dime y paso por ti...',date: '9 Abr',hour: '0.615277777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-cottonbro-6668802.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '176',user: 'Yola',receiver: 'Gonz',msg: 'Ahhh!!! una propuesta asiiii y se me reinicia la vidaa!!!!',date: '9 Abr',hour: '0.619444444444445',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '177',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y Gonz han iniciado una platica privada',date: '9 Abr',hour: '0.778472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '178',user: 'Mar ella',receiver: 'Gonz',msg: 'Si quieroooo!!! 😍🥰😍🥰😍🥰',date: '9 Abr',hour: '0.779861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '179',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y Julian K han iniciado una platica privada',date: '9 Abr',hour: '0.781944444444445',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '180',user: 'Yola',receiver: 'Gonz',msg: 'Hijole Yola ya me confirmó Mar... pero si quieres vamos la otra semana 😉😉😉',date: '9 Abr',hour: '0.79375',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '181',user: 'RichieJ',receiver: 'Yola',msg: 'Yola, vamos a queretaro por un buen 🍷🧀',date: '9 Abr',hour: '0.8',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '182',user: 'Yola',receiver: 'RichieJ',msg: 'Siii... vamoooos!!!',date: '9 Abr',hour: '0.833333333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '183',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Gonz han iniciado una platica privada',date: '9 Abr',hour: '0.834027777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '184',user: 'RichieJ',receiver: 'Yola',msg: '🍷 + tu & yo = Nunca lo olvidarás',date: '9 Abr',hour: '0.8',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '185',user: 'Sistema',receiver: 'Todos',msg: 'Yola y RichieJ han iniciado una platica privada',date: '9 Abr',hour: '0.853472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '186',user: 'Miranda',receiver: 'Todos',msg: 'Noooooo!!! me quede sin plaaaan!!! Alguien que siga online?',date: '10 Abr',hour: '0.416666666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-vin%C3%ADcius-estev%C3%A3o-2592282.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '187',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y RichieJ comenzaron una cita en persona!!!',date: '10 Abr',hour: '11:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '188',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Julian K comenzaron una cita en persona!!!',date: '10 Abr',hour: '11:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '189',user: 'Danniel',receiver: 'Miranda',msg: 'Tu dices Miranda jejeje, vamos a cenar!!!',date: '10 Abr',hour: '0.479166666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-andrea-piacquadio-3799790.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-vin%C3%ADcius-estev%C3%A3o-2592282.jpg', type: 1},
      {id: '190',user: 'Sistema',receiver: 'Todos',msg: 'Miranda y Danniel han iniciado una platica privada',date: '10 Abr',hour: '0.500694444444444',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '191',user: 'Its a date!',receiver: 'Todos',msg: 'Miranda y Danniel comenzaron una cita en persona!!!',date: '10 Abr',hour: '18:17',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '192',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Gonz comenzaron una cita en persona!!!',date: '11 Abr',hour: '09:10',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '193',user: 'On Fire',receiver: 'Todos',msg: 'Mar ella esta on fire!!!',date: '11 Abr',hour: '09:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '194',user: 'VickyLu',receiver: 'Todos',msg: 'Ahora si me toco estar solitaaaa... pero tambn se disfruta el tiempo así jejeje',date: '11 Abr',hour: '0.425',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '195',user: 'Alma Blim',receiver: 'VickyLu',msg: 'Vamos por un café amigaaa y platicamos!! creo que podemos chismear too much!!!!',date: '11 Abr',hour: '0.474305555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '196',user: 'Barbie12',receiver: 'Alma Blim',msg: 'Vamos a parque delta!!! Las veo en el Cheesecake Factory! a las 5pm',date: '11 Abr',hour: '0.500694444444444',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg', type: 1},
      {id: '197',user: 'SandyL',receiver: 'Barbie12',msg: 'Yo si voy...',date: '11 Abr',hour: '0.527083333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '198',user: 'Alma Blim',receiver: 'SandyL',msg: 'Vale.. ahí las veo jejeje',date: '11 Abr',hour: '0.55625',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '199',user: 'Its a date!',receiver: 'Todos',msg: 'Cielo W y Truckman comenzaron una cita en persona!!!',date: '11 Abr',hour: '18:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '200',user: 'Truckman',receiver: 'Todos',msg: 'Como les fue a todos? Este fin de semana muchas citas!!! Eso es lo bueno de este tipo de grupos!!!',date: '12 Abr',hour: '0.480555555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '201',user: 'Yola',receiver: 'Truckman',msg: 'A mi me fue bn!! Ya decidiste con quien te vas a ir a Cancun? ',date: '12 Abr',hour: '0.561805555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '202',user: 'Truckman',receiver: 'Yola',msg: 'Aun no... sigue abierta la convocatoria jejejeje, te gustaría participar? ',date: '12 Abr',hour: '0.646527777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '203',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Truckman han iniciado una platica privada',date: '12 Abr',hour: '0.777083333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '204',user: 'Poncho Green',receiver: 'Yola',msg: 'Yola, no tienes que competir con nadie... vamos a Los cabos a finales de mes!!',date: '13 Abr',hour: '0.346527777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '205',user: 'Yola',receiver: 'Poncho Green',msg: '😍😍😍 Si quieroooooo!!!',date: '13 Abr',hour: '0.431944444444444',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg', type: 1},
      {id: '206',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Poncho Green han iniciado una platica privada',date: '13 Abr',hour: '0.433333333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '207',user: 'Rey Sosa',receiver: 'Yola',msg: 'Te interesa salir conmigo el viernes? Podemos ir a Puebla, conozco un lugar super tranquilo y exclusivo... ',date: '13 Abr',hour: '0.525',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '208',user: 'Yola',receiver: 'Rey Sosa',msg: '😍😍😍 Si quieroooooo!!!',date: '13 Abr',hour: '0.622916666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '209',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Rey Sosa han iniciado una platica privada',date: '13 Abr',hour: '0.703472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '210',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y Gonz comenzaron una cita en persona!!!',date: '14 Abr',hour: '08:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '211',user: 'On Fire',receiver: 'Todos',msg: 'Yola esta on fire!!!',date: '14 Abr',hour: '08:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '212',user: 'Barbie12',receiver: 'Todos',msg: 'Ya viene el fin y esta vez no me quedaré sin cita... Quien sin planes?',date: '14 Abr',hour: '0.434027777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '213',user: 'Paco Flip',receiver: 'Barbie12',msg: 'Hola Barbie, definitivamente no deberías de pasar un fin sin cita, te ofrezco una tarde de pláticas intelectuales y una cena extraordinaria ',date: '14 Abr',hour: '0.585416666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '214',user: 'Barbie12',receiver: 'Paco Flip',msg: 'Suena muy lindo... Si me gustaría Paco 🥰',date: '14 Abr',hour: '0.702777777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '215',user: 'Sistema',receiver: 'Todos',msg: 'Yola y Rey Sosa han iniciado una platica privada',date: '14 Abr',hour: '0.703472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '216',user: 'Lore Gil',receiver: 'Todos',msg: 'Yo tambien quiero una cita para mañana!!! 👉👈',date: '15 Abr',hour: '0.55625',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '217',user: 'RichieJ',receiver: 'Lore Gil',msg: 'Lore, vamos al autocinema! Paso por ti?',date: '15 Abr',hour: '0.654861111111111',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg', type: 1},
      {id: '218',user: 'Sistema',receiver: 'Todos',msg: 'Lore Gil y RichieJ han iniciado una platica privada',date: '15 Abr',hour: '0.655555555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '219',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y Rey Sosa comenzaron una cita en persona!!!',date: '16 Abr',hour: '11:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '220',user: 'On Fire',receiver: 'Todos',msg: 'Yola esta on fire!!!',date: '16 Abr',hour: '11:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '221',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y Rey Sosa comenzaron una cita en persona!!!',date: '16 Abr',hour: '17:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '222',user: 'On Fire',receiver: 'Todos',msg: 'Yola esta on fire!!!',date: '16 Abr',hour: '17:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '223',user: 'Its a date!',receiver: 'Todos',msg: 'Barbie12 y Paco Flip comenzaron una cita en persona!!!',date: '16 Abr',hour: '19:15',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '224',user: 'Its a date!',receiver: 'Todos',msg: 'Lore Gil y RichieJ comenzaron una cita en persona!!!',date: '16 Abr',hour: '19:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '225',user: 'VickyLu',receiver: 'Todos',msg: 'Woooorales!!! cuantas parejitas!!! jejejejejeje 👩‍❤️‍💋‍👨👩‍❤️‍💋‍👨👩‍❤️‍💋‍👨',date: '16 Abr',hour: '0.925694444444445',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '226',user: 'Its a date!',receiver: 'Todos',msg: 'Yola y Truckman comenzaron una cita en persona!!!',date: '17 Abr',hour: '17:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '227',user: 'On Fire',receiver: 'Todos',msg: 'Yola esta on fire!!!',date: '17 Abr',hour: '17:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '228',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Gonz comenzaron una cita en persona!!!',date: '17 Abr',hour: '18:37',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '229',user: 'On Fire',receiver: 'Todos',msg: 'Yola esta on fire!!!',date: '17 Abr',hour: '18:37',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '230',user: 'Its a date!',receiver: 'Todos',msg: 'Barbie12 y Paco Flip comenzaron una cita en persona!!!',date: '18 Abr',hour: '14:26',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '231',user: 'On Fire',receiver: 'Todos',msg: 'Barbie12 esta on fire!!!',date: '18 Abr',hour: '14:26',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '232',user: 'Its a date!',receiver: 'Todos',msg: 'Lesly Reyna y Raul Osornio comenzaron una cita en persona!!!',date: '18 Abr',hour: '17:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '233',user: 'Truckman',receiver: 'Todos',msg: 'Wooow que buen fin de semana jejeje ya listo para cerrar el mes!!!',date: '19 Abr',hour: '0.383333333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '234',user: 'VickyLu',receiver: 'Truckman',msg: 'Calmate presumido!! ',date: '19 Abr',hour: '0.422916666666667',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '235',user: 'Mar ella',receiver: 'Truckman',msg: 'Que tienes en mente para cerrar el mes bb?',date: '19 Abr',hour: '0.475',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '236',user: 'RichieJ',receiver: 'Mar ella',msg: 'Mar, quieres realmente cerrar el mes? y que el tiempo ⌚⌚⌚ realmente valga la pena?',date: '19 Abr',hour: '0.478472222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '237',user: 'Truckman',receiver: 'Mar ella',msg: 'Hola Mar, alguna vez has disparado? Conozco un campo de tiro',date: '19 Abr',hour: '0.813194444444445',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '238',user: 'Mar ella',receiver: 'Truckman',msg: 'Si me gustaría aprender a disparar nunca lo he hecho y me llama mucho la atención!!!!',date: '20 Abr',hour: '0.406944444444444',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '239',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y Truckman han iniciado una platica privada',date: '20 Abr',hour: '0.445833333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '240',user: 'Jezz',receiver: 'Todos',msg: 'Holaaaa a todos!!! me tomee un descanso pero ya estoy lista para volver a las citas y a conocer personas lindas y bellas jejeje',date: '20 Abr',hour: '0.455555555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '241',user: 'Ray Jhon',receiver: 'Jezz',msg: 'Hola Jess, esos descansos no son buenos, ahora recuperemos todo el tiempo perdido! ',date: '20 Abr',hour: '0.690277777777778',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamann-la-1205033.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '242',user: 'Sistema',receiver: 'Todos',msg: 'Jezz y Ray Jhon han iniciado una platica privada',date: '20 Abr',hour: '0.765972222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '243',user: 'RichieJ',receiver: 'Mar ella',msg: 'El tiempo ⌚⌚⌚ sin tí es un mal que solo tu puedes resolver',date: '21 Abr',hour: '0.472222222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '244',user: 'Alma Blim',receiver: 'RichieJ',msg: 'Richie, eres un romántico jejeje deberías intentar con flores jejejeje',date: '21 Abr',hour: '0.622222222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '245',user: 'Julian K',receiver: 'Alma Blim',msg: 'Alma, te gustaría que hablaramos en privado? 😍🌹🌹🌹🌹',date: '22 Abr',hour: '0.764583333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-cottonbro-6668802.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-anderson-miranda-1777011.jpg', type: 1},
      {id: '246',user: 'Sistema',receiver: 'Todos',msg: 'Alma Blim y Julian K han iniciado una platica privada',date: '22 Abr',hour: '0.765972222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '247',user: 'RichieJ',receiver: 'Mar ella',msg: 'Mar, mi tiempo ⌚⌚⌚ no vale la pena sin ti en el...',date: '23 Abr',hour: '0.480555555555556',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '248',user: 'Mar ella',receiver: 'RichieJ',msg: 'Jejejeje... eres muy raro jejejeje 👉👈',date: '23 Abr',hour: '0.489583333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '249',user: 'Sistema',receiver: 'Todos',msg: 'Mar ella y RichieJ han iniciado una platica privada',date: '23 Abr',hour: '0.490972222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '250',user: 'Its a date!',receiver: 'Todos',msg: 'Barbie12 y Paco Flip comenzaron una cita en persona!!!',date: '24 Abr',hour: '13:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '251',user: 'On Fire',receiver: 'Todos',msg: 'Barbie12 esta on fire!!!',date: '24 Abr',hour: '13:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '252',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y RichieJ comenzaron una cita en persona!!!',date: '24 Abr',hour: '18:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '253',user: 'On Fire',receiver: 'Todos',msg: 'Mar ella esta on fire!!!',date: '24 Abr',hour: '18:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '254',user: 'Its a date!',receiver: 'Todos',msg: 'Alma Blim y Julian K comenzaron una cita en persona!!!',date: '24 Abr',hour: '19:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '255',user: 'Its a date!',receiver: 'Todos',msg: 'Jezz y Ray Jhon comenzaron una cita en persona!!!',date: '24 Abr',hour: '20:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '256',user: 'VickyLu',receiver: 'Truckman',msg: 'Buenas noches a todos los que durmieron acompañaditos esta noche jejeje <3 Los quiero!!!!',date: '24 Abr',hour: '22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '257',user: 'Its a date!',receiver: 'Todos',msg: 'VickyLu y Gonz comenzaron una cita en persona!!!',date: '25 Abr',hour: '16:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '258',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Truckman comenzaron una cita en persona!!!',date: '25 Abr',hour: '18:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '259',user: 'On Fire',receiver: 'Todos',msg: 'Mar ella esta on fire!!!',date: '25 Abr',hour: '18:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '260',user: 'Its a date!',receiver: 'Todos',msg: 'Alma Blim y Danniel comenzaron una cita en persona!!!',date: '25 Abr',hour: '20:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '261',user: 'On Fire',receiver: 'Todos',msg: 'Alma Blim esta on fire!!!',date: '25 Abr',hour: '20:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '262',user: 'Truckman',receiver: 'Todos',msg: 'Excelente fin a todos! Este mes ya casi termina!!! ahora si a cerrar!',date: '26 Abr',hour: '0.459722222222222',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 1},
      {id: '263',user: 'Gonz',receiver: 'Truckman',msg: 'Bastante bien amigo... creo que es momento de descansar jejeje',date: '26 Abr',hour: '0.564583333333333',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-ingrid-santana-1878687.jpg', type: 1},
      {id: '264',user: 'Its a date!',receiver: 'Todos',msg: 'Mar ella y Truckman comenzaron una cita en persona!!!',date: '28 Abr',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '265',user: 'On Fire',receiver: 'Todos',msg: 'Mar ella esta on fire!!!',date: '28 Abr',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '266',user: 'Its a date!',receiver: 'Todos',msg: 'Alma Blim y Julian K comenzaron una cita en persona!!!',date: '29 Abr',hour: '19:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '267',user: 'On Fire',receiver: 'Todos',msg: 'Alma Blim esta on fire!!!',date: '29 Abr',hour: '19:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '268',user: 'Admin',receiver: 'Todos',msg: 'Chicos este mes termino en viernes... pesimo día para cerrar el mes, espero que fuera de la app hayan completado sus citas y demas! Los espero el siguiente mes!!!',date: '30 Abr',hour: '15:30',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},
      {id: '269',user: 'Admin',receiver: 'Todos',msg: 'Buenas noches a todos, espero que disfrutaran este su evento #FindYourRealCrush042021, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior, en breve se les enviarán sus nuevas contraseñas para el próximo evento #FindYourRealCrush052021...',date: '30 Abr',hour: '23:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/all1.jpg', type: 2},

      

    ]} ;

      const getListMessage = () => {
    let type = [];
    inputProps.mensajes.map((item) => {

      type.push(

        <View key={item.id} style={ item.type == 1 ? styles.viewMessage : styles.systemViewMessage}>
          <View style={styles.imageViewMessage}>
            <View style={{width:'100%', height:'20%'}}>
                  <Text style={styles.labelFrom}>De: {item.user}</Text>
            </View>
              <View style={styles.imageMessage}>
                  <View style={{width:'41%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <Avatar rounded source={{uri: item.pic}} size="medium"/>
                  </View>
                  <View style={{width:'18%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <Icon name='email-send' type='material-community' style={styles.icon}/>
                  </View>
                  <View style={{width:'41%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <Avatar rounded source={{ uri: item.picReceiver }} size="medium"/>
                  </View>
              </View>
              <View style={{width:'100%', height:'20%'}}>
                <Text style={styles.labelFrom}>Para: {item.receiver}</Text>
            </View>
          </View>
        
        <View style={styles.textMessage}>
          <View style={styles.messageArea}>
            <Text style={styles.labelMessage}>{item.msg}</Text>
          </View>
          <View style={styles.messageDate}> 
            <View style={styles.date}>
            <Text style={styles.labelDate}>{item.date}</Text>
            </View>
            <View style={styles.city}>
            <Text style={styles.labelHour}>{item.hour}</Text>
            </View>
            
          </View>
        </View> 
      </View>

      );
    });
    return type;
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


return(

  <ScrollView>
    <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Conoce a tu crush</Text>
      </View>
          <View style={styles.body}>
                    
                    {getListMessage()}

          </View>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>By AdminCrush</Text>
      </View>
    </View>
    </ScrollView>
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
    height: 50,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },
  body:{
    width: '100%',
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
  labelFrom:{
    color: '#686464',
    fontSize: 16,
    margin: 3,
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
    size: 15,
    color: 'black'
  },
  viewMessage: {
    width: '98%',
    height: 130,
    backgroundColor: '#CECBCB', 
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },
  systemViewMessage: {
    width: '98%',
    height: 130,
    backgroundColor: '#E4A79A', 
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    flex:1,
  },
  imageViewMessage:{
    width: '33%',
    height: '100%',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
  },
  imageMessage:{
    width: '100%',
    height: '60%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textMessage: {
    width: '67%',
    height: '100%',
    alignItems:'center',
    justifyContent: 'center', 
    flexDirection: 'row',
  },
  messageArea:{
    width: '90%',
    height: '100%',
  },
  messageDate:{
    width: '10%',
    height: '100%',
    flexDirection: 'column',
  },
  labelMessage: {
    color: '#686464',
    fontSize: 12,
    margin: 2,
  },
  labelDate: {
    color: '#686464',
    fontSize: 17,
  },
  labelHour: {
    color: '#686464',
    fontSize: 11,
  },
  labelNameMessage:{
    color: '#686464',
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 3,
  },
  date:{
    width:'100%', 
    height:'80%',
    alignItems:'center',
    justifyContent: 'center', 
  }, 
  city:{
    width:'100%', 
    height:'20%',
    alignItems:'center',
    justifyContent: 'center', 
  }


});

export default DateScreen;

