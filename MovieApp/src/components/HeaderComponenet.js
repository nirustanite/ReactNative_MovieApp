import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import styles from '../styles/HeaderComponent.styles';


class HeaderComponent extends Component{
    
    render(){
        console.log(this.props.token)
        return(
            <React.Fragment>
                {this.props.token !== null ? <Header
                    leftComponent={<LeftComponent />}
                    centerComponent={<Text style={styles.title}>Movies</Text>}
                    containerStyle={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'space-around' }}
                    rightComponent={<RightComponent />}
                    >
                </Header>: <Header
                    centerComponent={<Text style={styles.title}>sign in by email</Text>}
                    containerStyle={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'space-around' }}>
                </Header>}
                <View style={styles.container}/>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        token: state.token
    }
}

export default connect(mapStateToProps)(HeaderComponent)


//{ text: 'Movies', style: { color: '#000', fontSize: 20, fontWeight: 'bold' } }

//{ text: 'sign in by email', style:{ color: '#000', fontSize: 20, fontWeight: 'bold'} }