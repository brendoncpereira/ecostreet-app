import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center'
        
    },

    title:{
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center'
    },


    input:{
        width: '80%',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#00D192',
        marginTop: 50,
        fontSize: 18
        
    },
    
    desc:{
        width: '80%',
        height: 200,
        padding: 10,
        borderWidth: 2,
        borderColor: '#00D192',
        marginTop: 100,
        fontSize: 18,
        textAlignVertical: 'top',
        marginBottom: 50
    },

    pickImg:{
        marginTop: 50,
        backgroundColor: '#e5e5e5',
        width: '50%',
        
    },

    pickImgText:{
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    
      button:{
        marginTop: 50,
        marginRight: 20, 
        alignSelf: 'flex-end',
        backgroundColor: '#0F644D',
        padding: 15,
        borderRadius: 5,
        borderColor: '#A4EFC1',
        borderWidth: 1,
        marginBottom: 20
    },

    textButton:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 15
    },
    texterro:{
        color:'red',
        marginRight:40
    },

        containerimg: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        logo: {
          width: 305,
          height: 159,
          marginBottom: 20,
        },
        instructions: {
          color: '#888',
          fontSize: 18,
          marginHorizontal: 15,
          marginBottom: 10,
        },
        // button: {
        //   backgroundColor: 'blue',
        //   padding: 20,
        //   borderRadius: 5,
        // },
        buttonText: {
          fontSize: 20,
          color: '#fff',
        },
        thumbnail: {
          width: 300,
          height: 300,
          resizeMode: 'contain',
        },
      });

