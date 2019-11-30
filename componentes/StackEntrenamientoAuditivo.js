import {createStackNavigator} from 'react-navigation-stack';
import EntrenamientoAuditivo from './EntrenamientoAuditivo';
import Icon from 'react-native-vector-icons/Ionicons';
import{Image} from 'react-native';
import {tabAuditivo} from './tabAuditivo';


export const StackEntrenamientoAuditivo = createStackNavigator({
    EntrenamientoAuditivo:{
        screen: EntrenamientoAuditivo,
        navigationOptions: {
            header: null,
        },
    },
    tabAuditivo:{
        screen:tabAuditivo,
    }

},{
    initialRouteName: 'EntrenamientoAuditivo',
     defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#71c418',
                elevation: 0,
                shadowOpacity: 0,
               
            },
            //headerTintColor: '#168a20',
            //headerTitleStyle: {fontWeight: 'bold', color: '#ffffff'}
        }
    });