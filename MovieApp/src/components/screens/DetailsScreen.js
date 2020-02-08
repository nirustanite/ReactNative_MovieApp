import React, { useState } from 'react';
import { ScrollView, Text, Image, View,TouchableOpacity,BackHandler } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../../styles/DetailsScreen.styles';
import { SliderBox } from "react-native-image-slider-box";
import {loremIpsum } from 'react-lorem-ipsum';

export default class DetailsScreen extends React.Component{

    
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handlePress = () => {
        this.props.navigation.goBack()
    }

    componentWillUnmount() {
        // This is the Last method in the activity lifecycle
        // Removing Event Listener for the BackPress 
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
       
        // To exit from your App
        this.props.navigation.goBack();
        // Returning true/false is described below
          return true;
        }

    render(){
        const {state} = this.props.navigation
        return(
            <ScrollView>
            <Header
              leftComponent={
              <TouchableOpacity onPress={this.handlePress}>
                    <Image
                        source={require('../../images/close.png')}
                        style={{ width: 20, height: 20, borderRadius: 40/2, marginLeft: 15}}
                    />
              </TouchableOpacity>
              }
              centerComponent={<Text style={styles.title}>{state.params.title}</Text>}
              containerStyle={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'space-around' }}/>
            <View style={styles.container}/>
            <View style={styles.detail}>
            <SliderBox
                images={state.params.images}
                sliderBoxHeight={200}
                sliderBoxWidth={100}
                circleLoop={true}
            />
            <View style={styles.summarycontainer}>
                <Text style={styles.title}>{state.params.title}</Text>
                <Text style={styles.summary}>
                    {loremIpsum()}
                </Text>
            </View>
            </View>
        </ScrollView>
    )
    }
}