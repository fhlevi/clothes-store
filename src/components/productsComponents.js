import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import tailwind from 'tailwind-rn';

import ProductModal from './productModal';
import {ellipsis} from '../helper/stringFunctions';

const ProductComponent = ({item}) => {
    const [productVisible, setProductVisible] = useState(false)

    const ToggleProductVisible = () => {
        setProductVisible(!productVisible)
    }
    return(
        <TouchableOpacity 
            onPress={() => ToggleProductVisible()}
            style={[tailwind("flex-1 p-3 m-1 rounded-lg"), {backgroundColor: item.background}]}>

                <Modal 
                    animationType="slide" 
                    visible={productVisible}
                    onRequestClose={() => ToggleProductVisible()}>
                        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
                </Modal>
                
                <View>
                    <Text style={tailwind('font-bold text-base')}>{ellipsis(item.title, 20)}</Text>
                    <Text style={tailwind('text-base')}>${item.price}</Text>
                    <View style={tailwind('p-5 mb-6 items-center justify-center')}>
                        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
                    </View>
                </View>
        </TouchableOpacity>
    )
}

export default ProductComponent