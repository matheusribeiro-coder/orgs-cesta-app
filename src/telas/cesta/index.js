import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from '../../components/Texto';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Topo from './components/Topo';

const Cesta = ({topo, detalhes, itens}) => {
  return (
    <React.Fragment>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({id}) => id}
        ListHeaderComponent={() => {
            return <React.Fragment>
                <Topo {...topo} />
                <View style={estilos.cesta}>
                <Texto style={estilos.nome}>Cesta de Verduras</Texto>
                <View style={estilos.fazenda}>
                    <Detalhes {...detalhes} />
                    <Texto style={estilos.itensTitulo}>{itens.titulo}</Texto>
                </View>
            </View>
            </React.Fragment>
        }}
      ></FlatList>
    </React.Fragment>
  )
}

export default Cesta

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    itensTitulo: {
        fontSize: 20,
        lineHeight: 32,
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8
    },
})