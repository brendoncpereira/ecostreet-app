import React, {useEffect, useState}from "react";
import { View, Text, Image, ImageBackground, ActivityIndicator, FlatList, TextInput} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUser } from '../content/context'

import Icon from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props, {navigation}) => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { userLogado, setUserLogado } = useUser()

    const getLogin = async () => {
        try{
            const response = await fetch('http://172.20.10.8:3000/users/')
            const json = await response.json()
            setData(json)
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getLogin()
    }, [])


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#0f644d'}}> 
            {/* PARTE DE CIMA DO DRAWER */}
            <View style={{ width: '100%', backgroundColor:'#0f644d', padding:10, height: '30%', flexDirection:'row', alignItems: 'center', marginBottom: 10}}>
                   
                   
                   
                   <Image source={require('../assets/Drawer.png')} style={{height:60, width:60, marginLeft: 10}}
                   resizeMode='contain'/>
               
                       
                <Text style={{fontSize:16, textAlign: 'center', marginLeft: 5}}> {userLogado.nome} {userLogado.sobrenome}</Text>
                       
                       
               
              
               </View>
                <View style={{flex:1, backgroundColor:'#fff'}}>
                <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            {/* PARTE DE BAIXO DO DRAWER */}
    
            
         
            </View>
 
            

    )
}

export default CustomDrawer