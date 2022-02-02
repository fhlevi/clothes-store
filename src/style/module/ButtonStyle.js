import { StyleSheet } from 'react-native'
import * as theme from '../../constants/theme';

const styles = StyleSheet.create({
    buttonPrimary: {
        padding: 15,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE8E7'
    },
    btnText: {
        color: '#CA0D00',
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.lightGreen,
    },
});

export default styles;