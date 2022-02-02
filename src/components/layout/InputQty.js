import React, {useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ProductDetailStyle} from './../../style';
import { View, Text, TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';

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
        <View style={ProductDetailStyle.quantityContainer}>
            <TouchableOpacity 
                style={ProductDetailStyle.quantityContainer.buttonQty} 
                onPress={() => handleDecrement()}
            >
                <Icon name="minus" size={30} color={background} />
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity 
                style={ProductDetailStyle.quantityContainer.buttonQty}
                onPress={() => handleIncrement()}
            >
                <Icon name="plus" size={30} color={background} />
            </TouchableOpacity>
        </View>
    );
}

export default InputQty;