import {StyleSheet} from 'react-native';
import * as theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h4
    },
    badgeContainer: {
        top: -4, 
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        backgroundColor: theme.colors.light.background
    },
    badgeText: {
        color: theme.colors.light.foreground
    },
    imgContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counSection: {
        flex: 1
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: theme.colors.light.background
    },
    sizeCircleContainer: {
        width: 30, 
        height: 30,
        marginRight: 10,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.clouds,
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h5,
    },
    descriptionText: {
        marginTop: 20,
        fontWeight: '900',
        fontSize: theme.sizes.h4,
        color: theme.colors.gray
    },
    footerContainer: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: theme.colors.light.background
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.lightGreen,
    },
    quantityContainer: {
        marginVertical: 12,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 50,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        buttonQty: {
            padding: 5,
            borderRadius: 50,
            backgroundColor: '#eaeaea'
        }
    }
});

export default styles