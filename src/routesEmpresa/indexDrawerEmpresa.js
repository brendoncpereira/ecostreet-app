import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

// import SuasDenuncias from '../components/SuasDenuncias'
import AboutUs from '../components/AboutUs'
import CustomDrawer from '../componentsEmpresa/CustomDrawerAdmin'
import PaginaSec from '../components/PaginaSec'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Admin  from '../components/Admin';
import Empresa from '../componentsEmpresa/EditarEmpresa'


const Drawer = createDrawerNavigator()

const RotaDrawer = () => {

    return(

            <Drawer.Navigator
                drawerContent={props => <CustomDrawerAdmin {...props}/>}
                //Estilizar todos os links do Drawer
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#DFEEEA',
                    drawerActiveTintColor: 'black',
                    drawerInactiveTintColor: 'black',
                    drawerLabelStyle:
                     {fontSize: 16, marginLeft:-32, padding:10}}}
            >
                  <Drawer.Screen 
                    name='Lista de denuncias'
                    component={Admin}
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
                    name='Sobre a Ecostreet'
                    component={AboutUs}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="people-alt"
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                />
                    
                    <Drawer.Screen 
                    name='Gerenciar perfil empresarial'
                    component={Empresa}
                    options={{
                        drawerIcon: ({color}) => (
                           <SimpleLineIcons
                              name="settings"
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
                              size={25}
                              color={color}
                           />
                        ),
                     }} 
                /> 

               
                
               
            </Drawer.Navigator>
    )
}

export default RotaDrawer