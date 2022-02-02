import React, {useState} from 'react'
import {  StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProductComponent from '../components/productsComponents';

import BagModal from '../components/bagModal';

import * as Products from '../constants/products';

const currentTheme = theme.colors.light;

const Home = () => {
    const [bagVisible, setBagVisible] = useState(false)
    const [productList, setProductList] = useState(Products.clothes)

    const ToggleBagVisible = () => {
        setBagVisible(!bagVisible)
    }
    const handleFilterProduct = (val) => {
        if(val.length) {
            let productSearch = Products.clothes.filter(_filter => (_filter.name.toLowerCase().includes(val.toLowerCase())))

            setProductList(productSearch)
        } else {
            setProductList(Products.clothes)
        }
    }

    return(
        <View style={{flex: 1}}>
            <Modal 
                animationType="slide" 
                visible={bagVisible}
                onRequestClose={() => ToggleBagVisible()}>
                    <BagModal closeModal={() => ToggleBagVisible()} />
            </Modal>

            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.titleText}>Clothes Store</Text>
                        <Text style={styles.subTitleText}>find the best choices for you</Text>
                    </View>
                </View>

                {/* Search */}
                <View style={styles.searchContainer}>
                    <Icon name="search" color={theme.colors.gray} size={25} />
                    <TextInput 
                    style={styles.textInputContainer} 
                    placeholder="Search.." 
                    onChangeText={(value) => handleFilterProduct(value)}
                    placeholderTextColor={theme.colors.gray} />
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: currentTheme.background
    },
    // Header Style
    headerContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badgeContainer: {
        top: -9, 
        right: -4,
        width: 18,
        height: 18,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        backgroundColor: theme.colors.green
    },
    badgeText: {
        color: theme.colors.light.background,
        fontSize: 12
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h5
    },
    subTitleText: {
        fontSize: theme.sizes.h3,
        color: theme.colors.gray
    },  
    iconCaontainer: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: currentTheme.foreground
    },
    // Search Style
    searchContainer: {
        paddingLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: theme.colors.clouds
    },
    textInputContainer: {
        flex: 1
    },
    // Body Style
    bodyContainer: {
        flex: 1,
        marginTop: 20,
    }
})

export default Home