import React, {useState, useEffect} from 'react';
import { useForm, Controller  } from "react-hook-form";
import {View,Text,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import tailwind from 'tailwind-rn';

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
            <View style={tailwind('mt-3')}>
                <Text style={tailwind('font-bold text-lg')}>Pilih Alamat</Text>
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

            <View style={tailwind('mt-3')}>
                <Text style={tailwind('font-bold text-lg')}>Pilih Kurir</Text>
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
            
            <View style={tailwind('mt-3')}>
                <Text style={[tailwind('font-bold text-lg'), styles.btnText]}>Pilih Metode Pembayaran</Text>
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
        <TouchableOpacity style={[styles.btnContainer, tailwind('items-center justify-center flex-row p-4')]} onPress={handleSubmit(onSubmit)}>
            {
                isLoading ? 
                    <ActivityIndicator /> 
                : 
                    <Text style={tailwind('font-bold text-base')}>Bayar Sekarang</Text>

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
        borderRadius: 15,
        backgroundColor: theme.colors.lightGrey
    },
    btnText: {
        color: theme.colors.lightGreen
    },
    textError: {
        color: '#FF483B'
    }
});

export default PaymentModal;