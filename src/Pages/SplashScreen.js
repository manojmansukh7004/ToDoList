import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { APP_FONTS, FONT_SIZE} from '../Constant/styleConfig';
import Loader from 'react-native-three-dots-loader'
import * as colors from '../Constant/colors'


const SplasScreen = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace('Dashboard');

        },2000)

    },[])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../Assets/logo.png')}
                style={{ height: 80, width: 80, marginBottom: 40 }}
            />
            <Loader size={8} dotMargin={5} background={colors.COLOR_LIGHT_NAVY_BLUE}/>
        </View>
    );
}
export default SplasScreen;
