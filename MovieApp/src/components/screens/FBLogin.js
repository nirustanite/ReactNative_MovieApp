import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { getToken, fbLogout } from '../../actions/authactions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';


class FBLogin extends Component {

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
              this.props.getToken(token)
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
    console.log("navigation", this.props.navigation)
    return (
      <View>
          <Button title="sign in with facebook" 
                  onPress={this.handlePress}/>
      </View>
    );
  }
};

export default connect(null,{ getToken, fbLogout })(withNavigation(FBLogin))