import { StyleSheet } from 'react-native';
import * as theme from '../../constants/theme';

const ProfileStyle = StyleSheet.create({ 
    container: {
      flex: 1
    },
    sectionForm: {
      marginTop: 15,
    },
    label: {
      fontWeight: 'bold'
    },
    btnTrash: {
      padding: 15,
      marginLeft: 10,
      marginTop: 8,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.lightGrey,
      color: theme.colors.lightGreen
    },
    input: {
      borderWidth: 1,
      flex: 1,
    },
    errorBorder: {
        borderColor: 'red'
    },
    textArea: {
        maxHeight: 90,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    header: {
        height: 60,
        paddingHorizontal: 13,
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorText: {
        color: '#FF483B'
    }, 
    headerTitle: {
        fontWeight: 'bold',
        color: theme.colors.light.foreground,
        fontSize: theme.sizes.h4,
        marginLeft: 15
    },
    bodyContainer: {
      flex: 1
    },
    footerContainer: {
      elevation: 18,
      borderTopColor: '#eaeaea',
      borderTopWidth: 1,
      backgroundColor: '#fff'
    },
    btnContainer: {
        borderRadius: 15,
        backgroundColor: theme.colors.lightGrey
    },
    addressBtn: {
        borderRadius: 15,
        backgroundColor: theme.colors.lightGrey,
    },
    btnText: {
        color: theme.colors.lightGreen,
    },
    cardAddress: {
      borderWidth: 1,
      borderColor: '#ddd',
      active: {
        borderColor: theme.colors.gray
      }
    }
})

export default ProfileStyle