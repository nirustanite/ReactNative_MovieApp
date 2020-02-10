import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity, BackHandler } from 'react-native';
import { Header } from 'react-native-elements';
import styles from '../../styles/DetailsScreen.styles';
import { SliderBox } from "react-native-image-slider-box";
import { loremIpsum } from 'react-lorem-ipsum';

// Display the details of the movie
export default class DetailsScreen extends Component {


    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount() {
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

        // to the back page
        this.props.navigation.goBack();
        return true;
    }

    render() {
        const { state } = this.props.navigation
        return (
            <ScrollView>
                <Header
                    leftComponent={
                        <TouchableOpacity onPress={this.handlePress}>
                            <Image
                                source={require('../../images/close.png')}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    }
                    centerComponent={<Text style={styles.title}>{state.params.title}</Text>}
                    containerStyle={styles.innercontainer} />
                <View style={styles.container} />
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