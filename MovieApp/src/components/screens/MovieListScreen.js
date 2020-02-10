import React, { Component } from 'react';
import { getMovieList } from '../../actions/movieactions';
import { connect } from 'react-redux';
import MovieListComponent from '../MovieListComponent';
import { withNavigation } from 'react-navigation';
import { BackHandler } from 'react-native';

// Gets the list of movies
class MovieListScreen extends Component {


    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount() {
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
        this.props.navigation.navigate('DetailsScreen', { title: data.title, images: data.images, release: data.release, director: data.director })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.movies && <MovieListComponent movies={this.props.movies} handlePress={this.handlePress} />}
            </React.Fragment>

        )
    }

}

// mapStateToProps is used for selecting part of data from the store. 
// fetching list of movies from the store
const mapStateToProps = (state) => {
    return {
        movies: state.movieList
    }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps, { getMovieList })(withNavigation(MovieListScreen))