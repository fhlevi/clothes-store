import React, {useState} from 'react';
import { 
    View,  
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import tailwind from 'tailwind-rn';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme';
import {CartStore} from '../store';
import {ProductDetailStyle} from './../style';
import InputQty from './layout/InputQty';

const ProductModal = (props) => {
    const {background} = props.item
    const [qty, setQty] = useState(1)
    const setCart = CartStore((state) => state.setCart)

    const handleSaveToCart = () => {
        const dataPrepare = {
            ...props.item,
            qty: qty
        }

        setCart(dataPrepare)
    }
    const handleQuantity = (val) => {
        setQty(val)
    }
    
    return (
        <View style={ProductDetailStyle.container}>
            <View style={[ProductDetailStyle.container, {backgroundColor: background}]}>
                {/* Header */}
                <View style={tailwind('h-20 p-5 flex-row items-center justify-between')}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Icon name="keyboard-arrow-left" size={30} color={theme.colors.light.foreground} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={[ProductDetailStyle.imgContainer,tailwind('items-center justify-center')]}>
                    <Image source={{uri: props.item.image}} style={tailwind('w-56 h-56')} />
                </View>
                <View style={ProductDetailStyle.detailsContainer}>
                    <ScrollView>
                        <View style={tailwind('flex-row justify-between items-center')}>
                            <Text style={ProductDetailStyle.priceText}>${props.item.price}</Text>
                        </View>
                        <Text style={ProductDetailStyle.descriptionText}>{props.item.description}</Text>
                        <InputQty handleQuantity={handleQuantity} />
                    </ScrollView>
                </View>

                {/* Footer */}
                <View style={[tailwind('p-5 flex-row'), {backgroundColor: 'white'}]}>
                    <TouchableOpacity style={[
                        tailwind('p-4 items-center justify-center'), ProductDetailStyle.btnContainer, 
                        {
                            marginRight: 10, 
                            borderColor: background
                        }
                    ]}>
                        <Icon name="bookmark" size={30} color={background} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[
                            tailwind('p-4 items-center justify-center'), ProductDetailStyle.btnContainer, ProductDetailStyle.container,
                            {
                                backgroundColor: background, 
                                borderColor: background
                            }
                        ]}
                        onPress={() => handleSaveToCart()}
                    >
                        <Text style={[ProductDetailStyle.btnText, tailwind('font-bold text-lg')]}>ADD TO CARD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductModal;