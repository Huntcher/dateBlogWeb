import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
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

      {id: '1',user: 'Admin',msg: 'Buenas tardes a todos, bienvenidos... Conocen las reglas, sean honestos, abiertos y respetuosos, les recuerdo que este es un grupo privado.',date: '01/02/2021 17:19',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-splitshire-1702.jpg',},
      {id: '2',user: 'Aguss',msg: 'Hola Admin gracias por este espacio que nos das, soy Agustin tengo 30 años me encanta viajar y conocer cosas nuevas',date: '01/02/2021 19:03',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',},
      {id: '3',user: 'Mike Bloom',msg: 'Hey todos! soy Miguel ojala podamos conocernos, trabajo en inversiones y ventas.',date: '01/02/2021 20:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',},
      {id: '4',user: 'Jezz',msg: 'Hola chicos! creo que somos muy poquitos jeje soy Jezz y amo la fotografía.',date: '02/02/2021 18:02',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',},
      {id: '5',user: 'Isra B',msg: 'Hola Jezz, soy Isra, tambien me gusta la fotografía quizá podriamos colaborar algun día',date: '02/02/2021 18:12',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',},
      {id: '6',user: 'Yosh Black',msg: 'Jajajaja tranquilo amigo dejala respirar...',date: '02/02/2021 23:39',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',},
      {id: '7',user: 'Lore Gil',msg: 'Agus, café o cerveza?',date: '03/02/2021 8:14',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808283.jpg',},
      {id: '8',user: 'Abiix',msg: 'Libre el viernes?',date: '03/02/2021 10:15',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '9',user: 'Jimmy K',msg: 'Conozco un buen lugar para tomar un trago, esta abierto al público por todo este tema de la pandemia... Que dices?',date: '03/02/2021 10:38',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',},
      {id: '10',user: 'Gonz',msg: 'Abiix, vamos a cuerna! paso por ti?',date: '03/02/2021 12:31',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-martin-p%C3%A9chy-594610.jpg',},
      {id: '11',user: 'Bruno FG',msg: 'Yo estoy libre Abi, ¿nos escapamos?',date: '03/02/2021 17:55',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',},
      {id: '12',user: 'Abiix',msg: 'Jeje, tranquilos niños!! hay muchos viernes...',date: '04/02/2021 19:02',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '13',user: 'Sistema',msg: 'Abiix y Gonz han iniciado una platica privada',date: '04/02/2021 19:03',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '14',user: 'VickyLu',msg: 'Wiiii, parejita y yo tan sola 😢',date: '05/02/2021 11:32',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '15',user: 'Bruno FG',msg: 'Eso puede cambiar Vicky, cuantos años tienes?',date: '05/02/2021 12:16',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',},
      {id: '16',user: 'VickyLu',msg: '23 🥰 soy muy bebe',date: '05/02/2021 13:45',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '17',user: 'Bruno FG',msg: 'Tus ojos son hermosos! 🌹🌹🌹🌹',date: '05/02/2021 14:03',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-lucas-pezeta-1959698.jpg',},
      {id: '18',user: 'Sistema',msg: 'VickyLu y Bruno FG han iniciado una platica privada',date: '05/02/2021 14:12',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '19',user: 'Aguss',msg: 'Lore!!! definitivamente cerveza, puedo invitarte una?',date: '05/02/2021 14:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',},
      {id: '20',user: 'Its a date!',msg: 'Abiix y Gonz comenzaron una cita en persona!!!',date: '05/02/2021 16:35',place: 'Date',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',},
      {id: '21',user: 'Sistema',msg: 'Lore Gol y Aguss han iniciado una platica privada',date: '05/02/2021 18:42',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '22',user: 'Mar ella',msg: '😍 Hola niños!',date: '06/02/2021 09:43',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/mariela.jpg',},
      {id: '23',user: 'Poncho Green',msg: 'Hola niña... 🌹 ',date: '06/02/2021 12:32',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-david-gomes-4048497.jpg',},
      {id: '24',user: 'RichieJ',msg: 'Mar, adoro tu cabello te ves muy bella en esa foto, dame la oportunidad de conocerte...',date: '06/02/2021 14:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',},
      {id: '25',user: 'SandyL',msg: 'Hola a todos! algun fotografo? amo las fotos',date: '06/02/2021 17:46',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',},
      {id: '26',user: 'Sistema',msg: 'Mar ella y Poncho Green han iniciado una platica privada',date: '06/02/2021 19:02',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '27',user: 'RichieJ',msg: 'Mar ella, hola! podemos hablar?',date: '06/02/2021 20:04',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',},
      {id: '28',user: 'RichieJ',msg: 'Sandy, me encantaria hacerte una sesión de fotos! ',date: '06/02/2021 20:11',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',},
      {id: '29',user: 'SandyL',msg: 'Jajaja como no te pelaron ya vienes conmigo 😢',date: '07/02/2021 09:43',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',},
      {id: '30',user: 'RichieJ',msg: 'No esta lista para mi; la pregunta es... tu lo estas?',date: '07/02/2021 10:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/WhatsApp+Image+2021-01-28+at+15415+AM.jpg',},
      {id: '31',user: 'SandyL',msg: 'Jajajaja 😏',date: '07/02/2021 11:03',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/sandy1.jpg',},
      {id: '32',user: 'Sistema',msg: 'SandyL y RichieJ han iniciado una platica privada',date: '07/02/2021 11:05',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '33',user: 'Aguss',msg: 'Lore Gil... contigo, hasta agua 💦',date: '07/02/2021 13:51',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-marcelo-chagas-3149036.jpg',},
      {id: '34',user: 'Sistema',msg: 'Lore Gil y Aguss han iniciado una platica privada',date: '07/02/2021 16:43',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '35',user: 'VickyLu',msg: 'Hola bebes! como les va en esto del 👩‍❤️‍💋‍👨?',date: '07/02/2021 18:34',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '36',user: 'Abiix',msg: 'Nada mal jejeje... ',date: '07/02/2021 18:55',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '37',user: 'Paco Flip',msg: 'Todo mal 💔',date: '07/02/2021 20:19',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-mentatdgt-1138903.jpg',},
      {id: '38',user: 'Abiix',msg: 'Auuuch!!! noooo!!!!',date: '07/02/2021 20:54',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '39',user: 'Sistema',msg: 'Abiix y Paco Flip han iniciado una platica privada',date: '07/02/2021 21:12',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '40',user: 'Yosh Black',msg: 'Alguien vio el SB? o solo el medio tiempo? jejeje',date: '07/02/2021 22:01',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',},
      {id: '41',user: 'Jimmy K',msg: 'Jajajaja siempre pasa... 🏈 Afortunadamente me fue bien en el fantasy',date: '07/02/2021 22:16',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-pixabay-220453.jpg',},
      {id: '42',user: 'Lesly Reyna',msg: 'Vaya!!! hasta que salen los niños rudos jejeje ',date: '07/02/2021 22:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-luis-quintero-1689716.jpg',},
      {id: '43',user: 'Sistema',msg: 'Lesly Reyna y Jimmy K han iniciado una platica privada',date: '07/02/2021 21:12',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '44',user: 'Sistema',msg: 'Lesly Reyna y Yosh Black han iniciado una platica privada',date: '07/02/2021 21:12',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '45',user: 'Rey Sosa',msg: 'Chicas lindas, el siguiente fin de semana estaré en CDMX de trabajo por el sur',date: '08/02/2021 10:04',place: 'Puebla',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',},
      {id: '46',user: 'VickyLu',msg: 'Paso... jejeje',date: '08/02/2021 12:01',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '47',user: 'Abiix',msg: 'Que haras el sabado Rey? necesitas una guia de turistas?',date: '08/02/2021 14:43',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-harsh-kushwaha-2058664.jpg',},
      {id: '48',user: 'Sistema',msg: 'Abiix y Rey Sosa han iniciado una platica privada',date: '08/02/2021 16:28',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '49',user: 'Ari Lux',msg: 'Bien mueves vdd Vicky? jejeje',date: '08/02/2021 17:54',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',},
      {id: '50',user: 'VickyLu',msg: 'Ya se!!! ',date: '08/02/2021 18:21',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '51',user: 'Rey Sosa',msg: 'Nada que ver, pero aqui debemos ser directos y muy sinceros, es la base de todo, por cierto que niñas tan lindas nos tocaron este mes! 💃💃💃',date: '08/02/2021 18:38',place: 'Puebla',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-hamid-tajik-6207046.jpg',},
      {id: '52',user: 'Barbie12',msg: 'Y aun no me veias a mi!',date: '08/02/2021 20:12',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-ronailson-santos-2005743.jpg',},
      {id: '53',user: 'Sistema',msg: 'Barbie 12 y Rey Sosa han iniciado una platica privada',date: '08/02/2021 21:43',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '54',user: 'Isra B',msg: 'Alguien para salir a cenar?',date: '44236.5222222222',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-wesner-rodrigues-1892876.jpg',},
      {id: '55',user: 'VickyLu',msg: '🦗🦗🦗',date: '09/02/2021 15:49',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-2005011.jpg',},
      {id: '56',user: 'Its a date!',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '09/02/2021 16:35',place: 'Date',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',},
      {id: '57',user: 'Lozano',msg: 'Jajajajaja eres una burlona Vicky!!! ',date: '09/02/2021 17:10',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-elle-hughes-1680172.jpg',},
      {id: '58',user: 'Sistema',msg: 'VickyLu y Lozano han inixiado una platica privada',date: '09/02/2021 21:43',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '59',user: 'Alex Fragon',msg: 'Alguna chica para hacer plática constructiva?',date: '10/02/2021 10:10',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',},
      {id: '60',user: 'Jezz',msg: 'De que te gustaría hablar Alex?',date: '10/02/2021 12:49',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-marcelo-chagas-1808284.jpg',},
      {id: '61',user: 'Alex Fragon',msg: 'Historia, arqueología, filosofia, música, cultura... quiza compartir vivencias, ideologías...',date: '10/02/2021 12:55',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-emre-keshavarz-3526923.jpg',},
      {id: '62',user: 'Sistema',msg: 'Jezz y Alez Fragon han inixiado una platica privada',date: '10/02/2021 13:21',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '63',user: 'Its a date!',msg: 'SandyL y RichieJ comenzaron una cita en persona!!!',date: '10/02/2021 16:43',place: 'Date',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',},
      {id: '64',user: 'Yola',msg: 'Hey!!! soy un poco nueva en esto... Pero me agrada que todos son super respetuosos y amigables',date: '10/02/2021 23:11',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/pexels-bran-sodre-1852345.jpg',},
      {id: '65',user: 'Yosh Black',msg: 'Bienvenida, te vas a divertir mucho!',date: '11/02/2021 10:41',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1356272.jpg',},
      {id: '66',user: 'Sistema',msg: 'Yola y Yosh Blak han iniciado na platica privada',date: '11/02/2021 14:23',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '67',user: 'Its a date!',msg: 'Lesly Reyna y Jimmy K comenzaron una cita personal!!!',date: '11/02/2021 18:45',place: 'Date',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',},
      {id: '68',user: 'Mike Bloom',msg: 'Hola, no se apagen!!!',date: '12/02/2021 20:31',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/HombresMin/pexels-yogendra-singh-1760900.jpg',},
      {id: '69',user: 'Ari Lux',msg: 'Aqui seguimos!!!! 🍻🍻',date: '12/02/2021 21:43',place: 'CDMX',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/People/MujeresMin/ari1.jpg',},
      {id: '70',user: 'Sistema',msg: 'Ari Lux y Mike Bloom han iniciado na platica privada',date: '12/02/2021 22:12',place: 'Match',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-tim-mossholder-3690735.jpg',},
      {id: '71',user: 'Its a date!',msg: 'Abiix y Rey Sosa comenzaron una cita en persona!!!',date: '13/02/2021 17:35',place: 'Date',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-w-r-1450155.jpg',},
      {id: '72',user: 'On Fire',msg: 'Abiix esta on fire!!!',date: '13/02/2021 17:36',place: 'Crush',pic:'https://huntcherapp.s3.us-east-2.amazonaws.com/dateblog/images/Pics/SexyMin/pexels-valeria-boltneva-597200.jpg',},
      
      

      
    ]} ;

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

  <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>Conoce a tu crush</Text>
      </View>
          <View style={styles.body}>
                    
                    {getListMessage()}

          </View>
      <View style={styles.header}>
          <Text style={styles.headerTitle}>By OsoHorney</Text>
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

