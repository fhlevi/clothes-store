import React from 'react';
import { 
    View,  
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme'
import * as Products from '../constants/products'
import ProductBagComponent from './productBagComponent'
import useStore from '../store';

const BagModal = (props) => {
    const cart = useStore((state) => state.cart)
    
    return (    
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Keranjang Kamu</Text>
                    <Text style={styles.headerSubTitle}>{cart.length} ITEMS</Text>
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={cart}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <ProductBagComponent item={item} />
                            )
                        }} 
                    />
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Beli Sekarang</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.light.background
    },
    header: {
        height: 80,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h6
    },
    headerSubTitle: {
        fontSize: theme.sizes.h2,
        color: theme.colors.gray
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    footerContainer: {
        padding: 20,
        backgroundColor: theme.colors.light.background
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        flexDirection: 'row',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3
    }
});

export default BagModal;