import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

const NuevaOrden = ({ navigation }) => {
    
    const volver = () => {
        navigation.goBack()
    }
    return (  
        <View style={styles.contenedor}>
            <Text>Volver</Text>
        
        <Button
            title="Volver"
            onPress={() => volver()}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnVolver: {
        
    },
    btnVolverTexto: {

    }
})
export default NuevaOrden;