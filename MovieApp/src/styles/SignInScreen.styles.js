import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  containerstyle:{
    backgroundColor: 'rgb(255,255,255)', 
    justifyContent: 'space-around'
  },
  outercontainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 3
},
});