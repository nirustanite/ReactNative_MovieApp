import React, {Component}  from 'react';
import { Text, View, Image, SafeAreaView} from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import FBLogin from './FBLogin';

export default class HomeScreen extends Component{
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.iconimage} source={require('../../images/icon.png')} />
                    </View>
                    <View style={styles.bottom}>
                        <FBLogin />
                    </View>
                </View>
                
            </>
        )
    }
}