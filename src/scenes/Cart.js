import React, {useState} from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import ProductBagComponent from '../components/productBagComponent';
import {CartStore} from '../store';
import {toRupiah} from '../helper/stringToCurrency';
import PaymentModal from '../components/paymentModal';
import {CartStyle} from '../style';
import {SnackBar} from './../components/snackBar';

function Cart() {
    const [bagVisible, setBagVisible] = useState(false)
    const products = CartStore((state) => state.cart)

    const totalProductPrice = () => {
        return products.reduce((acc, curr) => {
            let currentPrice = curr.price
            let total = currentPrice * curr.qty

            return acc + total
        }, 0)
    }
    const handleOpenModal = () => {
        if(products.length) {
            setBagVisible(true)
            return true
        }
        
        SnackBar({text: 'Tidak ada barang di keranjang', color: '#FF483B'})
        return false
    }
    
    return ( 
        <View style={CartStyle.container}>
            <Modal 
                animationType="slide" 
                visible={bagVisible}
                onRequestClose={() => setBagVisible(!bagVisible)}>
                    <PaymentModal closeModal={() => setBagVisible(!bagVisible)} />
            </Modal>

            <View style={CartStyle.header}>
                <Text style={CartStyle.headerTitle}>Keranjang</Text>
                <Text style={CartStyle.headerSubTitle}>{products.length} Barang</Text>
            </View>

            <View style={CartStyle.bodyContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ProductBagComponent item={item} />
                        )
                    }} 
                />
            </View>

            <View style={CartStyle.footerContainer}>
                <View>
                    <Text>Total:</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{toRupiah(totalProductPrice())}</Text>
                </View>
                <TouchableOpacity style={CartStyle.btnContainer} onPress={() => handleOpenModal()}>
                    <Text style={CartStyle.btnText}>Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;