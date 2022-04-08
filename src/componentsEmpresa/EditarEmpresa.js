import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollView ,ActivityIndicator, FlatList} from 'react-native';
import styles from '../styles/usuario'
import { useUser } from '../content/context'
import { updateEmpresa } from '../../../BACKEEND/queries';

const Empresa = ({navigation}) => {
    
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { empresaLogado, setEmpresaLogado } = useUser()
    
    
    
   
    const getUsersByID = async () => {
        try{
            const response = await fetch('http://172.20.10.8:3000/empresa/')
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
    const [cnpj, setCnpj] = useState('')
    const [senha, setSenha] = useState('')
    const [confirm, setConfirm] = useState('')


    const handleEmailChange = (email) => { setEmail(email) }
    const handleCnpjChange = (cnpj) => { setCnpj(cnpj) }
    const handleSenhaChange = (senha) => { setSenha(senha) }
    const handleConfirmChange = (confirm) => { setConfirm(confirm) }





    const update = async (req, res) => {
     if(confirm != senha){

     } else {
        if ( email != "" && cnpj != "" && senha != "") {

        try{
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    cnpj: cnpj,
                    senha: senha
                })
            }

            // console.log("ID:" + id)
            await fetch(`http://172.20.10.8:3000/empresa/1`, requestOptions)
            // setData(data.filter(user => user.id != id))
        }catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
}}


    
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
    
                <Text style={styles.title}>Gerencie seus dados:</Text>
              
            
                    <Text style={styles.subtitle}>{empresa.nome} {empresa.sobrenome} </Text>
                    <Text style={styles.subtitle}>{userLogado.cpf} </Text>
                    <Text style={styles.subtitle}>{userLogado.email} </Text>
                    <Text style={styles.subtitle}>  Altere sua senha abaixo! </Text>




                
         
                <View style={styles.content}>
                <TextInput style={styles.input} onChangeText={handleEmailChange} placeholder='Email:' ></TextInput>
                <TextInput style={styles.input} onChangeText={handleCnpjChange} placeholder='Cnpj:' ></TextInput>
                <TextInput style={styles.input} onChangeText={handleSenhaChange} placeholder='Digite sua nova senha: ' ></TextInput>
                <TextInput style={styles.input} onChangeText={handleConfirmChange} placeholder='Confirme sua nova senha:'></TextInput> 
                </View>
                
                  
                   
                   <TouchableOpacity style={styles.button} onPress={() => updateEmpresa()}>
                        <Text style={styles.textButton}>Atualizar</Text>
                   </TouchableOpacity>
                  
            </View>
            </ScrollView>
        )
}

export default Empresa