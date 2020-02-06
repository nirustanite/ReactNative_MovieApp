import React, { Component } from 'react';
import { getMovieList } from '../../actions/movieactions';
import { connect } from 'react-redux';
import MovieListComponent from '../MovieListComponent';

class MovieListScreen extends Component{
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getMovieList()
    }

    render(){
        return(
            <MovieListComponent movies={this.props.movies}/>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        movies: state.movieList
    }
}

export default connect(mapStateToProps,{ getMovieList })(MovieListScreen)