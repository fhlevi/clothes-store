import React, {useState} from 'react';
import { 
    View,  
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme';
import {toRupiah} from '../helper/stringToCurrency';
import {CartStore} from '../store';
import {ProductDetailStyle} from './../style';
import InputQty from './layout/InputQty';

const ProductModal = (props) => {
    const {background} = props.item
    const [productSize, setProductSize] = useState(props.item.size)
    const [qty, setQty] = useState(1)
    const setCart = CartStore((state) => state.setCart)
    const cart = CartStore((state) => state.cart)

    const handleChangeSize = (size) => {
        const sizeActive = productSize.map(items => {
            if(size == items.name) {
                return {
                    ...items,
                    active: true
                }
            }

            return {
                ...items,
                active: false
            } 
        })

        setProductSize(sizeActive)
    }

    const transalateColors = (isActive) => {
        if(isActive) {
            return background
        }

        return null
    }
    const getPriceWithSize = () => {
        const data = productSize.find(_productSize => _productSize.active)
        
        return toRupiah(data.price)
    }
    const handleSaveToCart = () => {
        const size = productSize.find(_productSize => _productSize.active)

        const dataPrepare = {
            ...props.item,
            price: size.price,
            size: productSize,
            sizeSelected: size,
            qty: qty
        }

        setCart(dataPrepare)
    }
    const handleQuantity = (val) => {
        setQty(val)
    }
    
    return (
        <View style={{flex: 1}}>
            <View style={[ProductDetailStyle.container, {backgroundColor: background}]}>
                {/* Header */}
                <View style={ProductDetailStyle.header}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Icon name="keyboard-arrow-left" size={30} color={theme.colors.light.foreground} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={ProductDetailStyle.imgContainer}>
                    <Image source={props.item.image} style={{width: 220, height: 220}} />
                </View>
                <View style={ProductDetailStyle.detailsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={productSize}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    style={[ProductDetailStyle.sizeCircleContainer, {backgroundColor: transalateColors(item.active)}]} 
                                    onPress={() => handleChangeSize(item.name)}>
                                        <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )} 
                        />
                        <Text style={ProductDetailStyle.priceText}>{getPriceWithSize()}</Text>
                    </View>
                    <Text style={ProductDetailStyle.descriptionText}>{props.item.description}</Text>
                    <InputQty handleQuantity={handleQuantity} />
                </View>

                {/* Footer */}
                <View style={ProductDetailStyle.footerContainer}>
                    <TouchableOpacity style={[ProductDetailStyle.btnContainer, {marginRight: 10, borderColor: background}]}>
                        <Icon name="bookmark" size={30} color={background} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[ProductDetailStyle.btnContainer, {flex: 1,backgroundColor: background, borderColor: background}]}
                        onPress={() => handleSaveToCart()}
                    >
                        <Text style={ProductDetailStyle.btnText}>ADD TO CARD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductModal;