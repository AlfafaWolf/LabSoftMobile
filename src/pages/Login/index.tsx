import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

const Login: React.FC = () => {

    const navigation = useNavigation();

    return (
       <View style={styles.container}>
           <Text style={styles.text}>Dashboard</Text>
           <Text style={styles.title}>DCE</Text>
           <View style={styles.inputContainer}>
                <Text style={styles.label}>Login</Text>
                <TextInput style={styles.input}
                    placeholder="aluno@uvv.net.br"
                />
           </View>
           <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="••••••••••••••••••"
                />
           </View>
           <RectButton style={styles.button}>
               <Text style={styles.buttonText} onPress={()=>{}}>Entrar</Text>
           </RectButton>
       </View>
    );
}

export default Login;
