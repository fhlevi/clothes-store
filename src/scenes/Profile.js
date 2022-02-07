import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import tailwind from 'tailwind-rn';
import {ProfileStyle} from '../style';
import {ProfileStore} from '../store';
import ProfileModal from '../components/profileModal';

function Profile() {
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
      <View style={[ProfileStyle.container, tailwind('bg-white')]}>
        <Modal 
          animationType="slide" 
          visible={profileVisible}
          onRequestClose={() => setProfileVisible(!profileVisible)}>
            <ProfileModal closeModal={() => setProfileVisible(!profileVisible)} />
        </Modal>

        <View style={[ProfileStyle.container, tailwind('p-5')]}>
          <FlatList 
            showsVerticalScrollIndicator={false}
            data={addressList}
            renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity key={index} style={[
                    ProfileStyle.cardAddress, tailwind('h-20 rounded-lg mb-4 p-2'), (item.active ? ProfileStyle.cardAddress.active : '')
                  ]} 
                  onPress={() => handleSelectAddress(item)}>
                    <Text style={tailwind('text-base font-bold mb-2')}>{item["nameAddress_"+index]}</Text>
                    <Text style={tailwind('text-sm')}>{item['completeAddress_'+index]}</Text>
                  </TouchableOpacity>
                )
            }}
          />
        </View>
        
        <View style={[tailwind('p-5'), ProfileStyle.footerContainer]}>
          <TouchableOpacity style={[ProfileStyle.btnContainer, tailwind('p-4 items-center justify-center flex-row')]} onPress={() => setProfileVisible(!profileVisible)}>
            <Text style={[ProfileStyle.btnText, tailwind('font-bold text-sm')]}>Edit Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Profile