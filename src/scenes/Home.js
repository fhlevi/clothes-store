// Library
import React, {useState, useEffect} from 'react'
import {  View, Modal, Text, TextInput, FlatList } from 'react-native';
import { useQuery } from "react-query";
import Icon from 'react-native-vector-icons/MaterialIcons';
import tailwind from 'tailwind-rn';
// Components
import ProductComponent from '../components/productsComponents';
import BagModal from '../components/bagModal';
// styles
import * as theme from '../constants/theme';

const currentTheme = theme.colors.light;

function HomePage () {
    const { data, isLoading } = useQuery("products", () => fetch('https://fakestoreapi.com/products').then(res=>res.json()))
    const [bagVisible, setBagVisible] = useState(false)
    const [productList, setProductList] = useState([])

    useEffect(() => {
        if(!isLoading) {
            const dataMap = mappingBackground(data)
            setProductList(dataMap)
        }
    }, [isLoading])

    const mappingBackground = (value) => {
        return value?.map((_data, i) => {
            return {
                ..._data,
                background: '#ddd'
            }
        })
    }
    const ToggleBagVisible = () => {
        setBagVisible(!bagVisible)
    }
    const handleFilterProduct = (val) => {
        if(val.length) {
            const productSearch = data?.filter(_filter => (_filter.title.toLowerCase().includes(val.toLowerCase())))

            setProductList(mappingBackground(productSearch))
        } else {
            setProductList(mappingBackground(data))
        }
    }

    return(
        <View style={tailwind('flex-1')}>
            <Modal 
                animationType="slide" 
                visible={bagVisible}
                onRequestClose={() => ToggleBagVisible()}>
                    <BagModal closeModal={() => ToggleBagVisible()} />
            </Modal>

            <View style={tailwind('px-3 flex-1')}>
                {/* Header */}
                <View style={tailwind('pt-4 flex-row items-center justify-between')}>
                    <View>
                        <Text style={tailwind('font-bold text-xl')}>Clothes Store</Text>
                        <Text style={tailwind('text-sm text-gray-600')}>find the best choices for you</Text>
                    </View>
                </View>

                {/* Search */}
                <View style={tailwind('pl-2 mt-5 flex-row items-center rounded bg-gray-200')}>
                    <Icon name="search" color={theme.colors.gray} size={25} />
                    <TextInput 
                    style={tailwind('flex-1')} 
                    placeholder="Search.." 
                    onChangeText={(value) => handleFilterProduct(value)}
                    placeholderTextColor={theme.colors.gray} />
                </View>

                {/* Body */}
                <View style={tailwind('flex-1 mt-5')}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={productList}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ProductComponent item={item} />
                            )
                        }} 
                    />
                </View>
            </View>
        </View>
    )
}

function Home () {
    return (
        <HomePage />
    )
}

export default Home