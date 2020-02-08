import React, {Component} from 'react';
import SignInForm from '../SignInForm';
import {signInemail} from '../../actions/authactions';
import {connect} from 'react-redux';

class SignInScreen extends Component{

    state = {
        username: '',
        password: ''
      }
    
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
       onPress= (event) => {
        event.preventDefault()
        this.props.signInemail(this.state)
        this.setState({
          username: '',
          password: '',
        })
      }


    render(){
        return(
            <SignInForm 
                onPress={this.onPress}
                onChange={this.onChange}
                values={this.state}
            />
           
        )
    }
}

export default connect(null, {signInemail})(SignInScreen)