import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import imageSuccess from './../../assets/images/accepted-order.png';
import {ButtonStyle} from './../../style';

function WrapperSuccess(props) {
    console.log(imageSuccess)
    return ( 
        <View style={styles.wrapperContainer}>
            <Image source={imageSuccess} style={{width: 150, height: 150, marginBottom: 15}} />
            <TouchableOpacity style={ButtonStyle.buttonPrimary} onPress={() => props.closeModal()}>
                <Text style={ButtonStyle.btnText}>Kembali</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperContainer: {
        padding: 15,
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default WrapperSuccess;