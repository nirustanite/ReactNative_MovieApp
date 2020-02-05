import React, {Component}  from 'react';
import { Text, View, Image, SafeAreaView} from 'react-native';
import styles from '../../styles/HomeScreen.styles';

export default class HomeScreen extends Component{
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.iconimage} source={require('../../images/icon.png')} />
                    </View>
                    
                </View>
                
            </>
        )
    }
}