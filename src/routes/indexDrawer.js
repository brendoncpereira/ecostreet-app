import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import SuasDenuncias from '../components/SuasDenuncias'
import AboutUs from '../components/AboutUs'
import CustomDrawer from '../components/CustomDrawer'


import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Usuario from '../components/Usuario'

import Admin from '../components/Admin'
import Login from '../components/Login'
import PaginaInicial from '../components/PaginaInicial'
import PaginaSec from '../components/PaginaSec'



const Drawer = createDrawerNavigator()

const RotaDrawer = () => {

    return(

            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props}/>}
                //Estilizar todos os links do Drawer
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#DFEEEA',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'black',
                    drawerLabelStyle:
                     {fontSize: 16, padding:10, marginLeft: -30,}}}
            >

                <Drawer.Screen 
                 name='Suas denúncias'
                 component={SuasDenuncias}
                 options={{
                    drawerIcon: ({color}) => (
                       <MaterialIcons
                          name="house"
                          size={25}
                          color={color}
                       />
                    ),
                 }}
                 
                 />
                
              
                    
                    <Drawer.Screen 
                    name='Gerenciar perfil'
                    component={Usuario}
                    options={{
                        drawerIcon: ({color}) => (
                           <MaterialIcons
                              name="settings"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />

      <Drawer.Screen 
                    name='Sobre a Ecostreet'
                    component={AboutUs}
                    options={{
                        drawerIcon: ({color}) => (
                           <MaterialIcons
                              name="people-alt"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />

            
                         <Drawer.Screen 
                    name='Sair'
                    component={PaginaSec}
                    options={{
                        drawerIcon: ({color}) => (
                           <Ionicons
                              name="exit"
                              size={30}
                              color={color}
                              
                           />
                        ),
                     }} 
                />   
            </Drawer.Navigator>
    )
}

export default RotaDrawer