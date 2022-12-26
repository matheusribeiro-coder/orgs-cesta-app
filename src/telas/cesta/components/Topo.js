import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../components/Texto';

const width = Dimensions.get('screen').width;

const Topo = ({titulo}) => {
  return (
    <React.Fragment>
        <Image style={estilos.topo} source={topo}  />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </React.Fragment>
  )
}

export default Topo

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }
})
