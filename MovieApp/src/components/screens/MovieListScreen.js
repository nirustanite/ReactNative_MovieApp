import React, { Component } from 'react';
import { getMovieList} from '../../actions/movieactions';

import { connect } from 'react-redux';
import MovieListComponent from '../MovieListComponent';

import { BackHandler } from 'react-native';


class MovieListScreen extends Component{
    
    
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
        this.props.getMovieList() 
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
    // This is the Last method in the activity lifecycle
    // Removing Event Listener for the BackPress 
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
       
        // To exit from your App
          BackHandler.exitApp();
        // Returning true/false is described below
          return true;
        }

    handlePress = (data) => {
         //console.log(data)
         console.log("inside")
         this.props.navigation.navigate('DetailsScreen', {title: data.title, images:data.images, release:data.release, director: data.director})
    }

    render(){
        return(
            <MovieListComponent movies={this.props.movies} handlePress={this.handlePress}/>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        movies: state.movieList
    }
}

export default connect(mapStateToProps,{ getMovieList})(MovieListScreen)