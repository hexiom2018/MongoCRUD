import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from '../src/screens/home'
import Create from  '../src/screens/create'



const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Create:{
        screen:Create
    }
  

},
);

const Navigation = createAppContainer(StackNavigator)
export default Navigation;