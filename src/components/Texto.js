import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Texto = ({children, style}) => {
  let estilo = estilos.texto;

  if(style && style.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return (
    <Text style={[style, estilo]}>{ children }</Text>
  )
}

export default Texto

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})
