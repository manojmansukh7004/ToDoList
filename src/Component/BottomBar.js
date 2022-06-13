import React from 'react';
import { TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as colors from '../Constant/colors'

const BottomBar = ({ onInputChange, value, handleSaveTask }) => {

    return (
        <View style={[styles.container,{paddingRight:  value != ''? null :10}]}>

            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: value != ''? '85%' : '100%'}}>
                <TextInput
                    placeholder='Enter Quick Task Here'
                    onChangeText={text => onInputChange(text)}
                    underlineColorAndroid={colors.COLOR_WHITE}
                    style={{ width: '100%', color: colors.COLOR_WHITE }}
                    placeholderTextColor={colors.COLOR_WHITE}
                    value={value}
                />
            </View>
            {value != ''?
            <TouchableOpacity 
            onPress={()=>{ handleSaveTask()}}
            style={{ justifyContent: 'center', alignItems: 'center', width: '15%', backgroundColor: 'transparent' }}>
                <Image
                    source={require('../Assets/correct.png')}
                    style={{ height: 30, width: 30 }}
                />
            </TouchableOpacity>
            : null}
        </View>
    );
}
export default BottomBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: colors.COLOR_LIGHT_NAVY_BLUE,
    }
})