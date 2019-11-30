import {createStackNavigator} from 'react-navigation-stack';

import EntrenamientoRitmo from './EntrenamientoRitmo';


export const StackEntrenamientoRitmo = createStackNavigator({
    EntrenamientoRitmo:{
        screen :EntrenamientoRitmo,
         navigationOptions: {
            header: null,
        },
    },
},{
    initialRouteName: 'EntrenamientoRitmo',
     defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#d9113c',
                elevation: 8,
                shadowOpacity: 0,
            },
            //headerTintColor: '#168a20',
            //headerTitleStyle: {fontWeight: 'bold', color: '#ffffff'}
        }
    });