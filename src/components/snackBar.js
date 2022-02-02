import Snackbar from 'react-native-snackbar';

export function SnackBar(props) {
    const {text, color, textColor} = props

    Snackbar.show({
        text: text,
        duration: 1500,
        backgroundColor: color,
        textColor: textColor
    });
}