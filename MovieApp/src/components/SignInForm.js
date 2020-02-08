import React from 'react';
import { Button, View,Text} from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from '../styles/SignInForm.styles';
import {Header, Input} from 'react-native-elements';

export default function SignInForm(props){
    return(
        <>
        <Header
            centerComponent={<Text style={styles.title}>sign in by email</Text>}
            containerStyle={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'space-around' }}>
        </Header>
        <View style={styles.container}>
            <Input
                style={styles.textinput}
                onChangeText={props.onChange}
                value={props.values}
                placeholder='Username'
            />
            <Input
                value={props.values}
                onChangeText={props.onChange}
                secureTextEntry={true}
                placeholder='Password'
            />
            {props.message && <Text>{props.message}</Text>}
            
        </View>
        <Button title='Sign In' onPress={props.onPress} />
        </>
       
    )
    
}