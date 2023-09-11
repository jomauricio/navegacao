import React from 'react'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator initialRouteName='TelaA'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case "TelaA":
                        iconName = focused
                            ? 'list'
                            : 'list-ul';
                        break;
                    case "TelaB":
                        iconName = focused
                            ? 'question'
                            : 'question-circle';
                        break;
                    case "TelaC":
                        iconName = focused
                            ? 'exclamation'
                            : 'exclamation-circle';
                        break;
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB} />
        <Tab.Screen name='TelaC' component={TelaC} />
    </Tab.Navigator>
)