import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import * as theme from '../../constants/theme'

function Wrapper(props) {
    return ( 
        <SafeAreaView style={styles.container}>
            <View>
                {props.header}
            </View>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    {props.body}                    
                </View>

            </ScrollView>
            {/* Footer */}
            <View style={styles.footerContainer}>
                {props.footer}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.light.background,
        paddingTop: 10,
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    footerContainer: {
        padding: 20,
        elevation: 18,
        borderTopColor: '#eaeaea',
        borderTopWidth: 1, 
        position: 'relative',
        backgroundColor: theme.colors.light.background
    }
});

export default Wrapper;