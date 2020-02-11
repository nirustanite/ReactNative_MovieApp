import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk'; 
import { getToken } from '../../actions/authactions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'; // to provide navigation to this component
import { storeData, clearData } from '../../storagefunction';

// Facebook Login
class FBLogin extends Component {

  handlePress = () => {
    clearData();
    LoginManager.logOut();
    LoginManager.logInWithPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
            clearData();
            LoginManager.logOut();
        }
        else {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              const token = data.accessToken.toString()
              storeData(token)
              this.props.navigation.navigate('MovieListScreen')
            }
          )
        }
       
      },
      (error) => {
        console.error(error)
      }
    );
  }

  render() {
    return (
      <View>
        <Button title="sign in with facebook"
          onPress={this.handlePress} />
      </View>
    );
  }
};

export default connect(null, { getToken })(withNavigation(FBLogin))