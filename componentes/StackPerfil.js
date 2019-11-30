import {createStackNavigator} from 'react-navigation-stack';
import Perfil from './Perfil';


export const StackPerfil = createStackNavigator({
    Perfil :{
        screen:Perfil,
        navigationOptions: {
            header: null,
        },
    },
},{
    initialRouteName: 'Perfil',
     defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#71c418',
                elevation: 8,
                shadowOpacity: 0,
            },
            //headerTintColor: '#168a20',
            //headerTitleStyle: {fontWeight: 'bold', color: '#ffffff'}
        }
    });