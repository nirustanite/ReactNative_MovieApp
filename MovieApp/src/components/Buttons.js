import React from 'react';
import {Button} from 'react-native';


export default function Buttons(props){
    return(
        <Button title={props.title} onPress={props.onPress} />
    )
}