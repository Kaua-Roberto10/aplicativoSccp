import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Feed from '../pages/Feed';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Info1 from '../pages/Info1';
import Info2 from '../pages/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator InitialRouteName="Home"
    screenOptions={{tabBarActiveTintColor:"#1C4C96", 
    tabBarInactiveTintColor: "#000",
    }}>
      <TabBottom.Screen name="Home" component={Home}
      options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='home'/>);
             }
             return(
                <Ionicons size={size} color={color} name='home-outline'/>
             )
            }
        }} />
      <TabBottom.Screen name="Feed" component={Feed} 
      options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='newspaper'/>);
             }
             return(
                <Ionicons size={size} color={color} name='newspaper-outline'/>
             )
            }
        }} />
      <TabBottom.Screen name="About" component={About}
       options={{
        headerShown:false,
        tabBarIcon:({focused, size,
         color})=>{if(focused){
             return(<Ionicons size={size} color={color} name='information-circle'/>);
             }
             return(
                <Ionicons size={size} color={color} name='information-circle-outline'/>
             )
            }
        }} />
    </TabBottom.Navigator>

  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1C4C96',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            drawerStyle: {
                backgroundColor: '#1C4C90',
            },
            drawerLabelStyle: {
                color: '#fff',
            },
        }}>
            <Drawer.Screen 
            name='Inicio'
            component={TabBottomRoutes}
            options={{
                drawerLabel: 'Inicio',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='home' />
                )
            }}/>
            <Drawer.Screen 
            name='Blog'
            component={StackRoutes}
            options={{
                drawerLabel: 'Blog',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='archive' />
                )
            }}/>
        </Drawer.Navigator>     
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Blog' component={Blog}/>
            <Stack.Screen name='Info1' component={Info1}/>
            <Stack.Screen name='Info2' component={Info2}/>
        </Stack.Navigator>
    );
}