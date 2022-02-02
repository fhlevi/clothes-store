import React, {useState, useEffect} from 'react';
import { useForm, Controller  } from "react-hook-form";
import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
import PickerSelect from 'react-native-picker-select';

import * as theme from '../constants/theme'

import {ProfileStore, CartStore} from '../store';

import Wrapper from './layout/wrapper';
import WrapperSuccess from './layout/wrapperSuccess';

const FormSection = ({ control, errors }) => {
    const profiles = ProfileStore((state) => state.profiles)
    const [addressList, setAddressList] = useState([]);

    const courierList = [
        {label: 'JNE', value: 'jne'},
        {label: 'J&E', value: 'jnt'},
        {label: 'Sicepat', value: 'sicepat'},
    ]

    const payment = [
        {label: 'BCA', value: 'bca'},
        {label: 'Mandiri', value: 'mandiri'},
        {label: 'BRI', value: 'bri'},
    ]

    useEffect(() => {
        const mappingDataProfile = () => {
            if(Object.keys(profiles).length) {
                const data = profiles.address.map((_data, index) => {
                    return {
                        label: _data['nameAddress_'+index],
                        value: _data.id
                    }
                })
    
                setAddressList(data)
            }
        }

        mappingDataProfile()
    }, [profiles])

    return (
        <>
            <View style={styles.formContainer}>
                <Text style={styles.labelForm}>Pilih Alamat</Text>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PickerSelect
                            onBlur={onBlur}
                            onValueChange={onChange}
                            items={addressList}
                            value={value}
                        />
                    )}
                    name="address"
                />
                {errors.address && <Text style={styles.textError}>Alamat wajib diisi.</Text>}
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.labelForm}>Pilih Kurir</Text>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PickerSelect
                            onBlur={onBlur}
                            onValueChange={onChange}
                            items={courierList}
                            value={value}
                        />
                    )}
                    name="courier"
                />
                {errors.courier && <Text style={styles.textError}>Kurir wajib diisi.</Text>}
            </View>
            
            <View style={styles.formContainer}>
                <Text style={styles.labelForm}>Pilih Metode Pembayaran</Text>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <PickerSelect
                            onBlur={onBlur}
                            onValueChange={onChange}
                            items={payment}
                            value={value}
                        />
                    )} 
                    name="payment"
                />
                {errors.courier && <Text style={styles.textError}>Metode Pembayaran wajib diisi.</Text>}
            </View>
        </>
    )
}

const FooterSection = ({ handleSubmit, setIsSuccess }) => {
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmit = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsSuccess(true)
        }, 3000)
    }

    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handleSubmit(onSubmit)}>
            {
                isLoading ? 
                    <ActivityIndicator /> 
                : 
                    <Text style={styles.btnText}>Bayar Sekarang</Text>

            }
        </TouchableOpacity>
    )
}

const PaymentModal = (props) => {
    const resetCart = CartStore((state) => state.resetItem)

    const { control, handleSubmit,  formState: { errors } } = useForm({
        address: '',
        courier: '',
        payment: ''
    })
    const [isSuccess, setIsSuccess] = useState(false)

    const handleRemoveItem = () => {
        resetCart()
        props.closeModal()
    }

    return (    
        <>
            {
                !isSuccess ? 
                    <Wrapper 
                        body={<FormSection control={control} errors={errors} />}
                        footer={<FooterSection closeModal={props.closeModal} handleSubmit={handleSubmit} setIsSuccess={setIsSuccess} />}
                    />
                : 
                    <WrapperSuccess closeModal={handleRemoveItem} />
            }
        </>
    );
};



const styles = StyleSheet.create({
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.lightGrey
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.lightGreen
    },
    labelForm: {
        fontWeight: 'bold',
        fontSize: 17
    },
    formContainer: {
        marginTop: 10
    },
    textError: {
        color: '#FF483B'
    }
});

export default PaymentModal;