import React from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import styles from '../styles/paginainicial';

const PaginaSec = ({ navigation }) => {

    const win = Dimensions.get('window');

    const ratio = win.width / 500

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>

                    <View style={styles.logoCont}>
                        <Image
                            source={require('../assets/pginicial-logo.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />

                        <Text style={styles.subtitle}>DENÚNCIAS URBANAS</Text>


                    </View>

                    
                    <Text style={{marginTop: 390, position: 'absolute', fontSize: 40, color: '#fff', zIndex: 1, fontWeight: 'bold'}}>Olá, você é:</Text>

                    <ImageBackground
                        source={require('../assets/bgwallpaper.jpeg')}
                        style={{
                            width: win.width,
                            height: 750 * ratio,
                            opacity: 0.9
                        }}>
                    </ImageBackground>
                    
                    



                        
                    <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Pessoa física</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LoginEmpresa')}>
                        <Text style={styles.textButton}>Pessoa jurídica</Text>
                    </TouchableOpacity>
                   

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default PaginaSec