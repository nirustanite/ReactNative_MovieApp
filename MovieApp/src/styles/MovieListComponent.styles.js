import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-start',
      borderRadius: 5,
      padding: 10,
      height: 130,
      display: 'flex',
      flexDirection: 'column',
    },
    cardcontainer:{
      padding: 0
    },
    itemName: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      textAlign: 'left'
    },
    image: {
      flex:1,
      height: '100%',
      width: '100%'
    },
});
   