import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Teoria from './introducctionIntervalos/Teoria';
import Diccionario from './introducctionIntervalos/Diccionario';



export const tabAuditivo = createMaterialTopTabNavigator(
    {
        Teoria: {
        screen: Teoria,
        navigationOptions:{
            tabBarOptions: {
                style: {
                    backgroundColor: '#71c418',
                  },
            }
        }
       
      },
      Diccionario: {
        screen: Diccionario,
        navigationOptions:{
            tabBarOptions: {
                style: {
                    backgroundColor: '#71c418',
                  },
            }
        }
      },
    },
    {
      tabBarPosition: 'top',
      
    },
  );