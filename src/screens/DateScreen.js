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


      {id: '1',user: 'Admin',receiver: 'Admin',msg: 'Buenas tardes a todos, bienvenidos... Conocen las reglas, sean honestos, abiertos y respetuosos, les recuerdo que este es un grupo privado que responde al evento #FindYourRealCrush022021, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior. Diviertanse y que encuentren a su crush!!!',date: '1-feb.',hour: '8:19',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg', type: 2},
      {id: '2',user: 'Aguss',receiver: 'Aguss',msg: 'Hola Admin gracias por este espacio que nos das, soy Agustin tengo 30 años me encanta viajar y conocer cosas nuevas',date: '1-feb.',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg', type: 1},
      {id: '3',user: 'Mike Bloom',receiver: 'Mike Bloom',msg: 'Hey todos! soy Miguel ojala podamos conocernos, trabajo en inversiones y ventas.',date: '1-feb.',hour: '20:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg', type: 1},
      {id: '4',user: 'Jezz',receiver: 'Jezz',msg: 'Hola chicos! creo que somos muy poquitos jeje soy Jezz y amo la fotografía.',date: '2-feb.',hour: '18:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '5',user: 'Isra B',receiver: 'Isra B',msg: 'Hola Jezz, soy Isra, tambien me gusta la fotografía quizá podriamos colaborar algun día',date: '2-feb.',hour: '18:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg', type: 1},
      {id: '6',user: 'Yosh Black',receiver: 'Yosh Black',msg: 'Jajajaja tranquilo amigo dejala respirar...',date: '2-feb.',hour: '23:39',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '7',user: 'Lore Gil',receiver: 'Lore Gil',msg: 'Agus, café o cerveza?',date: '3-feb.',hour: '8:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg', type: 1},
      {id: '8',user: 'Abiix',receiver: 'Abiix',msg: 'Libre el viernes?',date: '3-feb.',hour: '10:15',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '9',user: 'Jimmy K',receiver: 'Jimmy K',msg: 'Conozco un buen lugar para tomar un trago, esta abierto al público por todo este tema de la pandemia... Que dices?',date: '3-feb.',hour: '10:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg', type: 1},
      {id: '10',user: 'Gonz',receiver: 'Gonz',msg: 'Abiix, vamos a cuerna! paso por ti?',date: '3-feb.',hour: '12:31',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '11',user: 'Bruno FG',receiver: 'Bruno FG',msg: 'Yo estoy libre Abi, ¿nos escapamos?',date: '3-feb.',hour: '17:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg', type: 1},
      {id: '12',user: 'Abiix',receiver: 'Abiix',msg: 'Jeje, tranquilos niños!! hay muchos viernes...',date: '4-feb.',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '13',user: 'Sistema',receiver: 'Sistema',msg: 'Abiix y Gonz han iniciado una platica privada',date: '4-feb.',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '14',user: 'VickyLu',receiver: 'VickyLu',msg: 'Wiiii, parejita y yo tan sola 😢',date: '5-feb.',hour: '11:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '15',user: 'Bruno FG',receiver: 'Bruno FG',msg: 'Eso puede cambiar Vicky, cuantos años tienes?',date: '5-feb.',hour: '12:16',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg', type: 1},
      {id: '16',user: 'VickyLu',receiver: 'VickyLu',msg: '23 🥰 soy muy bebe',date: '5-feb.',hour: '13:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '17',user: 'Bruno FG',receiver: 'Bruno FG',msg: 'Tus ojos son hermosos! 🌹🌹🌹🌹',date: '5-feb.',hour: '14:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg', type: 1},
      {id: '18',user: 'Sistema',receiver: 'Sistema',msg: 'VickyLu y Bruno FG han iniciado una platica privada',date: '5-feb.',hour: '14:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '19',user: 'Aguss',receiver: 'Aguss',msg: 'Lore!!! definitivamente cerveza, puedo invitarte una?',date: '5-feb.',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg', type: 1},
      {id: '20',user: 'Its a date!',receiver: 'Its a date!',msg: 'Abiix y Gonz comenzaron una cita en persona!!!',date: '5-feb.',hour: '16:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '21',user: 'Sistema',receiver: 'Sistema',msg: 'Lore Gil y Aguss han iniciado una platica privada',date: '5-feb.',hour: '18:42',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '22',user: 'Mar ella',receiver: 'Mar ella',msg: '😍 Hola niños!',date: '6-feb.',hour: '9:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '23',user: 'Poncho Green',receiver: 'Poncho Green',msg: 'Hola niña... 🌹 ',date: '6-feb.',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg', type: 1},
      {id: '24',user: 'RichieJ',receiver: 'RichieJ',msg: 'Mar, adoro tu cabello te ves muy bella en esa foto, dame la oportunidad de conocerte...',date: '6-feb.',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '25',user: 'SandyL',receiver: 'SandyL',msg: 'Hola a todos! algun fotografo? amo las fotos',date: '6-feb.',hour: '17:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '26',user: 'Sistema',receiver: 'Sistema',msg: 'Mar ella y Poncho Green han iniciado una platica privada',date: '6-feb.',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '27',user: 'RichieJ',receiver: 'RichieJ',msg: 'Mar ella, hola! podemos hablar?',date: '6-feb.',hour: '20:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '28',user: 'RichieJ',receiver: 'RichieJ',msg: 'Sandy, me encantaria hacerte una sesión de fotos! ',date: '6-feb.',hour: '20:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '29',user: 'SandyL',receiver: 'SandyL',msg: 'Jajaja como no te pelaron ya vienes conmigo 😢',date: '7-feb.',hour: '9:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '30',user: 'RichieJ',receiver: 'RichieJ',msg: 'No esta lista para mi; la pregunta es... tu lo estas?',date: '7-feb.',hour: '10:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '31',user: 'SandyL',receiver: 'SandyL',msg: 'Jajajaja 😏',date: '7-feb.',hour: '11:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '32',user: 'Sistema',receiver: 'Sistema',msg: 'SandyL y RichieJ han iniciado una platica privada',date: '7-feb.',hour: '11:05',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '33',user: 'VickyLu',receiver: 'VickyLu',msg: 'Hola bebes! como les va en esto del 👩‍❤️‍💋‍👨?',date: '7-feb.',hour: '18:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '34',user: 'Abiix',receiver: 'Abiix',msg: 'Nada mal jejeje... ',date: '7-feb.',hour: '18:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '35',user: 'Paco Flip',receiver: 'Paco Flip',msg: 'Todo mal 💔',date: '7-feb.',hour: '20:19',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '36',user: 'Abiix',receiver: 'Abiix',msg: 'Auuuch!!! noooo!!!!',date: '7-feb.',hour: '20:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '37',user: 'Sistema',receiver: 'Sistema',msg: 'Abiix y Paco Flip han iniciado una platica privada',date: '7-feb.',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '38',user: 'Yosh Black',receiver: 'Yosh Black',msg: 'Alguien vio el SB? o solo el medio tiempo? jejeje',date: '7-feb.',hour: '22:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '39',user: 'Jimmy K',receiver: 'Jimmy K',msg: 'Jajajaja siempre pasa... 🏈 Afortunadamente me fue bien en el fantasy',date: '7-feb.',hour: '22:16',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg', type: 1},
      {id: '40',user: 'Lesly Reyna',receiver: 'Lesly Reyna',msg: 'Vaya!!! hasta que salen los niños rudos jejeje ',date: '7-feb.',hour: '22:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg', type: 1},
      {id: '41',user: 'Sistema',receiver: 'Sistema',msg: 'Lesly Reyna y Jimmy K han iniciado una platica privada',date: '7-feb.',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '42',user: 'Sistema',receiver: 'Sistema',msg: 'Lesly Reyna y Yosh Black han iniciado una platica privada',date: '7-feb.',hour: '21:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '43',user: 'Rey Sosa',receiver: 'Rey Sosa',msg: 'Chicas lindas, el siguiente fin de semana estaré en CDMX de trabajo por el sur',date: '8-feb.',hour: '10:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '44',user: 'VickyLu',receiver: 'VickyLu',msg: 'Paso... jejeje',date: '8-feb.',hour: '12:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '45',user: 'Abiix',receiver: 'Abiix',msg: 'Que haras el sabado Rey? necesitas una guia de turistas?',date: '8-feb.',hour: '14:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '46',user: 'Sistema',receiver: 'Sistema',msg: 'Abiix y Rey Sosa han iniciado una platica privada',date: '8-feb.',hour: '16:28',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '47',user: 'Ari Lux',receiver: 'Ari Lux',msg: 'Bien mueves vdd Vicky? jejeje',date: '8-feb.',hour: '17:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '48',user: 'VickyLu',receiver: 'VickyLu',msg: 'Ya se!!! ',date: '8-feb.',hour: '18:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '49',user: 'Rey Sosa',receiver: 'Rey Sosa',msg: 'Nada que ver, pero aqui debemos ser directos y muy sinceros, es la base de todo, por cierto que niñas tan lindas nos tocaron este mes! 💃💃💃',date: '8-feb.',hour: '18:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '50',user: 'Barbie12',receiver: 'Barbie12',msg: 'Y aun no me veias a mi!',date: '8-feb.',hour: '20:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '51',user: 'Sistema',receiver: 'Sistema',msg: 'Barbie 12 y Rey Sosa han iniciado una platica privada',date: '8-feb.',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '52',user: 'Isra B',receiver: 'Isra B',msg: 'Alguien para salir a cenar?',date: '9-feb.',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg', type: 1},
      {id: '53',user: 'VickyLu',receiver: 'VickyLu',msg: '🦗🦗🦗',date: '9-feb.',hour: '15:49',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '54',user: 'Its a date!',receiver: 'Its a date!',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '9-feb.',hour: '16:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '55',user: 'Lozano',receiver: 'Lozano',msg: 'Jajajajaja eres una burlona Vicky!!! ',date: '9-feb.',hour: '17:10',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-elle-hughes-1680172.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-elle-hughes-1680172.jpg', type: 1},
      {id: '56',user: 'Sistema',receiver: 'Sistema',msg: 'VickyLu y Lozano han inixiado una platica privada',date: '9-feb.',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '57',user: 'Alex Fragon',receiver: 'Alex Fragon',msg: 'Alguna chica para hacer plática constructiva?',date: '10-feb.',hour: '10:10',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg', type: 1},
      {id: '58',user: 'Jezz',receiver: 'Jezz',msg: 'De que te gustaría hablar Alex?',date: '10-feb.',hour: '12:49',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '59',user: 'Alex Fragon',receiver: 'Alex Fragon',msg: 'Historia, arqueología, filosofia, música, cultura... quiza compartir vivencias, ideologías...',date: '10-feb.',hour: '12:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg', type: 1},
      {id: '60',user: 'Sistema',receiver: 'Sistema',msg: 'Jezz y Alez Fragon han inixiado una platica privada',date: '10-feb.',hour: '13:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '61',user: 'Its a date!',receiver: 'Its a date!',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '10-feb.',hour: '16:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '62',user: 'Yola',receiver: 'Yola',msg: 'Hey!!! soy un poco nueva en esto... Pero me agrada que todos son super respetuosos y amigables',date: '10-feb.',hour: '23:11',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg', type: 1},
      {id: '63',user: 'Yosh Black',receiver: 'Yosh Black',msg: 'Bienvenida, te vas a divertir mucho!',date: '11-feb.',hour: '10:41',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '64',user: 'Sistema',receiver: 'Sistema',msg: 'Yola y Yosh Blak han iniciado na platica privada',date: '11-feb.',hour: '14:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '65',user: 'Its a date!',receiver: 'Its a date!',msg: 'Lesly Reyna y Jimmy K comenzaron una cita personal!!!',date: '11-feb.',hour: '18:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '66',user: 'Mike Bloom',receiver: 'Mike Bloom',msg: 'Hola, no se apagen!!!',date: '12-feb.',hour: '20:31',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg', type: 1},
      {id: '67',user: 'Ari Lux',receiver: 'Ari Lux',msg: 'Aqui seguimos!!!! 🍻🍻',date: '12-feb.',hour: '21:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '68',user: 'Sistema',receiver: 'Sistema',msg: 'Ari Lux y Mike Bloom han iniciado una platica privada',date: '12-feb.',hour: '22:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '69',user: 'Its a date!',receiver: 'Its a date!',msg: 'Abiix y Rey Sosa comenzaron una cita en persona!!!',date: '13-feb.',hour: '17:35',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '70',user: 'On Fire',receiver: 'On Fire',msg: 'Abiix esta on fire!!!',date: '13-feb.',hour: '17:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '71',user: 'VickyLu',receiver: 'VickyLu',msg: 'Ya listos para San Valentin??? 😍😍😍',date: '13-feb.',hour: '19:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '72',user: 'Juliiz',receiver: 'Juliiz',msg: 'Ya ni me digas... 😭😭😭😭',date: '13-feb.',hour: '20:01',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg', type: 1},
      {id: '73',user: 'Bruno FG',receiver: 'Bruno FG',msg: 'Esto no acaba hasta que se acaba!!!',date: '13-feb.',hour: '20:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg', type: 1},
      {id: '74',user: 'Jimmy K',receiver: 'Jimmy K',msg: 'Quien será mi valentin? jejejeje',date: '13-feb.',hour: '20:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg', type: 1},
      {id: '75',user: 'Sistema',receiver: 'Sistema',msg: 'Juliiz y Bruno FG han iniciado una platica privada',date: '13-feb.',hour: '20:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '76',user: 'Sistema',receiver: 'Sistema',msg: 'Jezz y Jimmy K han iniciado una platica privada',date: '13-feb.',hour: '20:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '77',user: 'VickyLu',receiver: 'VickyLu',msg: 'Chicas, ponganse lindas, niños... sorprendanos!!!',date: '14-feb.',hour: '12:04',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '78',user: 'Its a date!',receiver: 'Its a date!',msg: 'Mar ella y Poncho Green comenzaron una cita en persona!!!',date: '14-feb.',hour: '14:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '79',user: 'Its a date!',receiver: 'Its a date!',msg: 'Vicky Lu y Lozano comenzaron una cita en persona!!!',date: '14-feb.',hour: '16:25',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '80',user: 'Its a date!',receiver: 'Its a date!',msg: 'Abiix y Paco Flip comenzaron una cita en persona!!!',date: '14-feb.',hour: '17:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '81',user: 'On Fire',receiver: 'On Fire',msg: 'Abiix esta on fire!!!',date: '14-feb.',hour: '18:45',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '82',user: 'Its a date!',receiver: 'Its a date!',msg: 'Lore Gil y Aguss comenzaron una cita en persona!!!',date: '14-feb.',hour: '19:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '83',user: 'Its a date!',receiver: 'Its a date!',msg: 'Yola y Yosh Black comenzaron una cita en persona!!!',date: '14-feb.',hour: '20:18',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '84',user: 'Its a date!',receiver: 'Its a date!',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '14-feb.',hour: '20:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '85',user: 'Lesly Reyna',receiver: 'Lesly Reyna',msg: 'Que días!! como les fue??',date: '15-feb.',hour: '12:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg', type: 1},
      {id: '86',user: 'Barbie12',receiver: 'Barbie12',msg: 'Bastante bien amix 🥰',date: '15-feb.',hour: '16:55',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '87',user: 'RichieJ',receiver: 'RichieJ',msg: 'Bien Lesly, pero estoy seguro que pudimos hacer algo aun mejor',date: '15-feb.',hour: '20:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '88',user: 'Barbie12',receiver: 'Barbie12',msg: 'Que modesto... me gustaría probar...',date: '16-feb.',hour: '12:32',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg', type: 1},
      {id: '89',user: 'Sistema',receiver: 'Sistema',msg: 'Barbie12 y RichieJ han iniciado una platica privada',date: '16-feb.',hour: '14:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '90',user: 'Lore Gil',receiver: 'Lore Gil',msg: '😶😶😶 wooooow jejejeje',date: '16-feb.',hour: '17:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg', type: 1},
      {id: '91',user: 'Abiix',receiver: 'Abiix',msg: 'Niñas!!! como les va?? 🙋‍♀️🙋‍♀️🙋‍♀️',date: '16-feb.',hour: '19:52',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '92',user: 'Ari Lux',receiver: 'Ari Lux',msg: 'No tan bien como a ti... eres la reina de este juegoo!! Te admiramos jejeje',date: '17-feb.',hour: '9:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg', type: 1},
      {id: '93',user: 'VickyLu',receiver: 'VickyLu',msg: 'Abiix! por fi cuidate mucho... y luego nos pasas la receta para ser como tu en el amoooor 🔮🔮🔮',date: '17-feb.',hour: '19:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '94',user: 'SandyL',receiver: 'SandyL',msg: 'Bebes!! hace falta una noche de chicas!! jejejeje',date: '17-feb.',hour: '20:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg', type: 1},
      {id: '95',user: 'RichieJ',receiver: 'RichieJ',msg: 'Y a nosotros una noche de chicos... 🍻🍻🍻🍻',date: '18-feb.',hour: '12:12',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '96',user: 'Gonz',receiver: 'Gonz',msg: 'Yo me apunto, chela, musica y chicas!! jajaja',date: '18-feb.',hour: '21:52',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '97',user: 'VickyLu',receiver: 'VickyLu',msg: 'Jajajaja quieren una noche de chicos? uhy yo que iba a proponerles algo...',date: '19-feb.',hour: '14:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '98',user: 'RichieJ',receiver: 'RichieJ',msg: 'No se diga mas Vicky... se cancela la noche de chicos...',date: '19-feb.',hour: '16:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '99',user: 'Sistema',receiver: 'Sistema',msg: 'Vicky Lu y RichieJ han iniciado una platica privada',date: '19-feb.',hour: '16:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '100',user: 'Rey Sosa',receiver: 'Rey Sosa',msg: 'Niños... alguien que busque hombres?',date: '20-feb.',hour: '11:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '101',user: 'VickyLu',receiver: 'VickyLu',msg: 'Ñooo somos bebes 👧🧒',date: '20-feb.',hour: '16:20',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '102',user: 'Its a date!',receiver: 'Its a date!',msg: 'Barbie12 y RichieJ comenzaron una cita en persona!!!',date: '21-feb.',hour: '18:36',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '103',user: 'Mar ella',receiver: 'Mar ella',msg: 'Hola Rey, te ves super maduro y fuerte jeje',date: '22-feb.',hour: '11:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg', type: 1},
      {id: '104',user: 'Rey Sosa',receiver: 'Rey Sosa',msg: 'Hola.. hablemos en privado...',date: '22-feb.',hour: '16:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '105',user: 'Sistema',receiver: 'Sistema',msg: 'Mar ella y Rey Sosa han iniciado una platica privada',date: '22-feb.',hour: '16:26',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '106',user: 'Jezz',receiver: 'Jezz',msg: 'Voy a tener una sesión de fotos.. alguien quisiera ayudarme?',date: '23-feb.',hour: '13:29',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg', type: 1},
      {id: '107',user: 'Mike Bloom',receiver: 'Mike Bloom',msg: 'Como te ayudo Jezz? 📸 ',date: '23-feb.',hour: '16:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg', type: 1},
      {id: '108',user: 'Sistema',receiver: 'Sistema',msg: 'Jezz y Mike Bloom han iniciado una platica privada',date: '23-feb.',hour: '17:00',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '109',user: 'Abiix',receiver: 'Abiix',msg: 'Ya me apague mucho... necesito un poco de diversión!!! ',date: '24-feb.',hour: '12:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '110',user: 'RichieJ',receiver: 'RichieJ',msg: 'Que clase de diversión Abiix? Como te ayudo?',date: '24-feb.',hour: '17:23',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '111',user: 'Abiix',receiver: 'Abiix',msg: 'Pues no se... que se te ocurre? ten un poquito de imaginación',date: '24-feb.',hour: '22:39',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '112',user: 'RichieJ',receiver: 'RichieJ',msg: 'Podría escribir aqui mismo nuestro futuro pero no existe una 🖋 que tenga tanta tinta, ni vida que lo soporte...',date: '25-feb.',hour: '8:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg', type: 1},
      {id: '113',user: 'Abiix',receiver: 'Abiix',msg: '😍🥰😘',date: '25-feb.',hour: '15:57',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '114',user: 'Sistema',receiver: 'Sistema',msg: 'Abiix y RichieJ han iniciado una platica privada',date: '25-feb.',hour: '16:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '115',user: 'Juliiz',receiver: 'Juliiz',msg: 'Tenemos un poeta... alguien mas es lindo???',date: '25-feb.',hour: '17:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ingrid-santana-2253707.jpg', type: 1},
      {id: '116',user: 'Gonz',receiver: 'Gonz',msg: 'Si tu sonrisa es el mar... con gusto naufragaba en tu mirada...',date: '25-feb.',hour: '18:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg', type: 1},
      {id: '117',user: 'Its a date!',receiver: 'Its a date!',msg: 'Abiix y RichieJ comenzaron una cita en persona!!!',date: '25-feb.',hour: '20:27',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '118',user: 'On Fire',receiver: 'On Fire',msg: 'Abiix esta on fire!!!',date: '25-feb.',hour: '20:28',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '119',user: 'Yosh Black',receiver: 'Yosh Black',msg: 'Abiix... ya no puedo mas con tu popularidad... falto yo!!!',date: '26-feb.',hour: '11:07',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg', type: 1},
      {id: '120',user: 'Abiix',receiver: 'Abiix',msg: 'Callateeee... oki seamos amix... 💓',date: '26-feb.',hour: '12:38',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '121',user: 'Sistema',receiver: 'Sistema',msg: 'Abiix y Yosh Black han iniciado una platica privada',date: '26-feb.',hour: '14:21',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '122',user: 'Its a date!',receiver: 'Its a date!',msg: 'Mar ella y Rey Sosa comenzaron una cita en persona!!!',date: '26-feb.',hour: '19:13',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '123',user: 'On Fire',receiver: 'On Fire',msg: 'Mar ella esta on fire!!!',date: '26-feb.',hour: '19:14',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '124',user: 'Aguss',receiver: 'Aguss',msg: 'Vicky adoro tu mirada!! creo que me enamorare...',date: '27-feb.',hour: '12:43',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg', type: 1},
      {id: '125',user: 'Its a date!',receiver: 'Its a date!',msg: 'Abiix y Yosh Black comenzaron una cita en persona!!!',date: '27-feb.',hour: '19:02',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '126',user: 'On Fire',receiver: 'On Fire',msg: 'Abiix esta on fire!!!',date: '27-feb.',hour: '19:03',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '127',user: 'VickyLu',receiver: 'VickyLu',msg: 'Jejejeje... calmaaaa!! me sonrojas 🤗',date: '27-feb.',hour: '20:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '128',user: 'Sistema',receiver: 'Sistema',msg: 'Vicky Lu y Aguss han iniciado una platica privada',date: '27-feb.',hour: '20:42',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '129',user: 'Paco Flip',receiver: 'Paco Flip',msg: 'Sin miedo a equivocarme, Vicky es la princesa de este cuento... 🤩🌟',date: '27-feb.',hour: '21:56',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg', type: 1},
      {id: '130',user: 'VickyLu',receiver: 'VickyLu',msg: 'Yaaa... dejenme en paz!! muero de pena!!!',date: '27-feb.',hour: '22:27',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg', type: 1},
      {id: '131',user: 'Sistema',receiver: 'Sistema',msg: 'Vicky Lu y Paco Flip han iniciado una platica privada',date: '27-feb.',hour: '22:34',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg', type: 2},
      {id: '132',user: 'Abiix',receiver: 'Abiix',msg: 'Nooo... termine toda solaaa 😭😭😭😭 a ver que se me ocurre',date: '28-feb.',hour: '14:33',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg', type: 1},
      {id: '133',user: 'Rey Sosa',receiver: 'Rey Sosa',msg: 'Sabes que solo tienes que llamarme y tu tristeza se acaba Abiix',date: '28-feb.',hour: '16:54',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg', type: 1},
      {id: '134',user: 'Its a date!',receiver: 'Its a date!',msg: 'Vicky Lu y Paco Flip comenzaron una cita en persona!!!',date: '28-feb.',hour: '18:46',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg', type: 2},
      {id: '135',user: 'On Fire',receiver: 'On Fire',msg: 'Vicky Lu esta on fire!!!',date: '28-feb.',hour: '18:47',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg', type: 2},
      {id: '134',user: 'Admin',receiver: 'Admin',msg: 'Buenas noches a todos, espero que disfrutaran este su evento #FindYourRealCrush022021, los mensajes del mes pasado quedarán disponibles al iniciar con su contraseña anterior, en breve se les enviarán sus nuevas contraseñas para el próximo evento #FindYourRealCrush032021...',date: '28-feb.',hour: '23:22',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',picReceiver:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg', type: 2},



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
                  <View style={{width:'33%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <Avatar rounded source={{uri: item.pic}} size="medium"/>
                  </View>
                  <View style={{width:'33%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                      <Icon name='email-send' type='material-community' style={styles.icon}/>
                  </View>
                  <View style={{width:'33%', height:'100%', justifyContent:'center', alignItems:'center'}}>
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
    fontSize: 69,
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
    width: '35%',
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
    width: '65%',
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
    fontSize: 18,
  },
  labelHour: {
    color: '#686464',
    fontSize: 10,
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

