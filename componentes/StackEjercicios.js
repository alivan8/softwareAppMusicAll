import {createStackNavigator} from 'react-navigation-stack';
import Ejercicio from './Ejercicio';



export const StackEjercicios = createStackNavigator({
    Ejercicio:{
        screen : Ejercicio,
        navigationOptions: {
            header: null,
        },
    }
},{
    initialRouteName: 'Ejercicio',
     defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#188bc4',
                elevation: 8,
                shadowOpacity: 0,
            },
            //headerTintColor: '#168a20',
            //headerTitleStyle: {fontWeight: 'bold', color: '#ffffff'}
        }
    })