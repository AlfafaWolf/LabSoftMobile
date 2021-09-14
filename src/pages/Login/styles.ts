import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one'
import { Nunito_400Regular } from '@expo-google-fonts/nunito';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1FF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular'
    },

    title: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 64
    },

    label: {
        color: `${colors.purple}`,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4
    },

    input: {
        color: `${colors.purple}`,
        borderColor: `${colors.purple}`,
        borderRadius: 10,
        fontFamily: 'Nunito_400Regular',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },

    inputContainer: {
        width: '80%',
        paddingBottom: 10
    },

    button: {
        backgroundColor: `${colors.purple}`,
        height: 45,
        width: 156,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 31
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
    }
});
