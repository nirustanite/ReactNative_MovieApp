import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/MovieListComponent.styles';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderComponent from './HeaderComponenet';

// display the list of movies
export default function MovieListComponent(props) {
  return (
    <React.Fragment>
      <HeaderComponent />
      {props.movies !== [] ? <FlatGrid
        itemDimension={120}
        items={props.movies}
        style={styles.gridView}
        spacing={1}

        renderItem={({ item, index }) => (
          <ScrollView>
            {item && <View style={[styles.itemContainer, { backgroundColor: item.code }]} key={index}>
              {item.images &&
                <Image style={styles.image} resizeMode="cover" source={{ uri: item.images[0] }} />}
              <TouchableOpacity onPress={() => props.handlePress({ images: item.images, title: item.title, release: item.release, director: item.director })}>
                <Text style={styles.itemName}>{item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.itemCode}>{item.release}</Text>
            </View>}
          </ScrollView>
        )}
      />
        : <View>
          <Text>Loading</Text>
        </View>}

    </React.Fragment>
  )
}

