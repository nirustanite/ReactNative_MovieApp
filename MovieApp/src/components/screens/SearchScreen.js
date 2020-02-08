import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { ListItem, Card } from 'react-native-elements';
import { FlatList, Button} from 'react-native';
import {getSearchList} from '../../actions/movieactions';
import {connect} from 'react-redux';

// Te Seach Component implements Search Functionality
class SearchScreen extends Component {

   // A local state for the search String, and data fro api
    state = {
      search: '',
    };

    /*
      This function set the search String to the state
      It fetches thee API based on the search String, gets the data and stores it in data(local state)
      The API used id '/search/movie' provided with APIkey and search String
    */
    updateSearch = search => {
      this.setState({ search }); // updates the local state
      this.props.getSearchList(this.state.search)
    };

   

    /* rendering of Search Bar and Results
        The result is given as a List with
           -- title 
           -- Image
    */
    render() {
      return (
        <>
          <SearchBar
            searchIcon={{ size: 24 }}
            text={this.state.search}
            placeholder="Type Here..."
            onChange={e => console.log(e.nativeEvent)}
            onChangeText={(text) => this.updateSearch(text)}
            value={this.state.search}
          />
          <>
            <FlatList          
              data={this.props.data}          
              renderItem={({ item }) => ( 
              <Card containerStyle={{padding: 0}} >
                <ListItem onPress={() => this.props.navigation.navigate('DetailsScreen',{title: item.title, images:item.images, release:item.release, director: item.director})}                         
                    title={`${item.title}`}                       
                    leftAvatar={{ source: {uri: item.images[0]}, rounded: false }} 
                    containerStyle={{ borderBottomWidth: 0 }} 
                /> 
              </Card>      
              )}    
              keyExtractor={ (item, index) => index.toString() }                         
            /> 
          </>
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
      return{
          data: state.searchList
      }
  }
  export default connect(mapStateToProps,{getSearchList})(SearchScreen)