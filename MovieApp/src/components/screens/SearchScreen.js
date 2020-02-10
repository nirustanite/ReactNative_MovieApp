import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { ListItem, Card } from 'react-native-elements';
import { FlatList } from 'react-native';
import { getSearchList } from '../../actions/movieactions';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import styles from '../../styles/SearchScreen.styles';

// Te Search Screen implements Search Functionality
class SearchScreen extends Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  // A local state for the search string
  state = {
    search: '',
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    // This is the Last method in the activity lifecycle
    // Removing Event Listener for the BackPress 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {

    // To navigate to the previos page
    this.props.navigation.goBack()
    // Returning true/false is described below
    return true;
  }
  
  //This function sets the search String to the state
  updateSearch = search => {
    this.setState({ search }); // updates the local state
    this.props.getSearchList(this.state.search) // a function to get the search list of movies based on search text
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
          searchIcon={{ size: 24}}
          text={this.state.search}
          placeholder="Type Here..."
          onChangeText={(text) => this.updateSearch(text)}
          value={this.state.search}
        />
        <>
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => (
              <Card containerStyle={styles.container} >
                <ListItem onPress={() => this.props.navigation.navigate('DetailsScreen', { title: item.title, images: item.images })}
                  title={`${item.title}`}
                  leftAvatar={{ source: { uri: item.images[0] }, rounded: false }}
                  containerStyle={styles.listcontainer}
                />
              </Card>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      </>
    );
  }
}

// mapStateToProps is used for selecting part of data from the store. 
// fetching searched movie list from the store
const mapStateToProps = (state) => {
  return {
    data: state.searchList
  }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps, { getSearchList })(SearchScreen)