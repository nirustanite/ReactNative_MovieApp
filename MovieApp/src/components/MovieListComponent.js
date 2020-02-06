import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import styles from '../styles/MovieListComponent.styles';
import {View, Text, Image} from 'react-native';
import HeaderComponent from './HeaderComponenet';
import { Card } from 'react-native-elements';

export default function MovieListComponent(props){
    return(
      <React.Fragment>
        <HeaderComponent />
        {props.movies !==[] ? <FlatGrid
        itemDimension={130}
        items={props.movies}
        style={styles.gridView}

        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]} key={index}>
            <Card>
              {item.images && <Image style={styles.image}  resizeMode="cover" source={{uri : item.images[1]}} />}
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemCode}>{item.release}</Text>
            </Card>
          </View>
         
        )}
      /> 
      : <View>
          <Text>Loading</Text>
        </View>}
      
      </React.Fragment>
    )
}