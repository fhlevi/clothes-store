import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {ProfileStyle} from '../style';
import {ProfileStore} from '../store';
import ProfileModal from '../components/profileModal';

function Profile() {
    const tailwind = useTailwind();
    const profiles = ProfileStore((state) => state.profiles)
    const [addressList, setAddressList] = useState([])
    const [profileVisible, setProfileVisible] = useState(false)
    
    useEffect(() => {
      setAddressList(profiles.address)
    }, [profiles.address])
    
    const handleSelectAddress = (item) => {
      const data = addressList.map(_addressList => {
        let active = false
        
        if(item.id == _addressList.id) {
          active = true          
        }
        
        return {
          ..._addressList,
          active
        }
      })
      
      setAddressList(data)
    }
    return (
      <View style={ProfileStyle.container}>
        <Modal 
          animationType="slide" 
          visible={profileVisible}
          onRequestClose={() => setProfileVisible(!profileVisible)}>
            <ProfileModal closeModal={() => setProfileVisible(!profileVisible)} />
        </Modal>

        <View style={ProfileStyle.bodyContainer}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={addressList}
            renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity key={index} style={[ProfileStyle.cardAddress, (item.active ? ProfileStyle.cardAddress.active : '')]} onPress={() => handleSelectAddress(item)}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>{item["nameAddress_"+index]}</Text>
                    <Text style={{ fontSize: 14 }}>{item['completeAddress_'+index]}</Text>
                  </TouchableOpacity>
                )
            }}
          />
        </View>
        
        <View style={ProfileStyle.footerContainer}>
          <TouchableOpacity style={ProfileStyle.btnContainer} onPress={() => setProfileVisible(!profileVisible)}>
            <Text style={ProfileStyle.btnText}>Edit Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Profile