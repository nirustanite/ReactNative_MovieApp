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
      height: 160,
      borderRadius: 2,
      borderTopLeftRadius: 2,
      borderStyle: 'solid'
    },
    itemName: {
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 9,
      textAlign: 'center'
    },
    image: {
      height: 70,
     
    }
});
   