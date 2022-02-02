import { 
    StyleSheet
} from 'react-native';
import * as theme from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.light.background
    },
    header: {
        height: 80,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h6
    },
    headerSubTitle: {
        fontSize: theme.sizes.h2,
        color: theme.colors.gray
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    footerContainer: {
        padding: 20,
        backgroundColor: theme.colors.light.background,
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 18,
        borderTopColor: '#eaeaea',
        borderTopWidth: 1,
    },
    btnContainer: {
        width: 120,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGrey,
        flexDirection: 'row',
    },
    btnText: {
        fontWeight: 'bold',
        color: theme.colors.lightGreen,
        fontSize: theme.sizes.h3
    }
});

export default styles