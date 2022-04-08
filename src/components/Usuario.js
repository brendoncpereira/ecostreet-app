import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView ,ActivityIndicator, FlatList} from 'react-native';
import styles from '../styles/usuario'
import { useUser } from '../content/context'

const Usuario = ({navigation}) => {
    
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { userLogado, setUserLogado } = useUser()
    
    
    
   
    const getUsersByID = async () => {
        try{
            const response = await fetch('http://172.20.10.8:3000/users/9')
            const json = await response.json()
            setData(json)
            
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
}

    useEffect(() => {
        getUsersByID()
    }, [])

    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [confirm, setConfirm] = useState('')


    const handleEmailChange = (email) => { setEmail(email) }
    const handleCpfChange = (cpf) => { setCpf(cpf) }
    const handleSenhaChange = (senha) => { setSenha(senha) }
    const handleConfirmChange = (confirm) => { setConfirm(confirm) }





    const updateUser = async (req, res) => {
     
            console.log(email)
      
        if ( email != "" && cpf != "" && senha != "") {

        try{
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    cpf: cpf,
                    senha: senha
                })
            }

            // console.log("ID:" + id)
            await fetch(`http://172.20.10.8:3000/users/9`, requestOptions)
            // setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
}


    
        return(
            <ScrollView>
            <View style={styles.container}>
            
            <View style={styles.flex}>
    
            <Text style={styles.textHeader}>Meu perfil</Text>
    
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
    
            <Image
            source={require('../assets/Group.png')} style={styles.openDrawer}
            resizeMode='contain'
                />
    
            </TouchableOpacity>
    
            </View>
                    
                <Text style={styles.title}>Gerencie seus dados pessoais: </Text>
              
                <View style={{marginTop: 15}}>
                  
                
                    <Text style={styles.subtitle}>{userLogado.nome} {userLogado.sobrenome} </Text>
                    
                    <Text style={styles.subtitle}>CPF: {userLogado.cpf} </Text>
                    <Text style={styles.subtitle}>Email: {userLogado.email} </Text>
                    </View>



                
         
                <View style={styles.content}>
                <TextInput style={styles.input} onChangeText={handleEmailChange} placeholder='Email:' ></TextInput>
                <TextInput style={styles.input} onChangeText={handleCpfChange} placeholder='CPF:' ></TextInput>
                <TextInput style={styles.input} onChangeText={handleSenhaChange} placeholder='Digite sua nova senha: '  secureTextEntry={true}></TextInput>
                <TextInput style={styles.input} onChangeText={handleConfirmChange} placeholder='Confirme sua nova senha:'  secureTextEntry={true}></TextInput> 
                </View>
                
                  
                   
                   <TouchableOpacity style={styles.button} onPress= { () => updateUser()} >
                        <Text style={styles.textButton} onPress={() => navigation.navigate("SuasDenuncias")}>Atualizar</Text>
                   </TouchableOpacity>
                  
            </View>
            </ScrollView>
        )
}

export default Usuario