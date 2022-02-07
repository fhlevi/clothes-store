import React, {useState} from 'react'
import {  StyleSheet, View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import ProductModal from './productModal'
import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CartStore} from '../store';

const ProductBagComponent = ({item}) => {
    const [productVisible, setProductVisible] = useState(false)
    const removeItemCart = CartStore((state) => state.removeItemCart)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    const handleRemoveItem = () => {
        removeItemCart(item)
    }
    return(
        <TouchableOpacity style={styles.container} onPress={() => ToggleProductVisible()} >
                <Modal 
                    animationType="slide" 
                    visible={productVisible}
                    onRequestClose={() => ToggleProductVisible()}>
                        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
                </Modal>
                
                <View style={styles.subContainer}>
                    <View style={[styles.imgContainer, {backgroundColor: item.background}]}>
                        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
                    </View>
                    
                    <View style={styles.detailsContainer}>
                        <Text style={styles.nameText}>{item.title}</Text>
                        <Text style={styles.nameText}>{item.color}</Text>
                        <Text style={styles.priceText}>${item.price}</Text>
                    </View>

                    <View style={styles.sizeContainer}>
                        <TouchableOpacity style={styles.sizeCircle} onPress={() => handleRemoveItem()}>
                            <Icon name="trash" size={15} color={theme.colors.light.foreground} />
                        </TouchableOpacity>
                        <View style={styles.numCircle}>
                            <Text style={styles.nameText}>{item.qty}x</Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    subContainer: {
        flexDirection: 'row'
    },
    imgContainer: {
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    nameText: {
        fontWeight: '900',
        fontSize: theme.sizes.h3,
    },
    priceText: {
        marginTop: 7,
        fontWeight: 'bold'
    },
    sizeContainer: {
        justifyContent: 'center'
    },
    numCircle: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.silver
    },
    sizeCircle: {
        width: 30,
        height: 30,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.silver,
        backgroundColor: theme.colors.light.background
    }
})

export default ProductBagComponent