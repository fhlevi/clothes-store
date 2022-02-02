import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller  } from "react-hook-form";

import {ProfileStyle} from '../style';

import * as theme from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from './layout/header';
import Wrapper from './layout/wrapper';

import {ProfileStore} from '../store';

function FooterSection (props) {
    const {handleSubmit, formColumn, closeModal} = props
    const setProfile = ProfileStore((state) => state.setProfile)
    
    const handleSaveAddress = (data) => {
        let payload = {
            name: '',
            address: []
        }

        let tempData = {}
        
        Object.entries(data).forEach(([keys, value]) => {
            if(value) {
                if(keys !== 'name') {
                    tempData = {
                        ...tempData,
                        [keys]: value
                    }

                    if(Object.keys(tempData).length == 2) {
                        payload.address.push(tempData)

                        tempData = {}
                    }
                }
                
                payload.name = value
            }
        })
        
        payload.address = formColumn.map((_formColumn, idx) => {
            return {
                ..._formColumn,
                ...payload.address[idx],
                id: idx,
                active: false
            }  
        })
        
        setProfile(payload)

        closeModal()
    }

    return (
        <TouchableOpacity style={ProfileStyle.btnContainer} onPress={handleSubmit(handleSaveAddress)}>
            <Text style={ProfileStyle.btnText}>Simpan</Text>
        </TouchableOpacity>    
    )
}

function HeaderSection (props) {
    return (
        <Header 
            title="Edit Profile"
            closeModal={props.closeModal}
        />
    )
} 

function BodySection (props) {
    const {handleCreateForm, handleRemoveItem, control, errors, formColumn, profiles} = props

    return (
        <>
            <View 
                style={ProfileStyle.sectionForm}
            >
                <Text style={ProfileStyle.label}>Nama</Text>
                <Controller 
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange } }) => (
                        <TextInput
                            onChangeText={onChange}
                            defaultValue={profiles.name}
                            style={[ProfileStyle.input, (errors.name && ProfileStyle.errorBorder)]}
                            placeholder="Masukan Nama"
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text style={ProfileStyle.errorText}>Nama wajib diisi.</Text>}
            </View>
                <View 
                    style={ProfileStyle.sectionForm}
                >
                    <Text style={ProfileStyle.label}>Daftar Alamat</Text>
                    {formColumn.map((_formColumn, idx) => (
                        <View style={{ marginBottom: 10 }} key={idx}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Controller 
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <TextInput
                                        onChangeText={onChange}
                                        defaultValue={_formColumn["nameAddress_"+idx]}
                                        style={[ProfileStyle.input, (errors["nameAddress_"+idx] && ProfileStyle.errorBorder)]}
                                        placeholder={_formColumn.placeholderInput}
                                        />
                                    )}
                                    name={"nameAddress_"+idx}
                                />
                                {errors["nameAddress_"+idx] && <Text style={ProfileStyle.errorText}>Nama Alamat wajib diisi.</Text>}
                                {formColumn.length > 1 && 
                                    <TouchableOpacity style={ProfileStyle.btnTrash} onPress={() => handleRemoveItem(idx)}>
                                        <Icon name="trash" size={15} color={theme.colors.light.foreground} />
                                    </TouchableOpacity>
                                }
                            </View>

                            <Controller 
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange } }) => (
                                    <TextInput
                                        style={[ProfileStyle.textArea, (errors["completeAddress_"+idx] && ProfileStyle.errorBorder)]}
                                        multiline
                                        editable
                                        numberOfLines={4}
                                        maxLength={40}
                                        defaultValue={_formColumn['completeAddress_'+idx]}
                                        onChangeText={onChange}
                                        placeholder={_formColumn.placeholderTextArea}
                                    />
                                )}
                                name={"completeAddress_"+idx}
                            />
                            {errors["completeAddress_"+idx] && <Text style={ProfileStyle.errorText}>Alamat Lengkap wajib diisi.</Text>}
                        </View>
                    )
                )}
                <TouchableOpacity style={ProfileStyle.addressBtn} onPress={() => handleCreateForm()}>
                    <Text style={ProfileStyle.btnText}>Tambah Alamat</Text>
                </TouchableOpacity>    
            </View>
        </>
    )
}

const form = {
    placeholderInput: 'Nama Alamat',
    placeholderTextArea: 'Masukan Alamat Lengkap',
}

function ProfileModal(props) {
    const { control, handleSubmit,  formState: { errors } } = useForm()
    const profiles = ProfileStore((state) => state.profiles)
    const [formColumn, setFormColumn] = useState([form])

    const handleCreateForm = () => {
        setFormColumn([...formColumn, form])
    }

    useEffect(() => {
        if(Object.keys(profiles).length > 0) {
            setFormColumn(profiles.address)
        }
    }, []) 

    const setAddress = (value, idx, type) => {
        let data = formColumn
        data[idx][type] = value
    }
    const handleRemoveItem = (index) => {
        const data = [...formColumn]
        data.splice(index, 1)
        setFormColumn(data)
    }

    return (   
        <Wrapper
            header={<HeaderSection closeModal={props.closeModal} />}
            body={
                <BodySection
                    formColumn={formColumn} 
                    handleCreateForm={handleCreateForm}
                    handleRemoveItem={handleRemoveItem}
                    setAddress={setAddress}
                    profiles={profiles}
                    control={control}
                    errors={errors}
                />
            } 
            footer={<FooterSection {...props} handleSubmit={handleSubmit} formColumn={formColumn} />}
        />
    );
}

export default ProfileModal;