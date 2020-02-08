import React, { Component } from 'react';
import { View, Button} from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { getToken, fbLogout } from '../../actions/authactions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';



class FBLogin extends Component {

  storeData = async (token) => {
    try {
      await AsyncStorage.setItem('accesstoken', token);
    } catch (error) {
      console.log("no Token")
    }
  };

  handlePress = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } 
        else{
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              const token = data.accessToken.toString()
              this.storeData(token)

            }
          )
        }
        this.props.navigation.navigate('MovieListScreen')
      },
      (error) => {
        console.log("Login fail with error: " + error);
      }
     
    );
  }

  render() {
    return (
      <View>
          <Button title="sign in with facebook" 
                  onPress={this.handlePress}/>
      </View>
    );
  }
};

export default connect(null,{ getToken, fbLogout })(withNavigation(FBLogin))