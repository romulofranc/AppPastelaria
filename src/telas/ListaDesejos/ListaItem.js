import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Card } from'react-native-paper';
import { Ionicons } from "react-native-vector-icons/Ionicons";

import Texto from '../../componentes/Texto'
import styles from './estilos'

export default function ListaItem ({id, titulo, imagem}) {

    return <SafeAreaView style={styles.cardContainer}>
            <StatusBar/>
            <Card mode='contained' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Texto style={styles.nomeProduto}>{titulo}</Texto>
                </Card.Content>
            </Card>
    </SafeAreaView>
}