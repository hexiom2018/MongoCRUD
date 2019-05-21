import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from '../src/screens/home'



const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
  

},
);

const Navigation = createAppContainer(StackNavigator)
export default Navigation;