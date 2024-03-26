import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AccountScreen, HomeScreen, MyTicketScreen, NotificationScreen } from '../screens/index';
import { RouteName } from './routes/routeConfig';
const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={RouteName.HomeScreen} component={HomeScreen} options={{}} />
                <Tab.Screen name={RouteName.MyTicketScreen} component={MyTicketScreen} />
                <Tab.Screen name={RouteName.NotificationScreen} component={NotificationScreen} />
                <Tab.Screen name={RouteName.AccountScreen} component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;