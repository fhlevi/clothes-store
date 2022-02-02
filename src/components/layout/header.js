import React from 'react';
import * as theme from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProfileStyle} from '../../style';
import { View, Text, TouchableOpacity } from 'react-native';

function Header(props) {
    return ( 
        <View style={ProfileStyle.header}>
            <TouchableOpacity onPress={props.closeModal}>
                <Icon name="keyboard-arrow-left" size={30} color={theme.colors.light.foreground} />
            </TouchableOpacity>
            <Text style={ProfileStyle.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
}

export default Header;