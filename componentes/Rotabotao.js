import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Tl from './Tl';
import Ghost from './Ghost';

const Stack = createStackNavigator();

export default function RotaBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Tl" component={Tl} />
                <Stack.Screen name="Ghost" component={Ghost} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
