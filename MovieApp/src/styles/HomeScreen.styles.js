import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
   
    imagecontainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconimage:{
        width: 100,
        height: 100,
        marginTop: 50   
    },
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
})