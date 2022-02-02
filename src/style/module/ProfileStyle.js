import { StyleSheet } from 'react-native';
import * as theme from '../../constants/theme';

const ProfileStyle = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: theme.colors.light.background
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
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
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
      flex: 1,
      padding: 20
    },
    footerContainer: {
      padding: 20,
      backgroundColor: theme.colors.light.background,
      elevation: 18,
      borderTopColor: '#eaeaea',
      borderTopWidth: 1
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGrey,
        flexDirection: 'row',
    },
    addressBtn: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGrey,
        flexDirection: 'row',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.lightGreen,
    },
    cardAddress: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      height: 80,
      borderRadius: 8,
      marginBottom: 15,
      active: {
        borderColor: theme.colors.gray
      }
    }
})

export default ProfileStyle