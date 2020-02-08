import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000',
        textAlign: 'center',
       
    },
    container:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 3,
    },
    summarycontainer:{
        flex: 5,
        justifyContent:'space-between',
        alignItems:"center",
        padding: 20
    },
    detail:{
      display: 'flex',
      flexDirection: 'column',
    },
    summary:{
        textAlign:'center',
        fontSize: 16,
        opacity: 0.2
    }
})