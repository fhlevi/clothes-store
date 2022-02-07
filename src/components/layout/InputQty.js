import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';
import tailwind from 'tailwind-rn';

import {ProductDetailStyle} from './../../style';

function InputQty(props) {
    const {background,handleQuantity} = props;
    const [qty, setQty] = useState(1)

    const handleDecrement = () => {
        let count = qty
        
        if(count > 1) {
            count--
        } else {
            ShowAlert()
        }

        setQty(count)
    }

    const handleIncrement = () => {
        let count = qty
        count++
        setQty(count)
    }

    useEffect(() => {
        handleQuantity(qty)
    }, [qty]);
    

    const ShowAlert = () => {
        Snackbar.show({
            text: 'Nilai kuantiti tidak boleh kurang dari 1.',
            duration: 1000,
            backgroundColor: '#FF483B',
            textColor: '#FFFFFF'
        });
    }

    return ( 
        <View style={[ProductDetailStyle.quantityContainer, tailwind('justify-between items-center flex-row')]}>
            <TouchableOpacity 
                style={ProductDetailStyle.buttonQty} 
                onPress={() => handleDecrement()}
            >
                <Icon name="minus" size={30} color={background} />
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity 
                style={ProductDetailStyle.buttonQty}
                onPress={() => handleIncrement()}
            >
                <Icon name="plus" size={30} color={background} />
            </TouchableOpacity>
        </View>
    );
}

export default InputQty;