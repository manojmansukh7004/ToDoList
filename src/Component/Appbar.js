import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as colors from '../Constant/colors';
import { APP_FONTS, FONT_SIZE } from '../Constant/styleConfig'
const Appbar = ({ Title, onPress, onPressSend }) => {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer }>
                <TouchableOpacity style={{ width: '30%', justifyContent: 'center', alignItems: 'center', }}
                    onPress={() => { onPress() }}
                >
                    <Image
                        source={Title == 'Home' ? require('../Assets/menu.png') : require('../Assets/back.png')}
                        style={{ height: 25, width: 25 }}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{Title}</Text>
            </View>
            {
                Title == 'Home' ? 
                    <View style={styles.subSecContainer}>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                                source={require('../Assets/search1.png')}
                                style={{ height: 25, width: 25 }}
                            />
                        </View>
                        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                                source={require('../Assets/more.png')}
                                style={{ height: 25, width: 25 }}
                            />
                        </View>
                    </View>
                    :
                    <View style={styles.subSecContainer}>
                    <TouchableOpacity style={{ width: '40%', justifyContent: 'center', alignItems: 'center', }}
                        onPress={()=>{onPressSend() }}
                    >
                        <Image
                            source={require('../Assets/send.png')}
                            style={{ height: 25, width: 25 }}
                        />
                    </TouchableOpacity>
                    

                </View>
            }
        </View>
    );
}

export default Appbar;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.COLOR_LIGHT_NAVY_BLUE,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        width: '50%',
    },
    subSecContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        width: '50%', 
    },
    title: {
        fontSize: FONT_SIZE.xl,
        fontFamily: APP_FONTS.NunitoExtraBold,
        color: colors.COLOR_WHITE,
    }
})