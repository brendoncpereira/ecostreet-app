import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },

    
    flex:{
        flex: 1,
        backgroundColor:'#0f644d',
        width: '100%',
        paddingVertical: 25,
        
        
    },

    openDrawer: {
        width: 30,
        height: 30,
        position: 'absolute',
        marginHorizontal: 8,
        marginTop: -25
        
        },
  
    
    textHeader: {
        color:'#fff',
        fontSize: 17,
        textAlign: 'center'
    },

    title:{
        marginTop: 20,
        fontSize: 30,
        marginBottom: 20
    },

    denunciaContainer:{
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },

    miniContainer:{
        flex:1,
        width: '90%',
        // height: 80,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        padding: 15,
        marginTop: 20
    },

    textContainer:{
        flexDirection: 'row',
        paddingVertical: 5,
        textAlign: 'justify',
        flexWrap: 'wrap'
    },

    textContainerDesc:{ //sem o flexDirection: 'row'
        paddingVertical: 5,
        textAlign: 'justify'
    },
    
    titleContent:{
        fontWeight: 'bold'
    }, 
    
    text:{
        
    },

    deleteButton:{
        alignItems: 'flex-end'
    },

    button:{
        width: 300,
        marginBottom: 100,
        marginTop: 50,
        backgroundColor: '#0F644D',
        borderColor: '#A4EFC1',
        borderWidth: 1,
        borderRadius: 5
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    },


})